
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import { env } from './config/env.js';

import enquiryRoutes from './routes/enquiryRoutes.js';

import {
  notFound,
  errorHandler,
} from './middleware/errorHandler.js';

const app = express();

// Security middleware
app.use(helmet());

// Allowed frontend origins
const allowedOrigins = env.CLIENT_ORIGIN
  .split(',')
  .map((origin) => origin.trim().replace(/\/$/, ''))
  .filter(Boolean);

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests without an Origin header
    // (e.g. local server-to-server requests).
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.warn(`CORS blocked origin: ${origin}`);
    return callback(new Error('Not allowed by CORS'));
  },

  credentials: true,

  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

  allowedHeaders: ['Content-Type', 'Authorization'],

  optionsSuccessStatus: 204,
};

// Apply CORS before routes and rate limiting
app.use(cors(corsOptions));

// Request body parsing
app.use(express.json({ limit: '30kb' }));

// Health check
app.get('/api/health', (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;

  res.status(isConnected ? 200 : 503).json({
    success: isConnected,
    name: 'KAGAI Innovation Technology API',
    status: isConnected ? 'ok' : 'unavailable',

    database: isConnected
      ? 'connected'
      : 'disconnected',

    databaseMode: env.MONGODB_MODE,

    databaseName: isConnected
      ? mongoose.connection.name
      : null,

    timestamp: new Date().toISOString(),
  });
});

// Enquiry API
app.use(
  '/api/v1/enquiries',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 8,
    standardHeaders: true,
    legacyHeaders: false,
  }),
  enquiryRoutes
);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;

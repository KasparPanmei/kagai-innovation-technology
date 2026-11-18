
import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDatabase() {
  mongoose.set('strictQuery', true);

  await mongoose.connect(env.MONGODB_URI, {
    serverSelectionTimeoutMS:
      env.MONGODB_SERVER_SELECTION_TIMEOUT_MS,

    autoIndex: env.NODE_ENV !== 'production',
  });

  console.log(
    `MongoDB connected (${env.MONGODB_MODE}): ${mongoose.connection.name}`
  );

  return mongoose.connection;
}

export async function disconnectDatabase() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    console.log('MongoDB connection closed.');
  }
}

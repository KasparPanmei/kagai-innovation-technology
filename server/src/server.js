
import app from './app.js';
import { env } from './config/env.js';
import {
  connectDatabase,
  disconnectDatabase,
} from './config/db.js';

let server;
let isShuttingDown = false;

async function start() {
  try {
    // Connect to MongoDB before accepting requests.
    await connectDatabase();

    // Use the platform-assigned port on Render,
    // or the local default port during development.
    const PORT = env.PORT || 5000;
    const HOST = '0.0.0.0';

    server = app.listen(PORT, HOST, () => {
      const isProduction = env.NODE_ENV === 'production';
      console.log('KAGAI INNOVATION TECHNOLOGY');
      console.log('Backend API Started Successfully');

      console.log(`Environment: ${env.NODE_ENV}`);
      console.log(`API Port: ${PORT}`);
      console.log(`Database Mode: ${env.MONGODB_MODE}`);

      console.log(
        `Database: ${
          env.MONGODB_MODE === 'atlas'
            ? 'MongoDB Atlas'
            : 'Local MongoDB'
        }`
      );
      if (!isProduction) {
        console.log(`Local API: http://localhost:${PORT}`);
        console.log(`Health Check: http://localhost:${PORT}/api/health`);
      } else {
        console.log('Running on Render production environment');
      }

    });

  } catch (error) {
    console.error('Unable to start KAGAI API:', error.message);
    process.exit(1);
  }
}

async function shutdown(signal) {
  if (isShuttingDown) return;

  isShuttingDown = true;

  console.log(`${signal} received. Shutting down KAGAI API...`);

  try {
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) reject(error);
          else resolve();
        });
      });
    }

    await disconnectDatabase();

    console.log('KAGAI API shutdown completed.');
    process.exit(0);

  } catch (error) {
    console.error('Shutdown error:', error.message);
    process.exit(1);
  }
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

await start();

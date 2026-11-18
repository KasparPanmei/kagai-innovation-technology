
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

    server = app.listen(env.PORT, () => {
      console.log('KAGAI INNOVATION TECHNOLOGY');
      console.log('Backend API Started Successfully');
      console.log(`API: http://localhost:${env.PORT}`);
      console.log(`Database: ${env.MONGODB_MODE}`);
      console.log(`Database name: ${process.env.MONGODB_MODE === 'atlas'
        ? 'MongoDB Atlas'
        : 'Local MongoDB'}`);
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

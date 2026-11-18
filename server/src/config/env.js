
import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';

// Always load server/.env, regardless of the terminal directory.
config({
  path: fileURLToPath(new URL('../../.env', import.meta.url)),
});

const mode = (process.env.MONGODB_MODE || 'local')
  .trim()
  .toLowerCase();

if (!['local', 'atlas'].includes(mode)) {
  throw new Error(
    'Invalid MONGODB_MODE. Use "local" or "atlas".'
  );
}

const localUri =
  process.env.MONGODB_LOCAL_URI ||
  'mongodb://127.0.0.1:27017/kagai_innovation_technology';

const atlasUri =
  process.env.MONGODB_ATLAS_URI ||
  process.env.MONGODB_URI ||
  '';

const mongoUri = mode === 'local' ? localUri : atlasUri;

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',

  PORT: Number(process.env.PORT || 5000),

  MONGODB_MODE: mode,

  MONGODB_URI: mongoUri,

  MONGODB_SERVER_SELECTION_TIMEOUT_MS: Number(
    process.env.MONGODB_SERVER_SELECTION_TIMEOUT_MS || 10000
  ),

  CLIENT_ORIGIN:
    process.env.CLIENT_ORIGIN || 'http://localhost:5173',
};

if (!env.MONGODB_URI) {
  throw new Error(
    `MongoDB URI is missing for mode "${mode}". ` +
    `Configure ${
      mode === 'local'
        ? 'MONGODB_LOCAL_URI'
        : 'MONGODB_ATLAS_URI'
    } in server/.env.`
  );
}

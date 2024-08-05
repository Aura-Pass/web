const IDENTITY_API_URL: string =
  process.env.IDENTITY_API_URL || 'http://localhost:3001';

const config = {
  IDENTITY_API_URL,
} as const;

export default config;

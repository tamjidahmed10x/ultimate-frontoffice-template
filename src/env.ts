// Basic environment configuration
export const env = {
  NODE_ENV: import.meta.env.MODE || "development",
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
} as const;

export default env;

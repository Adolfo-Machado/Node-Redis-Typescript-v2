// config/config.ts
export const redisConfig = {
  connection: process.env.REDIS_CONNECTION || 'redis://127.0.0.1:6379'
};

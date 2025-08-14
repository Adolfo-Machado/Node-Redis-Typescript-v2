// middlewares/cacheMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import Redis from 'ioredis';
import { redisConfig } from '../config/config';

const redisClient = new Redis(redisConfig.connection);

const checkCache = (cacheKey: string) => async (req: Request, res: Response, next: NextFunction) => {

    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
        res.setHeader("cache-response", 'true');
        return res.send(JSON.parse(cachedData));
    }

    next();
};

export {
    redisClient,
    checkCache
};
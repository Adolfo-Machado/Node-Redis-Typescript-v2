// controllers/ProductController.ts
import { Request, Response } from 'express';
import { Redis } from 'ioredis'

import { redisConfig } from '../config/config'
import { logService } from '../services/logService';
import { fetchProductsMock } from '../services/getProductsMock';



const redisClient = new Redis(redisConfig.connection)


export const getAllProductsMock = async (req: Request, res: Response) => {

    logService(req);
    let products = await fetchProductsMock();

    return res.send(products);
};


export const getAllProductsMockRedis = async (req: Request, res: Response) => {

    logService(req)
    let clients = await fetchProductsMock()

    if (clients.length) {
        await redisClient.set('getAllProducts', JSON.stringify(clients), "EX", 60)
    }

    res.send(clients)
}

export const clearProductsCache = async (req: Request, res: Response) => {
    logService(req)
    await redisClient.del('getAllProducts')
    res.send({ CacheClient: 'Limpo' })
}

// controllers/ClientController.ts
import { Request, Response } from 'express'
import { Redis } from 'ioredis'

import { redisConfig } from '../config/config'
import { logService } from '../services/logService'
import { fetchClientsMock } from '../services/getClientsMock'



const redisClient = new Redis(redisConfig.connection)


export const getAllClientsMock = async (req: Request, res: Response) => {
    logService(req)
    let clients = await fetchClientsMock()

    return res.send(clients)
}


export const getAllClientsMockRedis = async (req: Request, res: Response) => {

    logService(req)
    let clients = await fetchClientsMock()

    if (clients.length) {
        await redisClient.set('getAllClients', JSON.stringify(clients), "EX", 60)
    }

    res.send(clients)
}

export const clearClientsCache = async (req: Request, res: Response) => {
    logService(req)
    await redisClient.del('getAllClients')
    res.send({ CacheClient: 'Limpo' })
}

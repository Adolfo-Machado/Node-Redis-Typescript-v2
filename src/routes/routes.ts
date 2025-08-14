// routes/routes.ts
import { Router } from 'express';

import { checkCache } from '../middlewares/cacheMiddleware';
import { getAllProductsMock, getAllProductsMockRedis, clearProductsCache } from '../controllers/ProductControllerMock';
import { getAllClientsMock, getAllClientsMockRedis, clearClientsCache } from '../controllers/ClientControllermock';


const router = Router();

router.get('/prod-mock', getAllProductsMock);
router.get('/prod-mock-redis', checkCache('getAllProducts'), getAllProductsMockRedis);
router.get('/clear-prod-redis', clearProductsCache);


router.get('/cli-mock', getAllClientsMock);
router.get('/cli-mock-redis', checkCache('getAllClients'), getAllClientsMockRedis);
router.get('/clear-cli-redis', clearClientsCache);


export default router;

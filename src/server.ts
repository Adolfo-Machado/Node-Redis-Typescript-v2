// server.ts
import express from 'express';
import cors from 'cors';
import router from './routes/routes';

import { redisClient } from './middlewares/cacheMiddleware';

const app = express();
const port = process.env.PORT || 2000;

app.use(cors());
app.use('/', router);


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing server and Redis client');
    server.close(() => {
        console.log('Server closed');
        redisClient.quit(() => {
            console.log('Redis client disconnected');
            process.exit(0);
        });
    });
});

process.on('exit', (code) => {
    console.log(`Process exited with code: ${code}`);
});

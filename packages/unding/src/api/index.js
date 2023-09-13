import express from 'express';

export function createAPIRouter() {
    const router = express.Router();

    router.get('/', async (req, res) => {
        console.log('api');
        res.send('');
    });

    return router;
}

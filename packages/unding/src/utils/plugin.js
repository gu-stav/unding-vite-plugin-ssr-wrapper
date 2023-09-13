import express from 'express';

export function createPluginRouter(routes) {
    const router = express.Router();

    routes.forEach((route) => {
        router['get'](async (req, res) => {
            res.send(route.handler());
        });
    });

    return router;
}

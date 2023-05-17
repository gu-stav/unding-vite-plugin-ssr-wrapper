import express from 'express';
import { renderPage } from 'vite-plugin-ssr/server';
import { join } from 'node:path';
import * as vite from 'vite';

export async function startServer({ isProduction = true, path }) {
    const app = express();

    if (isProduction) {
        app.use(express.static(join(path, 'dist', 'client')));
    } else {
        const viteDevMiddleware = await vite.createServer({
            root: path,
            server: { middlewareMode: true }
        });

        app.use(viteDevMiddleware.middlewares)
    }

    app.get('*', async (req, res, next) => {
        const pageContext = await renderPage({ urlOriginal: req.originalUrl });

        if (pageContext.httpResponse === null) {
            return next()
        }

        const { body, statusCode, contentType } = pageContext.httpResponse
        res.status(statusCode).type(contentType).send(body)
    })

    const port = 4000;

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    });
}

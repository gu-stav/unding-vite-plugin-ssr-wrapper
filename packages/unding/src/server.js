import express from 'express';
import { renderPage } from 'vite-plugin-ssr/server';
import { join } from 'node:path';
import { createServer } from 'vite';

import { unding } from './index.js';

export async function startServer({ env = 'production', cwd, port = 4000 }) {
    const app = express();

    if (env === 'production') {
        app.use(express.static(join(cwd, 'dist', 'client', { index: false })));
    } else {
        const vite = await createServer({
            configFile: false,
            root: cwd,
            plugins: [unding()],
            server: { middlewareMode: true }
        });

        app.use(vite.middlewares)
    }

    app.get('*', async (req, res, next) => {
        const pageContext = await renderPage({ urlOriginal: req.originalUrl });

        if (pageContext.httpResponse === null) {
            return next()
        }

        const { body, statusCode, contentType } = pageContext.httpResponse
        res.status(statusCode).type(contentType).send(body)
    })

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    });
}

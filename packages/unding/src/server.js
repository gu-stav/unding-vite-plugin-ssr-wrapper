import express from 'express';
import { renderPage } from 'vite-plugin-ssr/server';
import { join } from 'node:path';
import { createServer } from 'vite';
import { URL } from 'node:url';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

import { createContext } from './trpc/context.js';
import { appRouter } from './trpc/server.js';

const __dirname = new URL('.', import.meta.url).pathname;

export async function startServer({ env = 'production', cwd, config, port = 4000 }) {
    const app = express();

    if (env === 'production') {
        app.use(express.static(join(cwd, 'dist', 'client')));
    } else {
        const viteServer = await createServer({
            resolve: {
                alias: {
                    'vite-plugin-ssr': join(__dirname, '..', 'node_modules', 'vite-plugin-ssr')
                }
            },
            root: cwd,
            server: { middlewareMode: true }
        });

        app.use(viteServer.middlewares)
    }

    app.use('/trpc', createExpressMiddleware({ router: appRouter, createContext }));

    app.get('*', async (req, res, next) => {
        const pageContext = await renderPage({ unding: config, urlOriginal: req.originalUrl });

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

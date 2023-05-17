import express from 'express';
import { renderPage } from 'vite-plugin-ssr/server';
import { join } from 'node:path';
import { createServer } from 'vite';

export async function startServer({ env = 'production', cwd }) {
    const app = express();

    if (env === 'production') {
        app.use(express.static(join(cwd, 'dist', 'client')));
    } else {
        const viteDevMiddleware = await createServer({
            root: cwd,
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

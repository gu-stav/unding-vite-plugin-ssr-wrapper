import express from 'express';
import { renderPage } from 'vite-plugin-ssr/server';
import { join, resolve } from 'node:path';
import { URL } from 'node:url';
import { createServer } from 'vite';

const __dirname = new URL('.', import.meta.url).pathname;

export async function startServer({ env = 'production', cwd, config, port = 4000 }) {
    const app = express();

    if (env === 'production') {
        app.use(express.static(join(cwd, 'dist', 'client')));
    } else {
        const viteServer = await createServer({
            root: __dirname,
        });

        app.use(viteServer.middlewares)
    }

    app.get('*', async (req, res, next) => {
        const pageContext = await renderPage({ unding: config, urlOriginal: req.originalUrl });
        const { httpResponse } = pageContext

        if (!httpResponse) {
            return next()
        }

        const { body, statusCode, headers, earlyHints } = httpResponse;

        if (res.writeEarlyHints) {
            res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
        }

        headers.forEach(([name, value]) => res.setHeader(name, value))
        res.status(statusCode);
        res.send(body);
    })

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    });
}

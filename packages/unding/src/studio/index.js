import { createServer as createViteDevServer } from 'vite';
import { join, resolve } from 'node:path';
import { renderPage } from '@unding/renderer/vike';
import { URL } from 'node:url';

const __dirname = new URL('.', import.meta.url).pathname;

export async function createDevServer({ cwd }) {
    const viteServer = await createViteDevServer({
        resolve: {
            alias: {
                '#unding-config': resolve(cwd, 'unding.config.js'),
            }
        },
        root: join(__dirname, '..', 'studio'),
        server: { middlewareMode: true }
    });

    return viteServer;
}

export function renderStudio({ config }) {
    return async(req, res, next) => {
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
    }
}

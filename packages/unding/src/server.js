import express from 'express';
import { renderPage } from '@unding/renderer/vike';
import { join, resolve } from 'node:path';
import { URL } from 'node:url';
import { createServer } from 'vite';

const __dirname = new URL('.', import.meta.url).pathname;

export async function startServer({ env = 'production', cwd, config, port = 4000 }) {
    const app = express();

    if (env === 'production') {
        app.use(express.static(join(__dirname, 'dist', 'client')));

        // See https://github.com/brillout/vite-plugin-import-build#manual-import
        await import(join(__dirname, 'studio', 'dist', 'server', 'importBuild.cjs'));
    } else {
        const viteServer = await createServer({
            resolve: {
                alias: {
                    '#unding-config': resolve(cwd, 'unding.config.js'),
                }
            },
            root: join(__dirname, 'studio'),
            server: { middlewareMode: true }
        });

        app.use(viteServer.middlewares)
    }

    config.plugins.forEach(plugin => {
        if (plugin?.routes?.length) {
            plugin.routes.forEach((route) => {
                console.log('Register plugin route:', route.path);

                app.get(route.path, async (req, res) => {
                    res.send(route.handler());
                });
            })
        }
    })

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

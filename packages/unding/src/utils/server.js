import express from 'express';
import { renderPage } from '@unding/renderer/vike';
import { join, resolve } from 'node:path';
import { URL } from 'node:url';
import { createServer as createViteDevServer } from 'vite';

const __dirname = new URL('.', import.meta.url).pathname;

function createServer() {
    const app = express();

    return {
        createMiddleware(handler) {
            app.use(handler);
        },

        createRoute(method, path, handler) {
            app[method](path, handler);
        },

        listen(port = 4000) {
            app.listen(port, () => {
                console.log(`Server running at http://localhost:${port}`)
            });
        }

    }
}

export async function startServer({ env = 'production', cwd, config }) {
    const server = createServer();

    if (env === 'production') {
        server.createMiddleware(express.static(join(__dirname, '..', 'dist', 'client')));

        // See https://github.com/brillout/vite-plugin-import-build#manual-import
        await import(join(__dirname, '..', 'studio', 'dist', 'server', 'importBuild.cjs'));
    } else {
        const viteServer = await createViteDevServer({
            resolve: {
                alias: {
                    '#unding-config': resolve(cwd, 'unding.config.js'),
                }
            },
            root: join(__dirname, '..', 'studio'),
            server: { middlewareMode: true }
        });

        server.createMiddleware(viteServer.middlewares)
    }

    config.plugins.forEach(plugin => {
        if (plugin?.routes?.length) {
            plugin.routes.forEach((route) => {
                console.log('Register plugin route:', route.path);

                server.createRoute('get', route.path, async (req, res) => {
                    res.send(route.handler());
                });
            })
        }
    })

    server.createRoute('get', '*', async (req, res, next) => {
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
    });

    server.listen();
}

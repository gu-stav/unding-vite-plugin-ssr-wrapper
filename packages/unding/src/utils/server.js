import express from 'express';
import { join } from 'node:path';
import { URL } from 'node:url';

import { createAPIRouter } from '../api/index.js';
import { createPluginRouter } from './plugin.js';
import { createDevServer, renderStudio } from '../studio/index.js';

const __dirname = new URL('.', import.meta.url).pathname;

function createServer() {
    const app = express();

    return {
        createMiddleware(...args) {
            app.use(...args);
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
        await import(join(cwd, 'dist', 'server', 'importBuild.cjs'));
    } else {
        const viteServer = await createDevServer({ cwd });
        server.createMiddleware(viteServer.middlewares);
    }

    server.createMiddleware('/api', createAPIRouter());

    config.plugins.forEach(plugin => {
        if (plugin?.routes?.length > 0) {
            server.createMiddleware(`/${plugin.namespace}`, createPluginRouter(plugin.routes));
        }
    });

    server.createRoute('get', '*', renderStudio({ config }));
    server.listen();
}

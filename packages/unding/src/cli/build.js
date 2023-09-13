import { join, resolve } from 'node:path';
import { URL } from 'node:url';
import * as vite from 'vite';

const __dirname = new URL('.', import.meta.url).pathname;

export async function build() {
    const cwd = process.cwd();

    await Promise.all([
        vite.build({
            build: {
                outDir: join(cwd, 'dist')
            },
            root: resolve(__dirname, '..', 'studio'),
            resolve: {
                alias: {
                    '#unding-config': resolve(cwd, 'unding.config.js'),
                }
            },
        }),

        vite.build({
            resolve: {
                alias: {
                    '#unding-config': resolve(cwd, 'unding.config.js'),
                }
            },
            root: resolve(__dirname, '..', 'studio'),
            build: {
                outDir: join(cwd, 'dist'),
                ssr: {
                    external: ['@unding/studio']
                }
            },
        })
    ]);
}

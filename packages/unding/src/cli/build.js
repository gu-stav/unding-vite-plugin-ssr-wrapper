import { join, resolve } from 'node:path';
import { URL } from 'node:url';
import * as vite from 'vite';
import { unding } from '@unding/renderer/vite'

const __dirname = new URL('.', import.meta.url).pathname;

export async function build() {
    const cwd = process.cwd();
    const commonOptions = {
        build: {
            emptyOutDir: true,
            outDir: join(cwd, 'dist')
        },
        plugins: [ unding() ],
        root: resolve(__dirname, '..', 'studio'),
        resolve: {
            alias: {
                '#unding-config': resolve(cwd, 'unding.config.js'),
            }
        },
    }

    await Promise.all([
        vite.build(commonOptions),
        vite.build({
            ...commonOptions,
            build: {
                ...commonOptions.build,
                ssr: true,
            },
            ssr: {
                ...commonOptions.ssr,
                external: ['@unding/studio'],
            },
        })
    ]);
}

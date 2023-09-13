import { resolve } from 'node:path';
import { URL } from 'node:url';
import * as vite from 'vite';

const __dirname = new URL('.', import.meta.url).pathname;

export async function build() {
    await Promise.all([
        vite.build({
            root: resolve(__dirname, 'studio'),
        }),

        vite.build({
            root: resolve(__dirname, 'studio'),
            build: {
                ssr: {
                external: ['@unding/studio']
                }
            },
        })
    ]);
}

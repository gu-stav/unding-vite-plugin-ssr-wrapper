import ssr from 'vite-plugin-ssr/plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export function unding() {
    return [
        ...svelte({
            compilerOptions: {
                hydratable: true
            }
        }),

        ...ssr({
            extensions: [
                {
                  npmPackageName: '@unding/vite',
                  pageConfigsDistFiles: [
                    '@unding/vite/pages/+config.js',
                    '@unding/vite/pages/+onRenderClient.js',
                    '@unding/vite/pages/+onRenderHtml.js',
                  ]
                }
            ]
        })
    ]
}

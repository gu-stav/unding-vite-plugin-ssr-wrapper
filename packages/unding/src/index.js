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
                    '@unding/vite/renderer/+config.js',
                    '@unding/vite/renderer/+onRenderClient.js',
                    '@unding/vite/renderer/+onRenderHtml.js',
                  ]
                }
            ]
        })
    ]
}

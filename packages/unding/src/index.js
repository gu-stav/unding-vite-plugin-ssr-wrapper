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
                  pageFilesDist: [
                    '@unding/vite/renderer/_default.page.server.js',
                    '@unding/vite/renderer/_default.page.client.js'
                  ]
                }
            ]
        })
    ]
}

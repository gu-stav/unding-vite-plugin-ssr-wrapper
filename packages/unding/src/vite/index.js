import ssr from 'vite-plugin-ssr/plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export function unding() {
    const packageName = '@unding/studio';

    return [
        svelte({
            compilerOptions: {
                hydratable: true
            }
        }),

        ssr({
            extensions: [
                {
                  npmPackageName: packageName,
                  pageConfigsDistFiles: [
                    `${packageName}/pages/+config.js`,
                    `${packageName}/pages/+onRenderClient.js`,
                    `${packageName}/pages/+onRenderHtml.js`,
                  ]
                }
            ]
        })
    ]
}

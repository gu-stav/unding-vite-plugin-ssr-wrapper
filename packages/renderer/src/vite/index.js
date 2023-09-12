import ssr from 'vite-plugin-ssr/plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export function unding() {
    return [
        svelte({
            compilerOptions: {
                hydratable: true
            }
        }),

        ssr()
    ]
}

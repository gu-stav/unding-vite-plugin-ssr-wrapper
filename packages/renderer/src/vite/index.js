import ssr from 'vike/plugin'
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

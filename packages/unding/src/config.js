import { join } from 'node:path';

export async function loadConfig() {
    try {
        return await import(join(process.cwd(), 'unding.config.js'));
    } catch(error) {
        console.log('No unding.config.js detected');
    }
}

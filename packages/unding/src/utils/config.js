import { z } from 'zod';
import { join } from 'node:path';

export function validateConfig(config) {
    const schema = z.object({
        plugins: z.array(z.function())
    }).strict();

    return schema.parse(config);
}

export async function loadConfig() {
    try {
        return (await import(join(process.cwd(), 'unding.config.js'))).default;
    } catch(error) {
        console.log('No unding.config.js detected', error);
    }
}

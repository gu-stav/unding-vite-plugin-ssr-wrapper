import { join } from 'node:path';

export async function loadConfig() {
    console.log(join(process.cwd(), 'unding.config.js'));

    try {
        return (await import(join(process.cwd(), 'unding.config.js'))).default;
    } catch(error) {
        console.log('No unding.config.js detected', error);
    }
}

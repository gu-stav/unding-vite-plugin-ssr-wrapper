import { startServer } from '../utils/server.js';
import { loadConfig, validateConfig } from '../utils/config.js';
import { log } from '../utils/logger.js';

export async function dev() {
    const config = await loadConfig();

    try {
        validateConfig(config);

        await startServer({ env: 'development', config, cwd: process.cwd() });
    } catch(error) {
        log('Invalid unding.config.js');
        log(error);
    }
}

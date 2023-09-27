import { startServer } from '../utils/server.js';
import { loadConfig } from '../utils/config.js';

export async function start() {
    const config = await loadConfig();

    await startServer({ config, cwd: process.cwd() });
}

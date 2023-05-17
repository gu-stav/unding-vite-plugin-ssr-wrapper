#!/usr/bin/env node

import { program } from "commander";
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { join } from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url))

async function dev() {
    const server = await createServer({
      configFile: join(__dirname, 'vite.config.js'),
      server: {
          port: 4000,
      },
    })

    await server.listen()

    server.printUrls()
}

program
  .command('dev')
  .action(dev);

program.parse();

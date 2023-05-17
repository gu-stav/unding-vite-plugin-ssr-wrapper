#!/usr/bin/env node

import { program } from "commander";
import { build as viteBuild } from 'vite'
import { join } from 'node:path';

import { startServer } from './server.js';

async function build() {
  await viteBuild({
    configFile: join(process.cwd(), 'vite.config.js'),
  })
}

async function start() {
  await startServer({ path: process.cwd() });
}

program
  .command('build')
  .action(build);

program
  .command('start')
  .action(start);

program.parse();

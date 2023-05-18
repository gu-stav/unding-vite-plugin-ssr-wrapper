#!/usr/bin/env node

import { program } from "commander";
import { join } from 'node:path';
import * as vite from 'vite';

import { startServer } from './server.js';

async function build() {
  await Promise.all([
    vite.build({
      configFile: join(process.cwd(), 'vite.config.js'),
    }),

    vite.build({
      configFile: join(process.cwd(), 'vite.config.js'),
      ssr: true,
    })
  ]);
}

async function dev() {
  await startServer({ env: 'development', cwd: process.cwd() });
}

async function start() {
  await startServer({ cwd: process.cwd() });
}

program
  .command('build')
  .action(build);

program
  .command('dev')
  .action(dev);

program
  .command('start')
  .action(start);

program.parse();

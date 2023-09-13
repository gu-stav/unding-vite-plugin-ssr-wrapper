#!/usr/bin/env node

import { program } from "commander";
import { resolve } from 'node:path';
import { URL } from 'node:url';
import * as vite from 'vite';

import { startServer } from './server.js';
import { loadConfig } from './config.js';

const __dirname = new URL('.', import.meta.url).pathname;

async function build() {
  await Promise.all([
    vite.build({
      root: resolve(__dirname, 'studio'),
    }),

    vite.build({
      root: resolve(__dirname, 'studio'),
      build: {
        ssr: {
          external: ['@unding/studio']
        }
      },
    })
  ]);
}

async function dev() {
  const config = await loadConfig();

  await startServer({ env: 'development', config, cwd: process.cwd() });
}

async function start() {
  const config = await loadConfig();

  await startServer({ config, cwd: process.cwd() });
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

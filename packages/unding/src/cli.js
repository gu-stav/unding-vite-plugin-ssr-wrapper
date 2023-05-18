#!/usr/bin/env node

import { program } from "commander";
import * as vite from 'vite';

import { startServer } from './server.js';
import { unding } from './index.js';

async function build() {
  const commonConfig = {
    configFile: false,
    plugins: [unding()],
  };

  await Promise.all([
    vite.build(commonConfig),

    vite.build({
      ...commonConfig,
      build: {
        ssr: true
      },
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

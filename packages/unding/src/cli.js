#!/usr/bin/env node

import { program } from "commander";

import { startServer } from './server.js';

async function start() {
  await startServer({ cwd: process.cwd() });
}

async function dev() {
  await startServer({ env: 'development', cwd: process.cwd() });
}

program
  .command('dev')
  .action(dev);

program
  .command('start')
  .action(start);

program.parse();

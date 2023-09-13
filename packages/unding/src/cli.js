#!/usr/bin/env node

import { program } from "commander";

import { build } from './cli/build.js';
import { dev } from './cli/dev.js';
import { start } from './cli/start.js';

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

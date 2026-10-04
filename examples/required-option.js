#!/usr/bin/env node

// Short example: a required option must be specified on the command line.

import { Command } from 'commander';
const program = new Command();

program.requiredOption('-f, --file <path>', 'input file path');

program.parse();

console.log(`File: ${program.opts().file}`);

// Try the following:
//    node required-option.js
//    node required-option.js --file input.txt

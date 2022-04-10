#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs')
const clear = require('clear');
const figlet = require('figlet');
const CLI = require('clui');

const log = console.log;

clear();

log(
  chalk.yellow(
    figlet.textSync('Create Cheatty', { horizontalLayout: 'full' })
  )
)

const Spinner = CLI.Spinner;

const status = new Spinner('Project is installing, please wait.');
status.start();

const path = process.cwd()
shell.cd(path)

shell.exec('git clone https://github.com/ebrugulec/cheatty.com.git')
shell.cd('./simple-app')

shell.exec('npm i')

status.stop();

log(chalk.green('Success!'));
log(chalk.white('We suggest that you begin by typing:\n'));

log(chalk.blue('cd') + ' simple-app');
log(chalk.blue('yarn dev'));

log(chalk.white('\n\nInside that directory, you can run several commands:\n'));

log(chalk.blue('yarn dev') + chalk.white('\n\tStarts the development server.'))
log(chalk.blue('yarn build') + chalk.white('\n\tBuilds the app for production.'))
log(chalk.blue('yarn start') + chalk.white('\n\tRuns the built app in production mode.'))

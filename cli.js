#!/usr/bin/env node
const figlet = require('figlet');
const chalk=require('chalk');
const git = require('simple-git');
var shell = require('shelljs');

console.log(chalk.yellow("Rahul Prajapati"));
console.log(chalk.green("Dokcer Node......."));
figlet('R  a  h  u  l', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
shell.exec('git clone https://github.com/rahul2224/docker-node');
figlet('H a p p y C o d e ', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

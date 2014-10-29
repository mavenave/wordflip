#!/usr/bin/env node

/**
 * Module dependencies.
 */
var program = require('commander');
var upsidedown = require('upsidedown');

/**
 * Program options and metadata.
 */
program
  .usage('[command] [options] <word...>')
  .version('1.0.0')
  .option('-v, --verbose', 'provides more information')
  .option('-c', '--clipboard', "accesses system's clipboard");

/**
 * Program command and actions.
 */
program
  .command('flip <word...>')
  .description('flips words like tables')
  .action(function (word) {
    console.log(flipWord(word));
  });

program
  .command('unflip <word...>')
  .description('puts back words like tables')
  .action(function (word) {
    console.log(putBackWord(word));
  });

program.parse(process.argv);

/**
 * Useful constants.
 */
var NO_COMMAND_AND_WORD = program.args.length === 0;
var NO_COMMAND = typeof program.args[1] === 'string';

/**
 * Example:
 * wordflip  // prints out help
 */
if (NO_COMMAND_AND_WORD) {
  program.help();
}

/**
 * No command specified but words present.
 *
 * Example:
 * wordflip tables are awesome  // flips word anyway
 * (╯°□°）╯ ǝɯosǝʍɐ ǝɹɐ sǝlqɐʇ
 */
if (NO_COMMAND) {
  console.log(flipWord(program.args));
}

/**
 * Flips word with rage face.
 *
 * @param {Array} words
 * @return {String} flipped word and rage face
 * @api private
 */
function flipWord(words) {
  return '(╯°□°）╯ ' + upsidedown(words.join(' '));
}

/**
 * Add the 'putting back' face with word.
 *
 * @param {Array} words
 * @return {String} word with correct orientation and face
 * @api private
 */
function putBackWord(words) {
  return words.join(' ') + ' ノ( ゜-゜ノ)';
}

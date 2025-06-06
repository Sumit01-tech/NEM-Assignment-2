import chalk from 'chalk';

console.log(chalk.blue('Hello, World!'));
console.log(chalk.yellow('Learning Chalk is fun!'));

console.log(chalk.black.bgYellow('Warning! Proceed with caution.'));
console.log(chalk.white.bgRed('Error! Something went wrong.'));

console.log(chalk.green('Success:') + ' ' + chalk.white('Operation completed!'));
console.log(chalk.cyan('Loading...') + ' ' + chalk.magenta('Please wait'));

const error = chalk.bold.red;
const warning = chalk.bold.hex('#FFA500');
const success = chalk.bold.green;

console.log(error('Error: Unable to connect to the server!'));
console.log(warning('Warning: Low disk space!'));
console.log(success('Success: Data saved successfully!'));

console.log(chalk.underline.rgb(255, 165, 0)('Orange underlined text (RGB)'));
console.log(chalk.italic.hex('#8A2BE2')('Italic purple text (HEX)'));
console.log(chalk.strikethrough.red('Deprecated: This method is no longer supported.'));

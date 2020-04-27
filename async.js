const chalk = require('chalk')

console.log(chalk.green('Lets see async code!'))

let myVar = 'Travis'

// Start some timeout calls
setTimeout(function () {
  console.log(chalk.red('red'))
  myVar += ' Stratton' // If you need to perform stuff after the timeout, you should do it in the callback
}, 100)

setTimeout(function () {
  console.log(chalk.blueBright('pinkish'))
}, 200)

/* This block waits for 1000ms but is SYNCHRONOUS.  So it blocks the rest of the application */
let start = new Date()
while (new Date() - x < 1000) {}

// This one, even though it is 0ms doesnt start until the while loop is done blocking.  it will run after the while loop
setTimeout(function () {
  console.log(chalk.yellow('yellow'))
}, 0)

console.log(chalk.green('Finished Async Code!'))

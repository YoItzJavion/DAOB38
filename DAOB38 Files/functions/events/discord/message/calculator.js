// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
var calc = require('ez-calculator');
let problem = context.params.event.content;

let operation = problem.split(' ').slice(1).join(' ');
var result = calc.calculate(operation);

if (context.params.event.content.startsWith(',calc')) {
  //change your prefix to your liking
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    embed: {
      title: result,
      description: ``,
      color: 0x0b80f0a,
    },
  });
}
console.log(result);

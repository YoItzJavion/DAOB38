//MADE BY RICHARD
// PING IF ANY PROMBLEM
// U CHANGE THE PREFIX EASILY
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const quotes = require('success-motivational-quotes');
let Quote = quotes.getTodaysQuote().body;

if (context.params.event.content.startsWith(`,inspire`)) {
  let message = await lib.discord.channels['@0.1.2'].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      type: 'rich',
      title: '',
      description: `${Quote}`,
      color: 0x1b00ff,
    },
  });
}

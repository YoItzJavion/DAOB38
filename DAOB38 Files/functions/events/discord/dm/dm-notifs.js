// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const feedbackChannelID = `000`;

await lib.discord.channels['@0.1.1'].messages.create({
  channel_id: feedbackChannelID,
  content: ``,
  embed: {
    type: 'rich',
    title: 'Someone sent a new suggestion:',
    description: context.params.event.content,
  }
});
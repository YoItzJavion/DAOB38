const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// *** Set the channel ID to post in ***
const channel_id = process.env.WELCOME_CHANNEL_ID

await lib.discord.channels['@0.1.1'].messages.create({
  channel_id,
  content: `Welcome to this server <@${context.params.event.user.id}>!`,
  embed: {
    title: 'Guild Rules',
    type: 'rich',
    color: 0x0000AA,
    description: 'Here are some things to know about this guild:',
    fields: [{
      name: 'Rule #1',
      value: `Introduce yourself!`
    }, {
      name: 'Rule #2',
      value: 'Ask Questions!'
    }, {
      name: 'Rule #3',
      value: `Just Have fun.`
    }, {
      name: 'More Important Information',
      value: [
        'Server Link is posted Below:',
        `https://discord.gg/FhGxUyURWx`
      ].join('\n')
    }]
  }
});
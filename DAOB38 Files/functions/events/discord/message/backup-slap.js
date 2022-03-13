// ** DEV ** Customise values here
const command = ',slap'
const gifs = [
  'https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
  'https://media.giphy.com/media/gSIz6gGLhguOY/giphy.gif',
  'https://media.giphy.com/media/uG3lKkAuh53wc/giphy.gif',
];

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event

if (event.content.startsWith(command) && event.mentions.length === 1) {
  const author = event.author.id
  const target = event.mentions[0].id

  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `<@!${author}> slaps <@!${target}>`,
    tts: false,
    embed: {
      type: 'rich',
      image: {
        url: randomGif
      },
    },
  });
}
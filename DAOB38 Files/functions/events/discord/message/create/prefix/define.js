const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const axios = require('axios');
const args = context.params.event.content.split(' ').slice(1);
if (!args.length)
return lib.discord.channels['@0.1.2'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `No arguments provided. It should be used as ,define [word]`,
});

try {
const {data} = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${args}`
  );
let definition1 = data[0].meanings[0].definitions[0].definition
  ? data[0].meanings[0].definitions[0].definition
  : `None`;
  let example1 = data[0].meanings[0].definitions[0].example
  ? data[0].meanings[0].definitions[0].example
  : `None`;
  
  let definition2 = data[0].meanings[0].definitions[1].definition
  ? data[0].meanings[0].definitions[1].definition
  : `None`;
  let example2 = data[0].meanings[0].definitions[1].example
  ? data[0].meanings[0].definitions[1].example
  : `None`;

  let message = await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `<@!${context.params.event.author.id}> here is your information`,
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `${data[0].word}`,
        description: `**Phonetic**: ${data[0].phonetic}\n**Part Of Speech**: ${data[0].meanings[0].partOfSpeech}\n**Origin**: ${data[0].origin}\n`,
        color: 0xcb4a43,
        fields: [
          {
            name: `**Definition**`,
            value: `${definition1}`,
            inline: true,
          },
          {
            name: `**Example**`,
            value: `${example1}`,
            inline: true,
          },
          {
            name: `**Definition**`,
            value: `${definition2}`,
            inline: true,
          },
          {
            name: `**Example**`,
            value: `${example2}`,
            inline: true,
          },
        ],
        thumbnail: {
          url: `https://toppng.com/uploads/preview/dictionary-icon-android-lollipop-115309574023rtnppod6j.png`,
          height: 0,
          width: 0,
        },
      },
    ],
  });
} catch (e) {
console.log(e);
 await lib.discord.channels['@0.1.2'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Sorry, failed to retrieve \`${args}\`. Please try again in a couple seconds`,
});
}


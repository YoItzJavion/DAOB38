//for this to work you need to go to https://autocode.com/lib/discord/contextmenu/#items-create and make a contextmenu of type 'MESSAGE' and name 'Translate'!
//making contextmenu reference image: https://cdn.discordapp.com/attachments/855783630747992064/877833491902005318/making_context_menu.png

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const translate = require('@iamtraction/google-translate');
const ISO6391 = require('iso-639-1');

const text = `${context.params.event.data.resolved.messages[0].content}`;
let translated = await translate(text, {to: 'en'});
let language_name = ISO6391.getName(`${translated.from.language.iso}`);

await lib.discord.channels['@0.2.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: '',
  allowed_mentions: {
    parse: [],
  },
  message_reference: {
    message_id: context.params.event.data.resolved.messages[0].id,
  },
  tts: false,
  embeds: [
    {
      type: 'rich',
      title: `Translator!`,
      description: '',
      color: 0x15ff00,
      fields: [
        {
          name: `From:`,
          value: `${language_name}`,
          inline: true,
        },
        {
          name: `To:`,
          value: `English`,
          inline: true,
        },
        {
          name: `Translated text:`,
          value: `${translated.text}`,
        },
      ],
      timestamp: `${new Date().toISOString()}`,
      footer: {
        text: `Requested by ${context.params.event.member.user.username}#${context.params.event.member.user.discriminator}`,
      },
    },
  ],
});

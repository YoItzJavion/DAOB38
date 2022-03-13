// Need help ( somehow ) dm Axolotl#5252 on discord! or ping them in the autocode discord ( discord.gg/autocode )

if (context.params.event.content.startsWith(`${process.env.PREFIX},iq`)) {
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": "",
      "description": `Your IQ is **${Math.floor(Math.random() * 1000) + 1}**`,
      "color": 0xf5fdfd
    }
  ]
});
}


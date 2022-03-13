const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let event = context.params.event
if (event.content.startsWith(`,commands`)){//change the prefix to anything
await lib.discord.channels['@0.1.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Command list `,
      "description": "",
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `Fun commands `, //you can change this
          "value": "\`.help\` \`,covid <State Prefix> ex. ,covid FL\` \`,calc <number - or + number>\`" //change the commands to your commands
        },
        {
          "name": `Moderation/Admin commands`, //you can change this
          "value": "Moderation and Admin Commands are used through slash commands" //change this to anything you want
        }
      ],
      "footer": {
        "text": `Requested by ${context.params.event.author.username}` //dont change
      }
    }
  ]
});
}
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let users = await lib.discord.guilds['@0.1.0'].members.list({
  guild_id: `${context.params.event.guild_id}`,
  limit: 100,
});

let randomUser = users[Math.floor(Math.random() * users.length)];

console.log(randomUser);

let reason = context.params.event.content.split(' ').slice(1).join(" ")

let channelid = context.params.event.channel_id

let message = context.params.event.content;
if (message.startsWith(`${process.env.PREFIX},giveaway`)) { //The Command
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    "channel_id": `${context.params.event.channel_id}`,
      "content": "",
      "tts": false,
      "embed": {
        "type": "rich",
        "title": `🎉 ${reason} 🎉`,
        "description": "",
        "color": 0x00FFFF,
        "fields": [
          {
            "name": "\u200B",
            "value": `Giveaway By: <@!${context.params.event.author.id}> `
          },
          {
            "name": "\u200B",
            "value": `The Winner: <@${randomUser.user.id}>`
          }
        ]
      }
  });
}



// Wait for some1 to helep

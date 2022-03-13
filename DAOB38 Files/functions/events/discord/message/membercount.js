const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let guild = await lib.discord.guilds['@0.1.0'].retrieve({
  guild_id: `${context.params.event.guild_id}`,
  with_counts: true
});
let guildUrl = guild.icon_url;
let gifCheckResponse = await lib.http.request['@1.1.5']({
  method: 'GET',
  url: guild.icon_url.replace('.png', '.gif')
});
if (gifCheckResponse.statusCode === 200) {
  guildUrl = guild.icon_url.replace('.png', '.gif');
}
let member = guild.approximate_member_count;
 let members = await lib.discord.guilds['@0.0.6'].members.list({
  guild_id: `${context.params.event.guild_id}`,
  limit: 1000
});
const bot = members.filter(x => x.user.bot)

if (context.params.event.content.startsWith(`,membercount`)) {
await lib.discord.channels['@0.1.1'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
    "content": "",
    "tts": false,
    "embed": {
      "type": "rich",
      "title": `${guild.name}`,
      "description": "",
      "color": 0x00FFFF,
      "fields": [
        {
          "name": "Members",
          "value": `${member}`
        },
        {
          "name": "Bots",
          "value": `${bot.length}`
        }
      ],
      "thumbnail": {
        "url": `${guildUrl}`,
        "height": 0,
        "width": 0
      }
    }
  });
}
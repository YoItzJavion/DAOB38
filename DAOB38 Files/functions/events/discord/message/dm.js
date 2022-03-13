const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let message = context.params.event.content.split(' ').slice(2).join(' ')


if (context.params.event.content.startsWith(',dm')) {
  await lib.discord.users['@0.1.3'].dms.create({
    recipient_id: context.params.event.mentions[0].id,
    content: `**You received a DM!**`,
          tts: false,
          embed: {
            type: "rich",
            title: "",
            description: `${message}`,
            color: 0xb7ffd8,
            author: {
              name: `${context.params.event.author.username}#${context.params.event.author.discriminator}`,
              icon_url: `https://cdn.discordapp.com/avatars/${context.params.event.author.id}/${context.params.event.author.avatar}.png`
            }
          }
        });
  await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
        content: "",
        tts: false,
        embed: {
          type: "rich",
          title: "Success!",
          description: "Your dm was successfully sent to the recepient ",
          color: 0xb7ffd8
        }
      });
    await lib.discord.channels['@0.1.1'].messages.destroy({
      message_id: `${context.params.event.id}`,
      channel_id: `${context.params.event.channel_id}`
    });
}
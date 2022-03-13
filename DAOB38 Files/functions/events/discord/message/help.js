const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.toLowerCase().startsWith(`,help`)) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Hey! <@${context.params.event.author.id}> check your Direct Messages, You have been sent info.`,
  });
  await lib.discord.users['@0.1.4'].dms.create({
    recipient_id: `${context.params.event.author.id}`,
    content: ` `,
    embed: {
      title: 'Help' /** you can change the embed title here **/,
      description:'For Moderation help say ,modehelp and you will recieve the moderation commands. If you need commands for Fun/Misc/User please say ,userhelp and you will get the FUN/MISC/USER Commands.' /**add some help info here**/,
      color: 0x00ffc4 /** you can change the embed color here **/,
    },
  });
}

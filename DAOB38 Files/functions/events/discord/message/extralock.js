const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let isMANAGE_CHANNELS =
  (context.params.event.member.permissions & (1 << 4)) === 1 << 4;

if (isMANAGE_CHANNELS) {
  let message = context.params.event.content;

  await lib.discord.channels['@0.1.1'].permissions.update({
    overwrite_id: `${context.params.event.guild_id}`,
    channel_id: `${context.params.event.channel_id}`,
    deny: `${1 << 11}`,
    type: 0,
  });

  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `**<@${context.params.event.member.user.id}> - Locked - <#${context.params.event.channel_id}>**`,
  });
} else {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `**<@${context.params.event.member.user.id}> - You need the MANAGE_CHANNELS permission to use the Lock command!**`,
  });
}

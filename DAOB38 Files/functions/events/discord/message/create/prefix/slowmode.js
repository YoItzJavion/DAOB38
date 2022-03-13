const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let isMANAGE_CHANNELS =
  (context.params.event.member.permissions & (1 << 4)) === 1 << 4;

if (isMANAGE_CHANNELS) {
  let rateLimit = context.params.event.data.options[0].value;
  await lib.discord.channels['@0.1.1'].update({
    channel_id: context.params.event.channel_id,
    rate_limit_per_user: parseInt(rateLimit) || 0,
  });
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `**<@!${context.params.event.member.user.id}> - changed this channel's rate limit to ${rateLimit} seconds!**`,
  });
} else {
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `**<@!${context.params.event.member.user.id}> -  you need the MANAGE_CHANNELS permission to use this command**`,
  });
}

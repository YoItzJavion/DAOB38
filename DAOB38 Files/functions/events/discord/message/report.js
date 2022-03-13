const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const message = context.params.event;

if (message.content.startsWith(',report')) {
  const args = message.content.split(' ').slice(1);
  if (!args.length || !message.mentions.length || !args[1])
    return lib.discord.channels['@0.2.0'].messages.create({
      content: '❌ | Wrong command usage, `<@mention> <reason>`',
      channel_id: message.channel_id,
    });

  const target = message.mentions[0];
  const reason = args.slice(1);

  let channel = await lib.discord.guilds['@0.1.0'].channels.list({
    guild_id: message.guild_id,
  });

  channel = channel.find((x) => x.name === 'reports' || x.name === 'report');

  if (!channel)
    channel = await lib.discord.guilds['@0.1.0'].channels.create({
      guild_id: message.guild_id,
      name: `reports`,
    });

  await lib.discord.channels['@0.2.0'].messages.create({
    content: ``,
    embed: {
      title: `:page_facing_up: | New Report`,
      color: 0xffa500,
      description: [
        `• Reporter: ${message.author.username}\`(${message.author.id})\``,
        `• Target: ${target.username}\`(${target.id})\``,
        `• Reason: ${reason.join(' ')}`,
      ].join('\n'),
      thumbnail: {
        url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
      },
    },
    channel_id: channel.id,
  });

  await lib.discord.channels['@0.2.0'].messages.create({
    content: `<#${channel.id}> | Thanks for reporting, Staff team will soon review your report.`,
    channel_id: message.channel_id,
  });
}

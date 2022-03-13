 //Make sure to add option in slash command//

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.commands['@0.0.0'].create({
  "guild_id": "947521036008706078",
  "name": "userinfo",
  "description": "Who is this User",
  "options": [user]
});

const {Tools} = require('autocode-discordjs');

const ID = context.params.event.data.options.length ? context.params.event.data.options[0].value : context.params.event.member.user.id

  const member = await lib.discord.guilds['@0.1.0'].members.retrieve({
    user_id: ID, // required
    guild_id: context.params.event.guild_id,
  });

  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      author: {name: member.user.username, icon_url: member.user.avatar_url},
      color: 0x00ff00,
      thumbnail: {url: member.user.avatar_url},
      description: `• **ID**: \`${member.user.id}\`\n• **Discriminator**: \`#${
        member.user.discriminator
      }\`
      • **isBot**: ${member.user.bot ? 'Yes' : 'No'}\n• **Nickname**: ${
        member.nick ? member.nick : 'None'
      }\n• **Joined At**: \`${new Date(member.joined_at)}\``,
      fields: [
        {
          name: 'Roles',
          value: member.roles.length
            ? member.roles.map((x) => `<@&${x}>`).join('🔨 Moderators')
            : 'No Roles',
        },
        {
          name: 'Badges',
          value: member.user.public_flags
            ? Tools.getUserBadges(member.user.public_flags)
                .map((x) => `**\`${x}\`**`)
                .join(' | ')
            : 'No Badges',
        },
      ],
    },
  });

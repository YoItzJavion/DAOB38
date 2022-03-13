const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;

const command = `${process.env.PREFIX},staff`;

const authorId = event.author.id;
const mentionId = event.mentions[0]?.id;

const getKey = (userId) => `${userId}_staff`;
const authorKey = getKey(authorId);
const mentionKey = getKey(mentionId);

const authorafk = await lib.utils.kv['@0.1.16'].get({key: authorKey});
const mentionafk = mentionId
  ? await lib.utils.kv['@0.1.16'].get({key: mentionKey})
  : null;

if (event.content.startsWith(command)) {
  let afkReason = event.content.replace(command, 'afk').trim();
  await lib.utils.kv['@0.1.16'].set({
    key: authorKey,
    value: {
      reason: afkReason,
      pings: 0,
    },
  });
  await lib.discord.channels['@0.1.2'].messages.create({
    channel_id: event.channel_id,
    content: `<@!${authorId}> is now staff`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    guild_id: event.guild_id,
    user_id: event.author.id,
    role_id: process.env.ROLE_ID,
  });
} else if (mentionafk) {
  const reason = mentionafk.reason ? ` (${mentionafk.reason})` : '';
  await lib.discord.channels['@0.1.0'].messages.create({
    channel_id: event.channel_id,
    content: `<@!${authorId}> Pinged`,
  });
  await lib.utils.kv['@0.1.16'].set({
    key: mentionKey,
    value: {
      reason: mentionafk.reason,
      pings: mentionafk.pings + 1,
    },
  });
}
//maked by syd_razin

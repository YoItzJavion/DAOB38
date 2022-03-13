const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;
const content = context.params.event.content;

const channel_id = `947559081412034580`;// your channel id

const userId = event.author.id;
const key = `rate_limit_${userId}`;

const hasMessagedRecently = await lib.utils.kv['@0.1.16'].get({key});
if (hasMessagedRecently) {
  await lib.discord.users['@0.1.4'].dms.create({
    recipient_id: userId,
    content: `Message not sent because you're messaging too much. Please wait a minute and try again`,
  });
} else {
  await lib.discord.users['@0.1.4'].dms.create({
    recipient_id: userId,
    content: `Message sent! ✅`,
  });
  if (context.params.event.attachments.length) {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: channel_id,
      content: `**<@${context.params.event.author.id}> has sent a ModMail!** \n ${content}`,
      embed: {
        image: {
          url: context.params.event.attachments[0].url,
        },
        color: 0x009eff,
      },
    });
  } else {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: channel_id,
      content: `**<@${context.params.event.author.id}> has sent a ModMail!** \n ${content}`,
    });
  }
}
// Store user key
await lib.utils.kv['@0.1.16'].set({
  key: key,
  value: true,
  ttl: 60, // 1 minute
});

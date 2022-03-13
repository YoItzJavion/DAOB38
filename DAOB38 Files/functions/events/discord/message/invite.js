const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
if (context.params.event.content.startsWith(`,invite`)) {
  let info = await lib.discord.users['@0.1.4'].me.list();
  let id = info.id;
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: 'Bot invite Link',
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 5,
            label: `Invite Link`,
            url: `https://discord.com/api/oauth2/authorize?client_id=935659590673133609&permissions=0&scope=bot%20applications.commands`,
            disabled: false,
            type: 2,
          },
        ],
      },
    ],
    embed: {
      type: 'rich',
      title: `Invite link`,
      description: `Hey, I appreciate you inviting me to your server!`,
      color: 0x62ff00,
    },
  });
}

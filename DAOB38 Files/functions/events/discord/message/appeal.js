const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
if (context.params.event.content.startsWith(`,appeal`)) {
  let info = await lib.discord.users['@0.1.4'].me.list();
  let id = info.id;
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: 'Ban Appeal for DAOB38 Support Server',
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 5,
            label: `Ban Appeal`,
            url: `https://docs.google.com/forms/d/e/1FAIpQLSdVXeixpDkXb43Mj2KYNU4x9VWmxjsZJwBC2kVto0mPn693LA/viewform?usp=sf_link`,
            disabled: false,
            type: 2,
          },
        ],
      },
    ],
    embed: {
      type: 'rich',
      title: `Ban Appeal`,
      description: `Hey, I appreciate you appealing your ban and We hope it gets accepted!`,
      color: 0x62ff00,
    },
  });
}
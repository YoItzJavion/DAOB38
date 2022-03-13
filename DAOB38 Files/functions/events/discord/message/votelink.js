const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.startsWith(`,vote`)) {
  // <---- Change !vote to what you want
  let info = await lib.discord.users['@0.1.5'].me.list();
  let Avatar = info.avatar_url;
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: '',
    tts: false,
    embed: {
      type: 'rich',
      title: `Vote link`,
      description: `Click the button to vote for our server!`,
      color: 0x0095ff, // <---- Change the color if you want
      thumbnail: {
        url: Avatar,
      },
    },
    components: [
      {
        type: 1,
        components: [
          {
            style: 5,
            label: `Vote Link`,
            url: `https://top.gg/servers/947521036008706078/vote`, // <---- Replace the current link with your Top.gg vote link, ex: https://top.gg/servers/12345678910/vote
            disabled: false,
            type: 2,
          },
        ],
      },
    ],
  });
}

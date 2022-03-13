const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
if (context.params.event.content.startsWith(`,sports`)) {
  let info = await lib.discord.users['@0.1.4'].me.list();
  let id = info.id;
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: 'Want to See sport stats for any team, if so do it through here',
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 5,
            label: `SPORT STATS`,
            url: `https://www.espn.com/`,
            disabled: false,
            type: 2,
          },
        ],
      },
    ],
    embed: {
      type: 'rich',
      title: `Sport Stats`,
      description: `Hey, This command is used to get you all the sport stats from ESPN!`,
      color: 0x62ff00,
    },
  });
}

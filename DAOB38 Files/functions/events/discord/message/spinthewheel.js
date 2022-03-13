const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
if (context.params.event.content.startsWith(`,spinthewheel`)) {
  let info = await lib.discord.users['@0.1.4'].me.list();
  let id = info.id;
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: 'Want to Spin the Wheel, if so do it through here',
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 5,
            label: `SPIN THE WHEEL`,
            url: `https://spinnerwheel.com/`,
            disabled: false,
            type: 2,
          },
        ],
      },
    ],
    embed: {
      type: 'rich',
      title: `SPIN THE WHEEL`,
      description: `Hey, I hope this command satisfies your needs!`,
      color: 0x62ff00,
    },
  });
}

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

//The state must be in its abbreviated form
// See https://abbreviations.yourdictionary.com/articles/state-abbrev.html for a list of them all
let state = context.params.event.content.split(' ')[1];

if (!state) {
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `You need to give me a state to get info from! Example: \`,covid OR\` gets info about Oregon`,
  });
} else {
  let result = await lib.rtlive.covid19['@0.1.0']({
    region: `${state}`,
    order: 'DESC',
    count: 7,
  });

  await lib.discord.channels['@release'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    embeds: [
      {
        title: `${state} COVID 19 Cases`,
        color: 0x764a9b,
        fields: [
          {
            name: `New Cases 🤒`,
            value: `\`${result[0].new_cases}\``,
            inline: true,
          },
          {
            name: `New Deaths ☠️`,
            value: `\`${result[0].new_deaths}\``,
            inline: true,
          },
          {
            name: `Tests 🧪`,
            value: `\`${result[0].tests}\``,
            inline: true,
          },
          {
            name: `Date 🗓️`,
            value: `\`${result[0].date}\``,
          },
        ],
      },
    ],
  });
}

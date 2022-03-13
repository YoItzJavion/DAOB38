const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event, context) => {
  if (context.params.event.content.startsWith(`,status`)) {
    if (context.params.event.content === `status-`) {
      await lib.discord.channels['@0.2.0'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: '',
        tts: false,
        embed: {
          type: 'rich',
          title: '',
          description: `**How to use \`status-\`**\n`,
          color: 0x00ff22,
          fields: [
            {
              name: '\u200B',
              value: `Function: changes bot status with a prefix command!\nCommand: \`status- <activity> <status> <url> <message>\``,
            },
            {
              name: `Activity:`,
              value: `Here are all the avtivity options:\n\`GAME\`\n\`STREAMING\`\n\`LISTENING\`\n\`WATCHING\`\n\`COMPETING\``,
              inline: true,
            },
            {
              name: `Status:\n`,
              value: `Here are all the status options:\n\`ONLINE\`\n\`DND\`\n\`IDLE\`\n\`INVISIBLE\``,
              inline: true,
            },
            {
              name: `Url:`,
              value: `Only put the url field if the activity is \`STREAMING\`!`,
              inline: true,
            },
            {
              name: `Message:`,
              value: `Any message that you want the bot the to display!`,
              inline: true,
            },
          ],
        },
      });
      return;
    }
    let content = event.content.split(' ');
    let activity_type = content[1].toUpperCase();
    let status = content[2].toUpperCase();
    let activity_name = content.slice(3).join(' ');
    let valid_activity_type = [
      `GAME`,
      `STREAMING`,
      `LISTENING`,
      `WATCHING`,
      `COMPETING`,
    ];
    let valid_status = 
    [`ONLINE`,
     `DND`, 
    `IDLE`, 
    `INVISIBLE`
    ];
    if (activity_type === `STREAMING`) {
      let url = content[3];
      let activity_name = content.slice(4).join(' ');
      if (url.startsWith(`https`)) {
        await lib.discord.users['@0.1.4'].me.status.update({
          activity_name: `${activity_name}`,
          activity_type: `${activity_type}`,
          url: `${url}`,
          status: `${status}`,
        });
        message = await lib.discord.channels['@0.2.0'].messages.create({
          channel_id: context.params.event.channel_id,
          content: `status successfully updated!`,
        });
      } else {
        message = await lib.discord.channels['@0.2.0'].messages.create({
          channel_id: context.params.event.channel_id,
          content: `you need to provide a link for STREAMING`,
        });
      }
    } else {
      if (!valid_activity_type.includes(activity_type)) {
        message = await lib.discord.channels['@0.2.0'].messages.create({
          channel_id: context.params.event.channel_id,
          content: `Invalid activity type!`,
        });
      } else if (!valid_status.includes(status)) {
        message = await lib.discord.channels['@0.2.0'].messages.create({
          channel_id: context.params.event.channel_id,
          content: `Invalid status!`,
        });
      } else if (!activity_name) {
        message = await lib.discord.channels['@0.2.0'].messages.create({
          channel_id: context.params.event.channel_id,
          content: `You did not give a message to display!`,
        });
      } else {
        await lib.discord.users['@0.1.4'].me.status.update({
          activity_name: `${activity_name}`,
          activity_type: `${activity_type}`,
          status: `${status}`,
        });
        message = await lib.discord.channels['@0.2.0'].messages.create({
          channel_id: context.params.event.channel_id,
          content: `status successfully updated!`,
        });
      }
    }
  }
};

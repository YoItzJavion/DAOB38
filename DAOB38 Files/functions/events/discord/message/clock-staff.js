/* This is a snippet used to log activity time of your staff members. 
They have to do !clockin when they come online to start and !clockout when they go offline.
The time from when they do !clockin to !clockout will be logged and can be later viewed as !data
CHANGE STAFF ROLE ID TO YOUR STAFF ROLE ID IN LINE 13
Commands: !clockin: Clocks you in
          !clockout: Clocks you out
          !data <@mentioned>: See the total time of the mentioned user
          !reset <@mentioned>: Reset the total time of the mentioned user
          !help: Shows the help menu
*/
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const convertMS = require('ms-convert');
const staff = `947522730436214834`; //Your Staff Role ID
if (context.params.event.content.startsWith(',clockin')) {
  if (context.params.event.member.roles.includes(staff)) {
    await lib.utils.kv['@0.1.16'].set({
      key: context.params.event.author.username,
      value: context.params.event.timestamp,
    });
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: ``,
      tts: false,
      embed: {
        type: 'rich',
        title: ``,
        description: `<@${context.params.event.author.id}> successfully clocked in`,
        color: 0x009eff,
      },
    });
  } else {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `You do not have the permission to use this!`,
    });
  }
}

if (context.params.event.content.startsWith(',clockout')) {
  if (context.params.event.member.roles.includes(staff)) {
    let date = await lib.utils.kv['@0.1.16'].get({
      key: context.params.event.author.username,
      defaultValue: 1,
    });
    let total = await lib.utils.kv['@0.1.16'].get({
      key: context.params.event.author.id,
      defaultValue: 1,
    });
    let duration = new Date() - new Date(date);
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: ``,
      tts: false,
      embed: {
        type: 'rich',
        title: ``,
        description: `<@${context.params.event.author.id}> successfully clocked out. Added ${convertMS(duration)} to their time.`,
        color: 0x009eff,
      },
    });
    await lib.utils.kv['@0.1.16'].set({
      key: context.params.event.author.id,
      value: total + duration,
    });
  } else {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `You do not have the permission to use this!`,
    });
  }
}

if (context.params.event.content.startsWith(',data')) {
  if (context.params.event.member.roles.includes(staff)) {
    if (!context.params.event.mentions.length) {
      return lib.discord.channels['@0.1.2'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: `You must mention someone to get their data!`,
      });
    } else {
      let total = await lib.utils.kv['@0.1.16'].get({
        key: context.params.event.mentions[0].id,
        defaultValue: 1,
      });
      await lib.discord.channels['@0.1.1'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: ``,
        tts: false,
        embed: {
          type: 'rich',
          title: ``,
          description: `**<@${context.params.event.mentions[0].id}>'s Total Time is:** ${convertMS(total)}`,
          color: 0x009eff,
        },
      });
    }
  } else {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `You do not have the permission to use this!`,
    });
  }
}

if (context.params.event.content.startsWith(',reset')) {
  if (context.params.event.member.roles.includes(staff)) {
    if (!context.params.event.mentions.length) {
      return lib.discord.channels['@0.1.2'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: `You must mention someone to reset!`,
      });
    } else {
      await lib.utils.kv['@0.1.16'].set({
        key: context.params.event.mentions[0].id,
        value: 0,
      });
      await lib.discord.channels['@0.1.1'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: ``,
        tts: false,
        embed: {
          type: 'rich',
          title: ``,
          description: `** Reset Time For <@${context.params.event.mentions[0].id}>**`,
          color: 0x009eff,
        },
      });
    }
  } else {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `You do not have the permission to use this!`,
    });
  }
}

if (context.params.event.content.startsWith(',clockhelp')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: ` `,
    embeds: [
      {
        type: 'rich',
        title: `**Here are some of my Commands!**`,
        description: [
          `\`,help\`: Shows this.`,
          `\n`,
          `**Staff Commands:**`,
          `\`,clockin\`: Clocks you in.`,
          `\`,clockout\`: Clocks you out`,
          `\`,data [@user]\`: Get Clockin data of that user.`,
          `\`,reset [@user]\`: Reset the mentioned users clockin - clockout data.`,
        ].join('\n'),
        color: 0x00ffff,
        footer: {
          text: `This bot was created by Young38baby#5504.`,
        },
      },
    ],
  });
}

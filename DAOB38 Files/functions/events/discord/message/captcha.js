const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let guildId = `947521036008706078`;//Server ID Required
let role = `947620190580006973`;//Verified Role ID

let capcha = [
  'https://cdn.discordapp.com/attachments/926787936417108018/937355410191581204/1.jpg',
  'https://cdn.discordapp.com/attachments/926787936417108018/937355410388684921/2.jpg',
  'https://cdn.discordapp.com/attachments/926787936417108018/937355410585829407/3.jpg',
  'https://cdn.discordapp.com/attachments/926787936417108018/937355410791354428/4.jpg',
];//4 Different captcha
let randomize = capcha[Math.floor(Math.random() * capcha.length)];

if (context.params.event.content.startsWith(`${process.env.PREFIX}verify`)) {
  await lib.discord.users['@0.2.0'].dms.create({
    recipient_id: `${context.params.event.author.id}`,
    content: ``,
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `CAPTCHA VERIFICATION`,
        description: `Kindly answer the number which is shown in the image given below to get verified`,
        color: 0x0a0a0a,
        image: {
          url: randomize,
        },
      },
    ],
  });
}
if (context.params.event.content.startsWith(`SSMp7T`)) {
  await lib.discord.users['@0.2.0'].dms.create({
    recipient_id: `${context.params.event.author.id}`,
    content: '',
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `CAPTCHA VERIFICATION`,
        description: `Your verification is done please check the server.`,
        color: 0x0a0a0a,
      },
    ],
  });
  await lib.discord.guilds['@0.2.2'].members.roles.update({
    role_id: `${role}`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${guildId}`,
  });
}
if (context.params.event.content.startsWith(`Xm9Ki`)) {
  await lib.discord.users['@0.2.0'].dms.create({
    recipient_id: `${context.params.event.author.id}`,
    content: '',
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `CAPTCHA VERIFICATION`,
        description: `Your verification is done please check the server.`,
        color: 0x0a0a0a,
      },
    ],
  });
  await lib.discord.guilds['@0.2.2'].members.roles.update({
    role_id: `${role}`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${guildId}`,
  });
}
if (context.params.event.content.startsWith(`4SZXT`)) {
  await lib.discord.users['@0.2.0'].dms.create({
    recipient_id: `${context.params.event.author.id}`,
    content: '',
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `CAPTCHA VERIFICATION`,
        description: `Your verification is done please check the server.`,
        color: 0x0a0a0a,
      },
    ],
  });
  await lib.discord.guilds['@0.2.2'].members.roles.update({
    role_id: `${role}`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${guildId}`,
  });
}
if (context.params.event.content.startsWith(`MY5N5`)) {
  await lib.discord.users['@0.2.0'].dms.create({
    recipient_id: `${context.params.event.author.id}`,
    content: '',
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `CAPTCHA VERIFICATION`,
        description: `Your verification is done please check the server.`,
        color: 0x0a0a0a,
      },
    ],
  });
  await lib.discord.guilds['@0.2.2'].members.roles.update({
    role_id: `${role}`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${guildId}`,
  });
}
//If you get any error ping @DeathManager in Autocode discord server
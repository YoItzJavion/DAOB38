//Do ,setup-verification to show the verification tutorial message. :)
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let VERIFY_ROLE_ID = '947620190580006973'; //Change ROLE_ID to the role id that you want to give when they get verified :)
let capcha = [
  '**Message the Capcha Code In the Image** https://media.discordapp.net/attachments/880447207713697826/883217424487424010/F30FA_1.png?width=704&height=499',
  '**Message the Capcha Code In the Image** https://cdn.discordapp.com/attachments/880447207713697826/883217425594720276/F30FA_2.png',
  '**Message the Capcha Code In the Image** https://cdn.discordapp.com/attachments/880447207713697826/883217428685918218/F30FA_3.png',
  '**Message the Captcha Code In the Image** https://cdn.discordapp.com/attachments/880447207713697826/883217432347570176/F30FA_8.png',
  '**Message the Capcha Code In the Image** https://cdn.discordapp.com/attachments/880447207713697826/883217433014456391/F30FA_6.png',
  '**Message the Capcha Code In the Image** https://media.discordapp.net/attachments/880447207713697826/883217437384933426/F30FA_7.png?width=704&height=499',
  '**Message the Capcha Code In the Image** https://cdn.discordapp.com/attachments/880447207713697826/883217538429890590/F30FA_5.png',
  '**Message the Capcha Code In the Image** https://media.discordapp.net/attachments/880447207713697826/883217540023738439/F30FA_4.png?width=704&height=499',
  '**Message the Capcha Code In the Image** https://media.discordapp.net/attachments/880447207713697826/883217571543916564/F30FA.png?width=704&height=499',
];
let randomize = capcha[Math.floor(Math.random() * capcha.length)];
if (context.params.event.content.startsWith(',verify')) {
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: randomize,
  });
}

if (context.params.event.content.startsWith('F30FA')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}
if (context.params.event.content.startsWith('A1135')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

if (context.params.event.content.startsWith('DLO1F')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

if (context.params.event.content.startsWith('GDI44')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

if (context.params.event.content.startsWith('P3CC5')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

if (context.params.event.content.startsWith('T1T5A')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

if (context.params.event.content.startsWith('LM356')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

if (context.params.event.content.startsWith('PCDEF')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

if (context.params.event.content.startsWith('QS3F5')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

if (context.params.event.content.startsWith('AST45')) {
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}> Is Now Verified!`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: 947620190580006973,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
}

if (context.params.event.content.startsWith('!setup-verification')) {
  await lib.discord.channels['@0.1.2'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: '',
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `Verfication`,
        description: `Do** ,verify** To Verify!`,
        color: 0x00ffff,
        image: {
          url: `https://media.discordapp.net/attachments/852916674801172530/882587112929652736/employment-verification-letter.jpeg?width=717&height=430`,
          height: 0,
          width: 0,
        },
      },
    ],
  });
}

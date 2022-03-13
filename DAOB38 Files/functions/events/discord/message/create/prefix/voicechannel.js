const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.commands['@0.0.0'].create({
  "guild_id": "947521036008706078",
  "name": "voicechannel",
  "description": "Make the Bot Join a vc",
  "options": []
});

await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `<@!${context.params.event.member.user.id}> just triggered the **voicechannel** command!`
});

// Write some custom code here
 const channel = context.params.event.data.options[0].value;
 
 if (
   !context.params.event.member.permission_names.includes('MANAGE_CHANNELS')
   ) {
   await lib.discord.channels['@0.2.0'].messages.create({
     channel_id: context.params.event.channel_id,
     content: `You do not have the following permissions`,
   });
 } else {
   await lib.discord.voice['@0.0.1'].channels.join({
     channel_id: `${channel}`,
     guild_id: context.params.event.guild_id,
   });
   await lib.discord.channels['@0.2.0'].messages.create({
     channel_id: context.params.event.channel_id,
     content: `Successfully joined <#${channel}>:thumbsup:`,
   });
 }
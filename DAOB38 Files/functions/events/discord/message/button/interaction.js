const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let result = await lib.discord.guilds['@0.1.0'].members.roles.update({
  role_id: `951874005932052560`, // required
  user_id: context.params.event.member.user.id, // required 
  guild_id: context.params.event.guild_id // required
});

await lib.discord.interactions['@1.0.1'].followups.create({
  token: `${context.params.event.token}`,
  content: `The Gamer role has been assigned to <@!${context.params.event.member.user.id}>!`
});

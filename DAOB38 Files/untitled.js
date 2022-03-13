// A simple auto role command for your server!
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
await lib.discord.guilds['@0.1.0'].members.roles.update({
  role_id: `941806937627037`, // Put the ID of your member role here!
  user_id: `${context.params.event.user.id}`,
  guild_id: `${context.params.event.guild_id}`,
});

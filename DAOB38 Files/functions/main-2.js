const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Set a streaming status. If a twitch URL is provided it will show up as a button...
await lib.discord.users['@0.1.0'].me.status.update({
  activity_name: `Over Servers`, // Activity name, REQUIRED..
  activity_type: 'WATCHING', // Available Activity Types: WATCHING, LISTENING, PLAYING, STREAMING...
  url: '', //Set this if you make activity type STREAMING..
  status: 'ONLINE', // Available Statuses: Do Not Disturb(Set To DND If you want to make this) , IDLE, ONLINE, INVISIBLE..
});



 
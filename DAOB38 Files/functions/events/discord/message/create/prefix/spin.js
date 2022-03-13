const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;
const msg = event.content;
const { guild_id, channel_id } = event;

const responses = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] // Change these to change the items on the wheel.
const random = Math.floor(Math.random() * responses.length);
console.log(random, responses[random]);

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

await lib.discord.channels['@0.2.2'].messages.create({ channel_id: channel_id, content: 'Spinning the wheel...', message_reference: { message_id: event.id, channel_id: channel_id, guild_id: guild_id } });
let message = await lib.discord.channels['@0.2.2'].messages.create({ channel_id: channel_id, content: `${random, responses[random]}` });

for (let i = 0; i < 6; i++) {
  const rand = Math.floor(Math.random() * responses.length);
  console.log(rand, responses[rand]);
  await delay(750)
  await lib.discord.channels['@0.2.2'].messages.update({ message_id: message.id, channel_id: channel_id, content: `${rand, responses[rand]}` });
}
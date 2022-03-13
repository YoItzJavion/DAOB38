const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;
const {guild_id, channel_id, user_id} = event;

// The 'central' voice channel users must join first
const voiceChannelId = process.env.VOICE_CHANNEL_ID;
const voicecategoryid = process.env.VOICE_CATEGORY_ID;
// The voice channel name to create for the user
const voiceChannelName = `${context.params.event.member.user.username}'s VC`;

// Create a new voice channel when the user joins the specifc voice channel
const joinedChannel = channel_id === voiceChannelId;
if (joinedChannel) {
  const channel = await lib.discord.guilds['@0.1.0'].channels.create({
    guild_id,
    parent_id: voicecategoryid,
    name: voiceChannelName,
    type: 2, // vc
  });
  await lib.discord.guilds['@0.1.0'].members.update({
    guild_id,
    user_id,
    channel_id: channel.id,
  });
  return;
}

// Delete the user's voice channel when the user disconnects
const leftChannel = !channel_id;
if (leftChannel) {
  const channels = await lib.discord.guilds['@0.1.0'].channels.list({guild_id});
  const channel = channels.find((c) => c.name === voiceChannelName);
  if (channel)
    await lib.discord.channels['@0.2.0'].destroy({channel_id: channel.id});
  return;
}
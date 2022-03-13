const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const event = context.params.event;
const { channel_id, content } = event;

// Use this function to get the prefix in other files.
// Use like `const prefix = await getGuildPrefix();`
const getGuildPrefix = async () => {
  const prefixMap = await lib.utils.kv['@0.1.16'].get({ key: 'prefix', defaultValue: {} });
  return prefixMap[context.params.event.guild_id] || ','
}

// Sets the prefix to the current guild.
const setGuildPrefix = async (prefix) => {
  const prefixMap = await lib.utils.kv['@0.1.16'].get({ key: 'prefix', defaultValue: {} });
  prefixMap[context.params.event.guild_id] = prefix;
  await lib.utils.kv['@0.1.16'].set({ key: 'prefix', value: prefixMap });
}

// Get prefix command.
if (content === 'prefix') {
  const prefix = await getGuildPrefix()
  return await lib.discord.channels['@0.2.0'].messages.create({
    channel_id, content: `Your server prefix is '${prefix}'`
  });
}

// Change prefix command
const commandPrefix = await getGuildPrefix();
const changePrefixCommand = `${commandPrefix} ,changeprefix`
if (content.startsWith(changePrefixCommand)) {
  const newPrefix = content.replace(changePrefixCommand, '').trim()
  
  if (newPrefix.length === 0)
    return await lib.discord.channels['@0.2.0'].messages.create({
      channel_id, content: `Please enter a valid prefix`
    });
  
  await setGuildPrefix(newPrefix)
  return await lib.discord.channels['@0.2.0'].messages.create({
    channel_id, content: `Your server prefix is now '${newPrefix}'`
  });
}
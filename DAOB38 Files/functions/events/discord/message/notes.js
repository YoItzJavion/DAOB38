const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let userNoteKey = `__${context.params.event.author.id}_note__`;

if (context.params.event.content.startsWith(',setnote')) {
  let noteText = context.params.event.content.split(' ').slice(1).join(' ');
  await lib.utils.kv['@0.1.16'].set({
    key: userNoteKey,
    value: noteText
  });
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `<@!${context.params.event.author.id}> set a note!`
  });
} else if (context.params.event.content.startsWith(',viewnote')) {
  let storedNoteText = await lib.utils.kv['@0.1.16'].get({
    key: userNoteKey
  });
  if (storedNoteText) {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: [
        `<@!${context.params.event.author.id}>'s note:`,
        '',
        storedNoteText
      ].join('\n')
    });
  } else {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `You don't seem to have a note set. Set one with **,note <note text>**.`
    });
  }
} else if (context.params.event.content.startsWith(',clearnote')) {
  await lib.utils.kv['@0.1.16'].clear({
    key: userNoteKey
  });
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `<@!${context.params.event.author.id}> cleared their note!`
  });
}

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const jimp = require('jimp');

module.exports = async (event, context) => {
    let timeout = await lib.utils.kv['@0.1.16'].get({
      key: `timeout`,
      defaultValue: false,
    });
    let member = event.author.id;
    if (event.mentions.length >= 1) {
      member = event.mentions[0].id;
    }
    let user = await lib.discord.users['@0.1.4'].retrieve({
      user_id: member,
    });
    let img = await jimp.read('https://cdn.discordapp.com/attachments/886961518183342153/899869369553797120/a90ffea51f484716d1a0a9ac33d30a96.jpeg');
    let avatar_jimp = await jimp.read(user.avatar_url);
    avatar_jimp.circle();
    avatar_jimp.resize(250, 250);
    img.composite(avatar_jimp, 866, 168);

    await jimp.loadFont(jimp.FONT_SANS_32_BLACK).then((font) => {
      img.print(
        font,
        678,
        501,
        {
          text: `${user.username}`,
        },
        300,
        2
      );
    });

    let buffer = await img.getBufferAsync(jimp.MIME_PNG);

    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: event.channel_id,
      content: ``,
      filename: 'badge_fbi.png',
      file: buffer,
    });
};

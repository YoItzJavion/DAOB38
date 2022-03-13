const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  if (context.params.event.content.startsWith(',avatar')) {
  const avatar = context.params.event.mentions.length
        ? context.params.event.mentions[0].avatar
        : context.params.event.author.avatar;

      const ID = context.params.event.mentions.length
        ? context.params.event.mentions[0].id
        : context.params.event.author.id;

      let avatarLink = `https://cdn.discordapp.com/avatars/${ID}/${avatar}`;
     
       let surveyURL = await lib.http.request['@1.1.5']({
        method: 'GET',
        url: avatarLink + ".gif"
      });
      
      if(surveyURL.statusCode === 200) avatarLink += ".gif"
       await lib.discord.channels['@0.1.0'].messages.create({
        channel_id: context.params.event.channel_id,
        content: ``,
        embed: {
          image: { url: avatarLink + "?size=1024" },
          color: 0xFF1493
        }
      });
  }
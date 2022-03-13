const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.startsWith(';invite')) {
  let botInfo = await lib.discord.users['@0.1.3'].me.list();
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: '',
    tts: false,
    embed: {
      type: 'rich',
      title: 'Invite me!',
      description: '**Find me cool? Just click above to invite me** :)',
      color: 0xc7a69e,
      footer: {
        text: 'Developed by: Young38baby#5504',
        icon_url:
          'https://export-download.canva.com/I9p6Y/DAE5j1I9p6Y/3/0/0001-19996973842.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20220226%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220226T212104Z&X-Amz-Expires=72042&X-Amz-Signature=5f0a050b26e839d78ff86c826f9af41847f897c907f756903c00d09f08daca98&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27DAOB.png&response-expires=Sun%2C%2027%20Feb%202022%2017%3A21%3A46%20GMT',
      },
      url: `https://discord.com/oauth2/authorize?client_id=${botInfo.id}&scope=identify%20bot%20applications.commands&permissions=2146958591`,
    },
  });
}
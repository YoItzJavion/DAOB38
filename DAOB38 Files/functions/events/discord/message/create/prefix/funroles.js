const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channtls['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 1,
          "label": `Gamer`,
          "custom_id": `row_0_button_0`,
          "disabled": true,
          "emoji": {
            "id": null,
            "name": `🎮`
          },
          "type": 2
        },
        {
          "style": 2,
          "label": `Reader`,
          "custom_id": `row_0_button_1`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `📚`
          },
          "type": 2
        },
        {
          "style": 3,
          "label": `Athlete`,
          "custom_id": `row_0_button_2`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `⛹`
          },
          "type": 2
        },
        {
          "style": 4,
          "label": `Just Ask`,
          "custom_id": `row_0_button_3`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `❓`
          },
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `Select your Desired Role`,
      "description": `What Best Describes You?`,
      "color": 0x00FFFF
    }
  ]
});
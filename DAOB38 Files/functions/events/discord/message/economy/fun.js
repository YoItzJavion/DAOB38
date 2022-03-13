const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let message = context.params.event.content;
let MONE = 50; // may be changed - slots winning money
let mone2 = 2; // may be changed - money you pay when you enter slots
let mone4 = 5; // may be changed - money if you lose flip
let mone3 = 10; // may be changed - money is you win flip
let hundred = 100; // may be changed - VIP Badge price
let poosecond = 500; // may be changed - MVP Badge price
let poo = 250; // may be changed - Platinum Badge price
let fish = 300; // may be changed - Fishing Rod Price
let car = 1250; // may be changed - Racing Car Price
let start = 0;
let final = MONE + start;

let result = await lib.utils.kv['@0.1.16'].get({
  key: `BALANCE-${context.params.event.author.id}`,
  defaultValue: `${start}`,
});

let inv = await lib.utils.kv['@0.1.16'].get({
  key: `INV-${context.params.event.author.id}`,
  defaultValue: ``,
});

let racingPrompts = [
  150,
  200,
  250,
  300,
];

  let racingChoice = Math.floor(Math.random() * racingPrompts.length);
  let racing = racingPrompts[racingChoice];

let fishingrodPrompts = [
  20,
  20,
  30,
  50,
  150,
];

  let fishingrodChoice = Math.floor(Math.random() * fishingrodPrompts.length);
  let fishingrod = fishingrodPrompts[fishingrodChoice];

let begPrompts = [
  0,
  0,
  0,
  1,
  3,
  5,
];

  let begChoice = Math.floor(Math.random() * begPrompts.length);
  let beg = begPrompts[begChoice];

let itemsPrompts = [
  - 1,
  - 5,
  - 10,
  - 15,
  - 20,
  1,
  5,
  10,
  15,
  20,
  50,
];

  let itemsChoice = Math.floor(Math.random() * itemsPrompts.length);
  let items = itemsPrompts[itemsChoice];
const first = Math.floor(Math.random() * 100); // 100 may be changed
const second = Math.floor(Math.random() * 100); // 100 may be changed
const frst = Math.floor(Math.random() * 19); // 19 may be changed - random number between 0 and 18!
const scnd = Math.floor(Math.random() * 19); // 19 may be changed - random number between 0 and 18!
const thrd = Math.floor(Math.random() * 19); // 19 may be changed - random number between 0 and 18!

if (message.toLowerCase() === `${process.env.prefix},slots`) {
  let status;
  if (`${frst}` + `${scnd}` + `${thrd}` == 777) {
    await lib.utils.kv['@0.1.16'].set({
      key: `BALANCE-${context.params.event.author.id}`,
      value: result + final,
    });
    status = `You won!`; // may be changed
  } else {
    status = `You lost!`; // may be changed
  }
  await lib.utils.kv['@0.1.16'].set({
    key: `BALANCE-${context.params.event.author.id}`,
    value: result - mone2,
  });
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: `Slots machine!`, // may be changed
      description: `Name: <@!${context.params.event.author.id}>`, // may be changed
      color: 0x00ff00, // may be changed
      fields: [
        {
          name: `How to win?`, // may be changed
          value: `If all your numbers are **7**, then you will win **${MONE}**$!`, // may be changed
        },
        {
          name: `Status:`, // may be changed
          value: `Paid **$2** for entering! | ${status} | Check your bank by doing: **${process.env.prefix}bank**`, // may be changed
        },
        {
          name: `First number`, // may be changed
          value: `[${frst}]`,
          inline: true,
        },
        {
          name: `Second number`, // may be changed
          value: `[${scnd}]`,
          inline: true,
        },
        {
          name: `Third number`, // may be changed
          value: `[${thrd}]`,
          inline: true,
        },
      ],
    },
  });
}

if (message.toLowerCase() === `${process.env.prefix},bank`) {
  let result = await lib.utils.kv['@0.1.16'].get({
    key: `BALANCE-${context.params.event.author.id}`,
    defaultValue: `${start}`,
  });
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: ``,
      description: `<@!${context.params.event.author.id}>'s bank account has: **$${result}**`, // may be changed
      color: 0x00ff00, // may be changed
    },
  });
}

if (message.toLowerCase() === `${process.env.prefix},flip`) {
  let flip;
  if (`${first}` > `${second}`) {
    flip = `You won! Here you get **$10**! Check your bank account by doing: **${process.env.prefix}bank**`; // may be changed
    await lib.utils.kv['@0.1.16'].set({
      key: `BALANCE-${context.params.event.author.id}`,
      value: result + mone3,
    });
  } else {
    await lib.utils.kv['@0.1.16'].set({
      key: `BALANCE-${context.params.event.author.id}`,
      value: result - mone4,
    });
    flip = `You lost the Flip... so you lost **$5**! Check your bank by doing: **${process.env.prefix}bank**`; // may be changed
  }
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: ``,
      description: `${flip}`,
      color: 0x00ff00, // may be changed
    },
  });
}
if (message.toLowerCase() === `${process.env.prefix},spin`) {
await lib.utils.kv['@0.1.16'].set({
  key: `BALANCE-${context.params.event.author.id}`,
  value: result + items
});

await lib.discord.channels[`@0.1.1`].messages.create({
  channel_id: context.params.event.channel_id,
  content: ``,
  embed: {
    title: `Spinning items!`,
    description: `You didn't pay anything for entering!`,
    color: 0x00FF00, // may be changed
    fields: [
      {
        name: `You spinned items and got ${items}`,
        value: `To check your bank use: **${process.env.prefix}bank**!`
        },
        {
          name: `What could you get?`,
          value: `${itemsPrompts} - but you got ${items}`,
      }
    ]
  }
});
}

if (message.toLowerCase() === `${process.env.prefix},roll`) {
let rolled;
  if(`${first}` > 70) {
  await lib.utils.kv['@0.1.16'].set({
    key: `BALANCE-${context.params.event.author.id}`,
    value: result + mone4
  });
  rolled = ` 💸 Woah! You rolled more than **70** and won **$${mone4}**!`
  } else {
  rolled = `❤️‍🔥 Uff! You rolled less than **70** and lost **$${mone4}**!`
     await lib.utils.kv['@0.1.16'].set({
      key: `BALANCE-${context.params.event.author.id}`,
      value: result - mone4
    });
  }
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: `Rolling!`,
      description: ``,
      color: 0x00FF00, // may be changed
      fields: [
        {
          name: `How much you rolled?`,
          value: `You rolled: **${first}** | ${rolled}`,
          },
          {
            name: `How to check how much money you have?`,
            value: `Use **!bank** to check your bank account!`,
        }
      ] 
    }
  });
}

if(message.toLowerCase() === `${process.env.prefix},beg`) {
   await lib.utils.kv['@0.1.16'].set({
    key: `BALANCE-${context.params.event.author.id}`,
    value: result + beg
  });
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: `Begging!`,
      description: `You got a total of **$${beg}** from begging!`,
      color: 0x00FF00, // may be changed
    }
  });
}
if(message.toLowerCase() === `${process.env.prefix},store`) {
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: `Local Store!`,  
      description: ``,
      color: 0x00ff00, // may be changed
      fields: [
        {
          name: `VIP Badge`,
          value: `\`$100\``,
          inline: true,
          },
          {
            name: `Platinum Badge`,
            value: `\`$250\``,
            inline: true,
            },
           {
              name: `MVP Badge`,
              value: `\`$500\``,
              inline: true,
              },  
              {
                name: `Fishing Rod`,
                value: `\`$300\``,
                inline: true,
                },
                {
                  name: `Racing Car`,
                  value: `\`$1250\``,
                  inline: true,
                  },
                  {
                name: `How to buy any of these items?`,
                value: `Use **${process.env.prefix}buy-<itemname>**`,
        }
      ]
    }
  });
}

if(message.toLowerCase() === `${process.env.prefix},inv`) {
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: `${context.params.event.author.username}'s inventory!`,
      description: `${inv}`,
      color: 0x00ff00, // may be changed
      fields: [
        {
          name: `How to get items?`,
          value: `You can buy them in **${process.env.prefix}store**`,
        }
      ]
    }
  });
}

if(message.startsWith(`${process.env.prefix},buy VIP`)) {
  if(`${result}` > hundred) {
    await lib.utils.kv['@0.1.16'].set({
      key: `BALANCE-${context.params.event.author.id}`,
      value: result - 100,
    });
    await lib.utils.kv['@0.1.16'].set({
      key: `INV-${context.params.event.author.id}`,
      value: `${inv}` + `, VIP Badge`,
    });
    enough1 = `You bought an item! Check your inventory using **${process.env.prefix}inv**`;
  } else {
    enough1 = `You don't have enough money!`;
  }
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: `${enough1}`,
      description: ``,
      color: 0x00ff00, // may be changed
    }
  })
}

if(message.startsWith(`${process.env.prefix},buy Plat`)) {
  if(`${result}` >= poo) {
    await lib.utils.kv['@0.1.16'].set({
      key: `BALANCE-${context.params.event.author.id}`,
      value: result - 250,
    });
    await lib.utils.kv['@0.1.16'].set({
      key: `INV-${context.params.event.author.id}`,
      value: `${inv}` +  `, Platinum Badge`,
    });
    enough2 = `You bought an item! Check your inventory using **${process.env.prefix}inv**`;
  } else {
    enough2 = `You don't have enough money!`;
  }
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: `${enough2}`,
      description: ``,
      color: 0x00ff00, // may be changed
    }
  })
}

if(message.startsWith(`${process.env.prefix},buy MVP`)) {
  if(`${result}` >= poosecond) {
    await lib.utils.kv['@0.1.16'].set({
      key: `BALANCE-${context.params.event.author.id}`,
      value: result - 500,
    });
    await lib.utils.kv['@0.1.16'].set({
      key: `INV-${context.params.event.author.id}`,
      value: `${inv}` +  `, MVP Badge`,
    });
    enough3 = `You bought an item! Check your inventory using **${process.env.prefix}inv**`;
  } else {
    enough3 = `You don't have enough money!`;
  }
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: `${enough3}`,
      description: ``,
      color: 0x00ff00, // may be changed
    }
  })
}

if(message.startsWith(`${process.env.prefix},buy fishing`)) {
  if(`${result}` >= fish) {
    await lib.utils.kv['@0.1.16'].set({
      key: `BALANCE-${context.params.event.author.id}`,
      value: result - 300,
    });
    await lib.utils.kv['@0.1.16'].set({
      key: `INV-${context.params.event.author.id}`,
      value: `${inv}` +  `, Fishing Rod`,
    });
    enough4 = `You bought an item! Check your inventory using **${process.env.prefix}inv**`;
  } else {
    enough4 = `You don't have enough money!`;
  }
  await lib.discord.channels[`@0.1.1`].messages.create({
    channel_id: context.params.event.channel_id,
    content: ``,
    embed: {
      title: `${enough4}`,
      description: ``,
      color: 0x00ff00, // may be changed
    }
  });
  }

if(message.startsWith(`${process.env.prefix},fish`)) {
   if(`${inv}`.match(`Fishing Rod`)) {
    await lib.utils.kv['@0.1.16'].set({
      key: `BALANCE-${context.params.event.author.id}`,
      value: result + fishingrod,
    });
    fishes = `You caught a fish and sold it for a whooping **$${fishingrod}**!`;
    } else {
      fishes = `You need fishing rod for fishing.... you can get one in **${process.env.prefix}store**`;
    }
    await lib.discord.channels[`@0.1.1`].messages.create({
      channel_id: context.params.event.channel_id,
      content:``,
      embed: {
        title: `Fishing!`,
        description: `${fishes}`,
        color: 0x00ff00, // may be changed
      }
    });
  }
  
  if(message.startsWith(`${process.env.prefix},buy Racing`)) {
    if(`${result}` >= car) {
      await lib.utils.kv['@0.1.16'].set({
        key: `BALANCE-${context.params.event.author.id}`,
        value: result - car,
      });
      await lib.utils.kv['@0.1.16'].set({
        key: `INV-${context.params.event.author.id}`,
        value: inv + `, Racing Car`,
      });
      race = `You bought an item! Check your inventory using **${process.env.prefix}inv**`;
    } else {
      race = `You don't have enough money!`;
    }
    await lib.discord.channels[`@0.1.1`].messages.create({
      channel_id: context.params.event.channel_id,
      content: ``,
      embed: {
        title: `${race}`,
        color: 0x00ff00, // may be changed
      }
    })
  }
  
  if(message.startsWith(`${process.env.prefix},race`)) {
    if(`${inv}`.match(`Racing Car`)) {
      await lib.utils.kv['@0.1.16'].set({
        key: `BALANCE-${context.params.event.author.id}`,
        value: result + racing
      });
      racers = `You just won **$${racing}** by winning a race!`;
    } else {
      racers = `You need to buy Racing Car, to participate in a race...`
    }
    await lib.discord.channels[`@0.1.1`].messages.create({
      channel_id: context.params.event.channel_id,
      content: ``,
      embed: {
        title: `Car Racing!`,
        description: `${racers}`,
      }
    })
    }
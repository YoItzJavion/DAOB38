
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const ur = Math.floor(Math.random() * 250); // You may replace "250" with max number you would like to see in lottery.
const winning = Math.floor(Math.random() * 250); // You may replace "250" with max number you would like to see in lottery.

let status;
if (`${ur}` == `${winning}`) {
  status = `You won the lottery!`;
} else {
  status = `You didn't win the lottery.`;
}

const now = new Date();
const m = now.getMonth() + 1; 
const d = now.getDate();
const h = now.getHours() +2;
const min = now.getMinutes();
const year = now.getFullYear();
const seconds = now.getSeconds();
let messagePrompts = [
  'The first lottery was launched in 1994. 20 years later, it has created 3,700 millionaires. ',
  '85% of winners choose to remain anonymous. ',
  'The odds of winning the lottery are 350 billion to one. Yet a family from Tipton, West Midlands has had three separate jackpot wins, totaling $3.25 million.',
  'The most drawn Lotto ball is 38—it has been drawn 314 times since 1994. ',
  '18 Lottery-funded films, including The King’s Speech and Billy Elliot, have won a total of 31 Baffas and 15 Oscars. ',
  '99% of surveyed winners still play National Lottery games after they have won, and 70% are convinced that they will win again.',
  'So far, the largest jackpot with one ticket was won by Gloria MacKenzie of Zephyrhills, Florida in 2013. She won $590.5 million dollars. ',
  'The average number of cars that millionaire lottery winners purchase is 4.5. ',
  '52% of winners who won $1 million or more left their jobs',
  // You may add more facts here...
];

let messageChoice = Math.floor(Math.random() * messagePrompts.length);
let message = messagePrompts[messageChoice];

const time = `${h}:${min}:${seconds}`;
const date = `${m}/${d}/${year}`; 

module.exports = async (event, context) => {
if (event.content.startsWith(`,lottery`)) { 
await lib.discord.channels['@0.0.3'].messages.create({
      channel_id: `${event.channel_id}`,
      content: [
      `` 
    ].join('\n'),
    embed: {
    title: 'Lottery Ticket!',
          type: 'rich',
          color: 0x00AA00, // This is green color - can be changed of course
          description: `Good Luck <@!${context.params.event.author.id}>!`,
          fields: [{
            name: `Status: ${status}`,
            value: [
      `Winning number: **${winning}**
       Your number: **${ur}**`,
            ].join('\n')
          }, {
            name: 'Random Lottery fact!',
            value: [
              `${message}`,
              `Entered the Lottery at: **${time}** CEST`
            ].join('\n')
          }]
        },
        tts: false
      });
    }  
  }
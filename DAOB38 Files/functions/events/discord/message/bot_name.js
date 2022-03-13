const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const axios = require('axios')

const message = context.params.event.content
const bot_name = "DAOB38" //DAOB
const channel_id = "947521036008706081" //947521036008706081

if(context.params.event.channel_id !== channel_id) return;
let returnMsg = await axios(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message)}&botname=${encodeURIComponent(bot_name)}&ownername=CTK WARRIOR&user=${context.params.event.author.id}`)
 returnMsg = returnMsg ? returnMsg.data : false;
 if(!returnMsg || !returnMsg.message) return;
await lib.discord.channels['@0.1.1'].messages.create({
  channel_id: context.params.event.channel_id,
  content: returnMsg.message,
  message_reference: {
    message_id: context.params.event.id
  }
});

//Young38baby#5504
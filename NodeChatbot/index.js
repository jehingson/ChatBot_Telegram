const TelegramBot = require('node-telegram-bot-api');
 
 const token = '1031741182:AAHvzeiE0WCIAoAjSFakVFhOGJy8m5lcDNM';
 const bot = new TelegramBot(token, {polling: true});

 const SerialPort = require('@serialport/stream');

 const serialport = new SerialPort('COM5', { autoOpen: false });

 
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});
 

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El ID del chat" + chatId);
  var Mensaje = msg.text;
  if(Mensaje == "Encender"){
    console.log("encender el led");
    bot.sendMessage(chatId, 'Encendere el Led');
    
  }
  else if(Mensaje == "Apagar"){
    console.log("apagar el led");
    bot.sendMessage(chatId, 'Apagare el Led');
    
  }
  
});
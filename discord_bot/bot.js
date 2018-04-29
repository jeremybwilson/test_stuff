// You will need to require the bot.

const Discord = require('discord.js');
const client = new Discord.Client()
const settings = require('./settings.json');

// this will be your prefix, you can change it
const prefix = '~';

// This will run whenever the bot gets a message, / whenever a message is sent to a server that it is in.
// bot.on('message', function(message) {
client.on('message', message => {  // ES6 arrow function

  // Easy to use variables

  // var input = message.content.toUpperCase(); // To uppercase because it ignores case sensitivity

  // if the message is a certain string, then run this script
  if (message.author === client.user) return; 
  if (message.content === prefix + 'ping'){
    message.channel.sendMessage('PONG');
  }
  // Now let's test it out

});

client.on('ready', () => {
  console.log('Bot launched...') // Runs when the bot is launched
});

// Login using OAuth
client.login(settings.token);  // We will have to make an OAuth

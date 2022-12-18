const Discord = require('./discord.js-selfbot-patched');

const colors = require('colors');
const { readFileSync } = require('fs');

const config = require('./config.json');
const tokens = readFileSync('./tokens.txt', 'utf-8').split('\n');

console.log(colors.magenta(`
  ╔╦╗╦╔═╗╔═╗╔═╗╦═╗╔╦╗  ╔═╗╔╦╗╦═╗╔═╗╔═╗╔╦╗╦╔╗╔╔═╗  ╔═╗╔═╗╦  ╔═╗╔╗ ╔═╗╔╦╗
   ║║║╚═╗║  ║ ║╠╦╝ ║║  ╚═╗ ║ ╠╦╝║╣ ╠═╣║║║║║║║║ ╦  ╚═╗║╣ ║  ╠╣ ╠╩╗║ ║ ║ 
  ═╩╝╩╚═╝╚═╝╚═╝╩╚══╩╝  ╚═╝ ╩ ╩╚═╚═╝╩ ╩╩ ╩╩╝╚╝╚═╝  ╚═╝╚═╝╩═╝╚  ╚═╝╚═╝ ╩              
                      github.com/jaimeleschatii`))

for (var x = 0; x < tokens.length; ++x) {
  const client = new Discord.Client();

  const token = tokens[x].trim();
  client.on('ready', () => {
    console.log(colors.red(`Logged in as ${client.user.tag}!`));
    client.user.setActivity(config.name , {
      type: config.type,
      url: config.url
    });
  });
  client.login(token);
}
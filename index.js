const TOKEN = 'NDkzOTU1NDAyMTI4NDI0OTYw.DosfXw.UZe5O0Clnoi5VZtgTCWhJWHXBVs';
const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: '.'
});

bot.registry
    .registerGroup('welcome', 'Welcome info')
    .registerGroup('fun', 'Fun')
    .registerGroup('events', 'Events')
    .registerDefaults()
    .registerCommandsIn(__dirname + '/commands')

bot.on('ready', function(){
    console.log("Ready");
})

bot.login(TOKEN)
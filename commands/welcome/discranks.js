const commando = require('discord.js-commando');
const discord = require('discord.js');

class DiscRanksCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'discranks',
            group: 'welcome',
            memberName: 'discranks',
            description: 'Discord ranks.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x22FF00)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("🗨️ __DISCORD RANKS__ 🗨️", "These are the current roles available, for everybody to choose:\n __**PLEASE ASK A MEMBER OF THE ADMIN TEAM IF YOU WANT ANY**__")
        .setImage("https://media.discordapp.net/attachments/454386801667342367/506231098334773268/clan_roles.png?width=657&height=677");
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DiscRanksCommand;

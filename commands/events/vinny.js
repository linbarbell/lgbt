const commando = require('discord.js-commando');
const discord = require('discord.js');

class VinnyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'vinny',
            group: 'events',
            memberName: 'vinny',
            description: 'Vindicta event details'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("⚔️ __**VINDICTA MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! \n Please get your kill count before the event start time, you keep your kc even though you leave GWD2!\n Keep moving! Don't stand in the flames! \n Thats all the advice you need but if you are nervous, please feel free to PM me.\n All loot will be traded to myself and split equally between attendees.", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/138/european-castle_1f3f0.png")
        .setThumbnail("https://vignette.wikia.nocookie.net/runescape2/images/4/40/Gorvek.png/revision/latest/scale-to-width-down/200?cb=20170517031043")
        .addField("\u200b","📅 **Date:** Tuesday 3rd July\n 🕘 **Time:** 21:00 game-time\n🌍 **World:** 23\n**Host:** <@258094952137883648>")
        .addField("\u200b", "**Requirements:**\n 80 Attack\n40 Zaros kill count.", true)
        .addField("\u200b", "**Recommended:**\n 71+ Prayer(for peity)\n90+ Herb for extremes\n Anything above barrows armour\n Any style works \n Heart tele tabs \n BoB filled with food.", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = VinnyCommand;

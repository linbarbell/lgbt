const commando = require('discord.js-commando');
const discord = require('discord.js');

class CappingCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'capping',
            group: 'simple',
            memberName: 'capping',
            description: 'Ranks.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("🏰 __**CITADEL CAPPING**__ 🏰")
        .setColor(0x00AE86)
        .setFooter("When skilling with fellow clan members at the same time in the Citadel, the resource gain has been slightly increased, the more members you gather resources with at once, the better the gain!", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/138/european-castle_1f3f0.png")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/european-castle_1f3f0.png")
        .addField("\u200b","**Date:** Friday 14th September\n **Time:** 19:30 game-time\n **Host:** <@174725556011532289>\n **Theme:** Runescape Gods")
        .addField("\u200b", "For this weeks capping event, we ask you to wear the colours, outfits, or gear of any of your favourite runescape Gods! We can't wait to see what outfits & the variety of stuff you will all wear!", true)
        .addBlankField();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = CappingCommand;

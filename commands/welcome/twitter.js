const commando = require('discord.js-commando');
const discord = require('discord.js');

class TwitterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'twitter',
            group: 'welcome',
            memberName: 'twitter',
            description: 'Twitter info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("The LGBT+ Corner (@TheLGBTCorner)")
        .setColor(0x6F00FF)
        .setDescription("🏳️‍🌈An active and friendly LGBT+ community clan on @Runescape with currently over 400+ members. Clan chat: The LGBT corner. Twitter managed by @RS_Shana & @RSnatster")
        .setURL("https://twitter.com/TheLGBTCorner")
        .addField("**Tweets**", "275", true)
        .addField("**Followers**", "194", true)
        .setImage("https://cdn.discordapp.com/attachments/308940788400652288/477933514063478794/clan_twitter.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = TwitterCommand;

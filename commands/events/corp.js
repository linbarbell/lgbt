const commando = require('discord.js-commando');
const discord = require('discord.js');

class CorpCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'corp',
            group: 'events',
            memberName: 'corp',
            description: 'Corp event details',
            args: [
                {
                    key: 'date',
                    prompt: 'What date is the event? (e.g. Friday 28 September)',
                    type: 'string'
                },
                {
                    key: 'time',
                    prompt: 'What time is the event? (e.g. 21:00)',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("⚔️ __**Corporeal Beast MASS**__ ⚔️")
        .setColor(0x00AE86)
        .setFooter("Please remember that this is completely for fun! \n Make sure you bring any type of spear! All other weapons will only do half damage (Masuta's Warspear is classed as a halberd, do not bring one). \n Just hit Corp and avoid the Dark Energy Core, do **NOT** bring a BoB as Corp will eat it. \n A games necklace can be used to avoid the wilderness and teleport to the beast's cave. \n Thats all the advice you need but if you are nervous, please feel free to PM me.\n All loot will be traded to myself and split equally between attendees.\n More info can be found at https://runescape.wiki/w/Corporeal_Beast/Strategies ", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/138/european-castle_1f3f0.png")
        .setThumbnail("https://runescape.wiki/images/thumb/5/5c/Corporeal_Beast.png/250px-Corporeal_Beast.png?36acd")
        .addField("\u200b","📅 **Date:** " + args.date + "\n 🕘 **Time:** " + args.time + " game-time\n🌍 **World:** 23\n**Host:** " + message.author)
        .addField("\u200b", "**Requirements:**\n Summer's End quest completed \n Any spear", true)
        .addField("\u200b", "**Recommended:**\n Bandos armour or higher ", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = CorpCommand;

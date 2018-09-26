const commando = require('discord.js-commando');
const discord = require('discord.js');

class MiscRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'miscrooms',
            group: 'room',
            memberName: 'miscrooms',
            description: 'Miscellaneous rooms info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Miscellaneous Rooms")
        .setColor(0x22FF00)
        .setDescription("`!spotlight` -- Display what minigame is currently spotlighted. \n \n `!event` -- Displays the next event, on the RuneScape community event calendar. \n \n `!arc`  -- Displays the current arc rotations. \n \n `!geadditions` -- Displays the new items added to the GE since the previous update. \n \n `!news` -- Displays the most recent RuneScape News. \n \n `!portables` -- Displays the current locations of the Portables FC Worlds. \n \n `!help` -- Display help for a command.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = MiscRoomCommand;
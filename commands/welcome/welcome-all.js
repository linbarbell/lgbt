const commando = require('discord.js-commando');
const WelcomeInfoCommand = require('./welcome.js');
const RulesCommand = require('./rules.js');
const RanksCommand = require('./ranks.js');
const RolesCommand = require('./roles.js');
const CitadelCommand = require('./citadel.js');
const TwitterCommand = require('./twitter.js');
const CalendarCommand = require('./calendar.js');
var welcome, rules, ranks, roles, citadel, twitter, calendar;

class WelcomeAllCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'welcome-all',
            group: 'welcome',
            memberName: 'welcome-all',
            description: 'Does all welcome messages'
        });
        welcome = new WelcomeInfoCommand(client);
        rules = new RulesCommand(client);
        ranks = new RanksCommand(client);
        roles = new RolesCommand(client);
        citadel = new CitadelCommand(client);
        twitter = new TwitterCommand(client);
        calendar = new CalendarCommand(client);
    }

    async run(message, args)
    {
        message.delete();
        welcome.run(message)
            .then(rules.run(message))
            .then(ranks.run(message))
            .then(roles.run(message))
            .then(citadel.run(message))
            .then(twitter.run(message))
            .then(calendar.run(message));
    }
}

module.exports = WelcomeAllCommand;

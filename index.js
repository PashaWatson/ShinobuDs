const {
    Client,
    GatewayIntentBits,
    Partials,
    EmbedBuilder,
    PermissionsBitField,
    MessageManager,
    Embed,
    Collection,
    Events,
    GuildHubType,
    AuditLogEvent } = require('discord.js');


const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    Partials: [Object.keys(Partials)],
});

const { loadEvents } = require('./handlers/eventHandler');
const { loadCommands } = require('./handlers/commandHandler');
const { loadComponents } = require('./handlers/componentHandler')
const { logsHandler } = require('./handlers/logsHandler')

const fs = require('fs')

client.buttons = new Collection()
client.commands = new Collection()
client.config = require('./config.json');

client.login(client.config.token).then(() => {
    loadEvents(client);
    loadCommands(client);
    loadComponents(client)
    logsHandler(client)
});


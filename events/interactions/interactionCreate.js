const { CommandInteraction, GuildMember } = require('discord.js');

module.exports = {
    name: "interactionCreate",

   async execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) {
            interaction.reply({ content: "outdatet commands" });
        }
        command.execute(interaction, client);

    }
}
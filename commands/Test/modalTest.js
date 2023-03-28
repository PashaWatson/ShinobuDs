const { Client, Message, ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder, EmbedBuilder, Component, PermissionFlagsBits } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getapplication')
        .setDescription('pong')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator), // Устанавливаются права на команду
    async execute(interaction, client) {
        const menurow = new ActionRowBuilder()
            .addComponents([
                new StringSelectMenuBuilder()
                    .setCustomId('menu-2')
                    .setPlaceholder('нажми на меня')
                    .addOptions(
                        {
                            label: 'Пожертвования',
                            value: 'opt-1',
                        },
                        {
                            label: 'Сухпоёк',
                            value: 'opt-2',
                        },
                        {
                            label: 'вступить в команду сервера',
                            value: 'opt-3',
                        },
                        {
                            label: 'Предложения по развитию сервера/бота',
                            value: 'opt-4',
                        },
                    ),
            ]);
        client.channels.cache.get('1080003827501105244').send({ // куда будет отправлятся
            "embeds": [
                {
                    "title": "Выбирите категорию заявки",
                    "description": "нажмите на интересующую категорию, что бы подробно разузнать о ней",
                    "color": 15466240
                }
            ],
            "attachments": [], components: [menurow]
        })
    }
}
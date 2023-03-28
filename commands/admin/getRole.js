const { Client, Message, ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder, EmbedBuilder, Component } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getroll')
        .setDescription('send selectMenu'),
    async execute(interaction, client) {
        interaction.reply({ content: 'getrole успешно отправлен' });
        const menurow = new ActionRowBuilder()
        .addComponents([
            new StringSelectMenuBuilder()
                .setCustomId('menu-1')
                .setPlaceholder('нажми на меня')
                .addOptions(
                    {
                        label: 'Сталкер',
                        description: 'выдаёт/забирает роль сталкер',
                        value: 'opt-1',
                    },
                    {
                        label: 'Бандит',
                        description: 'выдаёт/забирает роль бандит',
                        value: 'opt-2',
                    },
                    {
                        label: 'Свобода',
                        description: 'выдаёт/забирает роль свобода',
                        value: 'opt-3',
                    },
                    {
                        label: 'Долг',
                        description: 'выдаёт/забирает роль долг',
                        value: 'opt-4',
                    },
                    {
                        label: 'Наемник',
                        description: 'выдаёт/забирает роль наемник',
                        value: 'opt-5',
                    },
                    {
                        label: 'Завет',
                        description: 'выдаёт/забирает роль завет',
                        value: 'opt-6',
                    },
                ),
        ]);
        client.channels.cache.get('1086867839773847562').send({ // куда будет отправлятся
        "embeds": [
          {
            "title": "МЕНЮ ПОЛУЧЕНИЕ РОЛИ",
            "description": "ЧТО БЫ ВЫДАТЬ СЕБЕ РОЛЬ НАЖМИ НА ВЫПАДАЮЩИЕ  МЕНЮ И ВЫБЕРИТЕ РОЛЬ КОТОРУЮ ХОЧЕШЬ, ЧТО БЫ УБРАТЬ РОЛЬ НАЖМИТЕ ПО ВЫБОРУ ЕЩЁ РАЗ, МОЖНО ВЫДАТЬ НЕСКОЛЬКО РОЛЕЙ",
            "color": 15466240
          }
        ],
        "attachments": [], components: [menurow] })
    }
}
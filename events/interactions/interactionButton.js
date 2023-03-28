// const filter = i => i.customId === 'primary' && i.user.id === '122157285790187530';
const {
    TextInputBuilder,
    ModalBuilder,
    ActionRowBuilder,
    TextInputStyle,

} = require('discord.js');

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if (interaction.isButton()) {
            if (interaction.customId == "btn-4") {
                const modal = new ModalBuilder()
                    .setCustomId('modalHelp')
                    .setTitle(' Идеи и предложения по улучщению сервера/бота');

                const modName = new TextInputBuilder()
                    .setCustomId('mod-1')
                    .setLabel("Ваш ник:")
                    .setPlaceholder('Если хотите можете оставить свою анонимность')
                    .setStyle(TextInputStyle.Short)
                    .setRequired(false);

                const modIdea = new TextInputBuilder()
                    .setCustomId('mod-2')
                    .setLabel("Ваша идея по улучшению сервера/бота: ")
                    .setStyle(TextInputStyle.Paragraph)
                    .setRequired(true);

                const firstActionRow = new ActionRowBuilder().addComponents(modName);
                const secondActionRow = new ActionRowBuilder().addComponents(modIdea);
                modal.addComponents(firstActionRow, secondActionRow);
                await interaction.showModal(modal);
            }
            if (interaction.customId == "btn-2") {
                const modal = new ModalBuilder()
                    .setCustomId('modalDry')
                    .setTitle('Гуманитарная помощь');

                const modName = new TextInputBuilder()
                    .setCustomId('mod-1')
                    .setLabel("Ваш ник куда отослать набор:")
                    .setStyle(TextInputStyle.Paragraph)
                    .setPlaceholder('Если хотите можете оставить свою анонимность')
                    .setRequired(true);

                    const modCart = new TextInputBuilder()
                    .setCustomId('mod-2')
                    .setLabel("Тип патронов: ")
                    .setPlaceholder('пример: 5.56 или 5.32')
                    .setStyle(TextInputStyle.Paragraph)
                    .setRequired(true);

                const firstActionRow = new ActionRowBuilder().addComponents(modName);
                const secondActionRow = new ActionRowBuilder().addComponents(modCart);
                modal.addComponents(firstActionRow, secondActionRow);
                await interaction.showModal(modal);
            }
            if (interaction.customId == "btn-1") {
                const modal = new ModalBuilder()
                    .setCustomId('modalGet')
                    .setTitle('пожертвования во блага сервера');

                const modName = new TextInputBuilder()
                    .setCustomId('mod-1')
                    .setLabel("Ваш ник:")
                    .setPlaceholder('пример: PashaWatson')
                    .setStyle(TextInputStyle.Short)
                    .setRequired(false);

                const modCart = new TextInputBuilder()
                    .setCustomId('mod-2')
                    .setLabel("описание: ")
                    .setPlaceholder('Опишите то что вы собираитесь жертвовать')
                    .setStyle(TextInputStyle.Paragraph)
                    .setRequired(true);

                const firstActionRow = new ActionRowBuilder().addComponents(modName);
                const secondActionRow = new ActionRowBuilder().addComponents(modCart);
                modal.addComponents(firstActionRow, secondActionRow);
                await interaction.showModal(modal);
            }
        }
        
        if (!interaction.isModalSubmit()) return;
        const nameModal = interaction.fields.getTextInputValue('mod-1');
        const ideaModal = interaction.fields.getTextInputValue('mod-2');
        if (interaction.customId === 'modalHelp') {
            await interaction.reply({ content: 'Заяка успешно отправлена', ephemeral: true });
            if (nameModal === "") {
                await client.channels.cache.get('1088661526996582520').send({ // куда будет отправлятся
                    "embeds": [
                        {
                            "title": `Предложение по улучшению сервера/бота`,
                            "description": `\n Отправитель: \n
                            ${interaction.user} Ник: не был указан
                            \n Предложение: \n 
                            ${ideaModal}`,
                            "color": 15466240
                        }
                    ],
                    "attachments": []
                })
            } else
                await client.channels.cache.get('1088661526996582520').send({ // куда будет отправлятся
                    "embeds": [
                        {
                            "title": `Предложение по улучшению сервера/бота`,
                            "description": `\n Отправитель: \n
                        ${interaction.user} Ник: ${nameModal}
                        \n Предложение: \n 
                        ${ideaModal}`,
                            "color": 15466240
                        }
                    ],
                    "attachments": []
                })
        }
        if (interaction.customId === 'modalDry') {
            await interaction.reply({ content: 'Заяка успешно отправлена', ephemeral: true });
                await client.channels.cache.get('1088670201966506045').send({ // куда будет отправлятся
                    "embeds": [
                        {
                            "title": `Заявка на гуманитарная помощь`,
                            "description": `\n Отправитель: \n
                        ${interaction.user} Ник: ${nameModal}
                        \n набор для отправки \n
                         1. 9 энергетиков \n
                         2. 9 геркулесов \n
                         3. 20 сумок военных аптечек \n
                         5. cумки ${ideaModal}`,
                            "color": 15466240
                        }
                    ],
                    "attachments": []
                })
        }
        if (interaction.customId === 'modalGet') {
            await interaction.reply({ content: 'Заяка успешно отправлена, администратор отпишет вам', ephemeral: true });
            if (nameModal === "") {
                await client.channels.cache.get('1088661526996582520').send({ // куда будет отправлятся
                    "embeds": [
                        {
                            "title": `Заявка на гуманитарная помощь серверу`,
                            "description": `\n Отправитель: \n
                            ${interaction.user} Ник: не был указан
                            \n Описание: \n 
                            ${ideaModal}`,
                            "color": 15466240
                        }
                    ],
                    "attachments": []
                })
            } else
                await client.channels.cache.get('1090092837258928209').send({ // куда будет отправлятся
                    "embeds": [
                        {
                            "title": `Заявка на гуманитарная помощь серверу`,
                            "description": `\n Отправитель: \n
                        ${interaction.user} Ник: ${nameModal}
                        \n Описание: \n 
                        ${ideaModal}`,
                            "color": 15466240
                        }
                    ],
                    "attachments": []
                })
        }
    }
}

// const {
//     TextInputBuilder,
//     ModalBuilder,
//     ActionRowBuilder,
//     TextInputStyle,

// } = require('discord.js');

// module.exports = {
//     name: "interactionCreate",
//     async execute(interaction) {
//         if (!interaction.isModalSubmit()) return;
//         if (interaction.customId === 'modalDry') {
//             await interaction.reply({ content: 'Your submission was received successfully!' });
//         }
//     }
// }
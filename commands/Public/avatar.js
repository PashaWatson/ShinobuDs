const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Узнать аватарку пользователя')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Узнать аватарку пользователя')
        ),
    execute(interaction) {
        var array1 = [
            ':heart:',
            ':orange_heart:',
            ':yellow_heart:',
            ':green_heart:',
            ':blue_heart:',
            ':purple_heart:',
            ':black_heart:',
            ':brown_heart:',
            ':white_heart:',
            ':broken_heart:'
        ]
        var randindex = Math.floor(array1.length * Math.random()) //рандомное число из массива
        const gif = array1[randindex]

        const userAvatar = interaction.options.getUser('user') ?? interaction.user //если опции нету
        const embed = new EmbedBuilder()
            .setTitle(`**Аватарка пользователя ${userAvatar.tag}** ${gif}`)
            // .setDescription(`${gif}`)
            .setColor(10165109)
            .setImage(userAvatar.displayAvatarURL({ size: 1024 }))
        interaction.reply({ embeds: [embed] })
        console.log(userAvatar)
    },
}

// const role = interaction.guild.roles.cache.get('1077083583338004651');
// const member = interaction.guild.members.cache.get(interaction.user.id);
// const menu = new SelectMenuBuilder()
//     .setCustomId(`sub-menu`)
//     .setMinValues(1)
//     .setMaxValues(1)
//     .setOptions(
//         new SelectMenuOptionBuilder({
//             label: `Лайк`,
//             value: member.roles.add(role)
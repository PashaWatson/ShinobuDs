const {GuildMember, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        const {user, guild} = member
        const welcomeChannel = guild.channels.cache.get('1043793519812288523')
        const memberRole = '1043908751578628197'
        const welcomeEmbed = new EmbedBuilder()
            .setTitle(`Добро пожаловать ${member.user.tag} в беседу нашего клана!`)
            .setDescription('Прежде чем получить доступ к чатам, ознакомся с его правилами в соответствующим канале "Правила"')
            .setColor(10165109)
            .setImage('https://cdn.discordapp.com/attachments/1043906744016977961/1043907294175432774/welcomebaner.png')

            welcomeChannel.send({embeds: [welcomeEmbed]})
            member.roles.add(memberRole)
    }
}
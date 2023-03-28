function logsHandler(client) {

    const { AuditLogEvent, Events } = require('discord.js');

    client.on(Events.MessageDelete, async message => {
        // Игнорировать прямые сообщения
        if (!message.guild) return;
        const fetchedLogs = await message.guild.fetchAuditLogs({
            type: AuditLogEvent.MessageDelete,
        });
        // Выполните проверку согласованности, чтобы убедиться, что есть * что-то*
        const deletionLog = fetchedLogs.entries.first();

        // Выполните проверку согласованности, чтобы убедиться, что есть * что-то*
        if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

        // Обновите выходные данные, добавив немного больше информации
        // Также запустите проверку, чтобы убедиться, что возвращенный журнал относится к сообщению того же автора
        const { executor, target } = deletionLog;
        mgFamily = client.channels.cache.get("1082650095822053386")
        let date = new Date
        dateformat = [date.getMonth() + 1,
        date.getDate(),
        date.getFullYear()].join('.') + ' • ' +
            [date.getHours(),
            date.getMinutes(),
            date.getSeconds()].join(':');
        if (target.id === message.author.id) {
            mgFamily.send({
                "content": null,
                "embeds": [
                    {
                        "description": `сообщение пользователя удалено: ${message.author} • ${message.channel}`,
                        "color": 16711680,
                        "fields": [
                            {
                                "name": "сообщение",
                                "value": `${message.content}`
                            }
                        ],
                        "author": {
                            "name": `${message.author.username}`,
                            "icon_url": `${message.author.displayAvatarURL()}`
                        },
                        "footer": {
                            "text": `id автора: ${message.author.id} | ${(dateformat)}`
                        }
                    }
                ],
                "attachments": []
            })
        } else {
            mgFamily.send({
                "content": null,
                "embeds": [
                    {
                        "description": `сообщение пользователя удалено: ${message.author} • ${message.channel}`,
                        "color": 16711680,
                        "fields": [
                            {
                                "name": "сообщение",
                                "value": `${message.content}`
                            }
                        ],
                        "author": {
                            "name": `${message.author.username}`,
                            "icon_url": `${message.author.displayAvatarURL()}`
                        },
                        "footer": {
                            "text": `id автора: ${message.author.id} | ${(dateformat)}`
                        }
                    }
                ],
                "attachments": []
            })
        }
    });
}

module.exports = { logsHandler };
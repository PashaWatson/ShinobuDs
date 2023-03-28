const {
    CommandInteraction,
    GuildMember,
    TextInputBuilder,
    ModalBuilder,
    ActionRowBuilder,
    TextInputStyle,
    EmbedBuilder,
    User,
    Events,
    ButtonBuilder,
    ButtonStyle

    
} = require('discord.js');

module.exports = {
    name: "interactionCreate",

    async execute(interaction, client) {
        if (!interaction.isStringSelectMenu()) return;

        var array1 = [
            'https://media.discordapp.net/attachments/1086858584337420358/1086858645012226108/image.png',
            'https://media.discordapp.net/attachments/1086858584337420358/1086860230027132938/image.png',
            'https://media.discordapp.net/attachments/1086858584337420358/1086860298918572083/image.png',
            'https://media.discordapp.net/attachments/1086858584337420358/1086860361422090240/image.png',
            'https://media.discordapp.net/attachments/1086858584337420358/1086860659192512512/image.png',
            'https://media.discordapp.net/attachments/1086858584337420358/1086860736766156880/image.png',
            'https://media.discordapp.net/attachments/1086858584337420358/1086860841288204370/image.png',
            'https://media.discordapp.net/attachments/1086858584337420358/1086860940449951844/image.png',
            'https://media.discordapp.net/attachments/1086858584337420358/1086861021106425886/image.png',
            'https://media.discordapp.net/attachments/1086858584337420358/1086861080329994260/image.png',
        ]

        var textarray1 = [
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

        var textarray2 = [
            "Прощания не вечны, они не конец. Они просто означают «Я скучаю по тебе, пока мы не встретимся снова»",
            "прощание всегда тяжело, но возвращение иной раз ещё тяжелее!",
            "Не плачь, потому что ты уходишь. Улыбнись, потому что ты был здесь",
            "Я ненавижу, когда все заканчивается, и еще многое предстоит сделать.",
            "Если вы достаточно сильны, чтобы попрощаться, жизнь вознаградит вас новым приветом. Пауло Коэльо",
            "Ничто не длится вечно. Все, что у нас есть, это то, что находится в середине привет и до свидания.",
            "Каждое окончание имеет новое начало",
            "Прощание может отнять у вас больше, чем будущее.",
            "Вспомни меня и улыбнись, потому что это лучше, чем вспоминать меня и плакать. -Доктор. Сьюз."
        ]

        var textarray3 = [
            "Я пришел с миром!",
            "Какие люди и без охраны!",
            " Сколько лет, сколько зим!",
            "Отличное выглядишь!",
            "Салют!",
            "Мы знакомы?",
            "Здравствуйте, товарищи!",
            "Как настроение?",
        ]

        const randindex1 = Math.floor(array1.length * Math.random())
        const image = array1[randindex1]
        const randindex2 = Math.floor(textarray1.length * Math.random())
        const textheart = textarray1[randindex2]
        const randindex3 = Math.floor(textarray2.length * Math.random())
        const textEnd = textarray2[randindex3]
        const randindex4 = Math.floor(textarray3.length * Math.random())
        const textWelcome = textarray3[randindex4]

        if (interaction.isStringSelectMenu()) {
            await interaction.deferUpdate().catch(null)
            if (interaction.customId === "menu-1") {
                const value = interaction.values[0]

                const role1 = interaction.guild.roles.cache.get(`1086862893225607218`) // сталкер
                const role2 = interaction.guild.roles.cache.get(`1086863940660772894`) // бандит
                const role3 = interaction.guild.roles.cache.get(`1086864286514679928`) // свобода
                const role4 = interaction.guild.roles.cache.get(`1086864427950805013`) // долг
                const role5 = interaction.guild.roles.cache.get(`1086864903689740379`) // наемники
                const role6 = interaction.guild.roles.cache.get(`1086865030991061023`) // завет 

                switch (value) {
                    case "opt-1":
                        if (interaction.member.roles.cache.has('1085661704844738723')) {
                            await interaction.member.roles.remove(role1)
                            await interaction.followUp({
                                "content": null,
                                "embeds": [
                                    {
                                        "title": "Вы убрали роль сталкер!",
                                        "description": `${textEnd}`,
                                        "color": 479232,
                                        "footer": {
                                            "text": `Ты всегда можешь вернуть роль, выбрав её снова`
                                        },
                                        "image": {
                                            "url": `${image}`
                                        }
                                    }
                                ],
                                ephemeral: true
                            })
                            break
                        } else
                            await interaction.member.roles.add(role1)
                        await interaction.followUp({
                            "content": null,
                            "embeds": [
                                {
                                    "title": "Вы получили роль сталкер!",
                                    "description": "Как говорится, добро пожаловать на борт нашего болотного ледокола сталкер!",
                                    "color": 479232,
                                    "footer": {
                                        "text": `Ты ${role1.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ],
                            ephemeral: true
                        })
                        client.channels.cache.get('1087117629128450148').send({
                            "content": null,
                            "embeds": [
                                {
                                    "title": `У вас пополнение`,
                                    "description": `${textWelcome} ${interaction.user}!`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `он ${role1.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ]
                        })
                        break
                    case "opt-2":
                        if (interaction.member.roles.cache.has('1086863940660772894')) {
                            await interaction.member.roles.remove(role2)
                            await interaction.followUp({
                                "content": null,
                                "embeds": [
                                    {
                                        "title": "Вы убрали роль бандит!",
                                        "description": `${textEnd}`,
                                        "color": 479232,
                                        "footer": {
                                            "text": `Ты всегда можешь вернуть роль, выбрав её снова`
                                        },
                                        "image": {
                                            "url": `${image}`
                                        }
                                    }
                                ],
                                ephemeral: true
                            })
                            break
                        } else
                            await interaction.member.roles.add(role2)
                        await interaction.followUp({
                            "content": null,
                            "embeds": [
                                {
                                    "title": "Вы получили роль бандит!",
                                    "description": `Слышь валыну убери и проходи бандит ${interaction.user}!`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `Ты ${role2.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ],
                            ephemeral: true
                        })
                        client.channels.cache.get('1087123181376127047').send({
                            "content": null,
                            "embeds": [
                                {
                                    "title": `У вас пополнение`,
                                    "description": `${textWelcome} ${interaction.user}!`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `он ${role2.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ]
                        })
                        break
                    case "opt-3":
                        if (interaction.member.roles.cache.has('1086864286514679928')) {
                            await interaction.member.roles.remove(role3)
                            await interaction.followUp({
                                "content": null,
                                "embeds": [
                                    {
                                        "title": "Вы убрали роль свободы!",
                                        "description": `${textEnd}`,
                                        "color": 479232,
                                        "footer": {
                                            "text": `Ты всегда можешь вернуть роль, выбрав её снова`
                                        },
                                        "image": {
                                            "url": `${image}`
                                        }
                                    }
                                ],
                                ephemeral: true
                            })
                            break
                        } else
                            await interaction.member.roles.add(role3)
                        await interaction.followUp({
                            "content": null,
                            "embeds": [
                                {
                                    "title": "Вы получили роль свободы!",
                                    "description": `Пусть наши слова приветствия разнесутся по свободному ветру ${interaction.user}!`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `Ты ${role3.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ],
                            ephemeral: true
                        })
                        client.channels.cache.get('1087140640292339764').send({
                            "content": null,
                            "embeds": [
                                {
                                    "title": `У вас пополнение`,
                                    "description": `${textWelcome} ${interaction.user}!`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `он ${role3.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ]
                        })
                        break
                    case "opt-4":
                        if (interaction.member.roles.cache.has('1086864427950805013')) {
                            await interaction.member.roles.remove(role4)
                            await interaction.followUp({
                                "content": null,
                                "embeds": [
                                    {
                                        "title": "Вы убрали роль долга!",
                                        "description": `${textEnd}`,
                                        "color": 479232,
                                        "footer": {
                                            "text": `Ты всегда можешь вернуть роль, выбрав её снова`
                                        },
                                        "image": {
                                            "url": `${image}`
                                        }
                                    }
                                ],
                                ephemeral: true
                            })
                            break
                        } else
                            await interaction.member.roles.add(role4)
                        await interaction.followUp({
                            "content": null,
                            "embeds": [
                                {
                                    "title": "Вы получили роль долга!",
                                    "description": `*звук включения звукозаписывающего устройства* Внимание! Вы находитесь возле охраняемого периметра Зоны - а ты новенький тогда проходи ${interaction.user}!`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `Ты ${role4.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ],
                            ephemeral: true
                        })
                        client.channels.cache.get('1087161558209147021').send({
                            "content": null,
                            "embeds": [
                                {
                                    "title": `У вас пополнение`,
                                    "description": `${textWelcome} ${interaction.user}!`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `он ${role4.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ]
                        })
                        break
                    case "opt-5":
                        if (interaction.member.roles.cache.has('1086864903689740379')) {
                            await interaction.member.roles.remove(role5)
                            await interaction.followUp({
                                "content": null,
                                "embeds": [
                                    {
                                        "title": "Вы убрали роль долга!",
                                        "description": `${textEnd}`,
                                        "color": 479232,
                                        "footer": {
                                            "text": `Ты всегда можешь вернуть роль, выбрав её снова`
                                        },
                                        "image": {
                                            "url": `${image}`
                                        }
                                    }
                                ],
                                ephemeral: true
                            })
                            break
                        } else
                            await interaction.member.roles.add(role5)
                        await interaction.followUp({
                            "content": null,
                            "embeds": [
                                {
                                    "title": "Вы получили роль долга!",
                                    "description": `*звук включения звукозаписывающего устройства* Внимание! Вы находитесь возле охраняемого периметра Зоны - а ты новенький тогда проходи ${interaction.user}!`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `Ты ${role5.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ],
                            ephemeral: true
                        })
                        client.channels.cache.get('1087485765044412516').send({
                            "content": null,
                            "embeds": [
                                {
                                    "title": `У вас пополнение`,
                                    "description": `${textWelcome} ${interaction.user}!`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `он ${role5.members.size} член группировки на нашем сервере`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ]
                        })
                        break
                }
            }
            if (interaction.customId === "menu-2") {
                const value = interaction.values[0]
                switch (value) {
                    case "opt-1":
                        const row1 = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('btn-1')
                                    .setLabel('НАЖМИ ДЛЯ ПОДАЧИ ЗАЯВКИ')
                                    .setStyle(ButtonStyle.Danger),
                            );
                        await interaction.followUp({
                            "content": null,
                            "embeds": [
                                {
                                    "title": "Если хотите заполнить заявку нажите на кнопку",
                                    "description": `вы можете пожертвовать предмет/деньги на развития сервера, они пойдут на раздачи, конкурсы, а так же мероприятия. \n если у вас есть пожелания сделать подарок определённому человеку то просто укажите его имя в заявки`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `❤.❤.❤`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ],
                            ephemeral: true,
                            components: [row1]
                        })
                        break
                    case 'opt-2':
                        const row2 = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('btn-2')
                                    .setLabel('НАЖМИ ДЛЯ ПОДАЧИ ЗАЯВКИ')
                                    .setStyle(ButtonStyle.Danger),
                            );
                        await interaction.followUp({
                            "content": null,
                            "embeds": [
                                {
                                    "title": "Если хотите заполнить заявку нажите на кнопку",
                                    "description": `вы можете заполнить заявку для получения боевого набора, он выдаётся раз в неделю по воскресеньям, после получения набора, вам нада будет оставить заявку снова \n в набор входит \n 1. 9 энергетиков
                                     \n 2. 9 геркулесов
                                     \n 3. 20 сумок военных аптечек
                                     \n 4. 4 любых сумок бб патронов (адекватно)`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `❤.❤.❤`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ],
                            ephemeral: true,
                            components: [row2]
                        })
                        break
                    case 'opt-3':
                        await interaction.followUp({
                            "content": null,
                            "embeds": [
                                {
                                    "title": "*undefined*",
                                    "description": `в данный момент набора на стафф серфера не проводится"`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `❤.❤.❤`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ],
                            ephemeral: true
                        })
                        break
                    case 'opt-4':
                        const row4 = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('btn-4')
                                    .setLabel('НАЖМИ ДЛЯ ПОДАЧИ ЗАЯВКИ')
                                    .setStyle(ButtonStyle.Danger),
                            );
                        await interaction.followUp({
                            "content": null,
                            "embeds": [
                                {
                                    "title": "Предложение по развитию",
                                    "description": `если у вас есть предложение по развитию сервера или нашего серверного бота shinobu то вы можете написать о вашей идеи`,
                                    "color": 479232,
                                    "footer": {
                                        "text": `❤.❤.❤`
                                    },
                                    "image": {
                                        "url": `${image}`
                                    }
                                }
                            ],
                            ephemeral: true,
                            components: [row4]
                        })
                        break
                }
            }
        }

    }
}

// 1. 9 энергетиков
// 2. 9 геркулесов
// 3. 20 сумок военных аптечек
// 5. 4 любых сумок бб патронов (адекватно)

// const modal = new ModalBuilder()
// .setCustomId('myModal')
// .setTitle('My Modal');

// // добавление modal компанентов
// const modName = new TextInputBuilder()
//     .setCustomId('mod-1')
//     .setLabel("Ваш ник:")
//     .setStyle(TextInputStyle.Short);

// const modIdea = new TextInputBuilder()
//     .setCustomId('mod-2')
//     .setLabel("Ваша идея по улучшению сервера: ")
//     .setStyle(TextInputStyle.Paragraph);

// const firstActionRow = new ActionRowBuilder().addComponents(modName);
// const secondActionRow = new ActionRowBuilder().addComponents(modIdea);

// modal.addComponents(firstActionRow, secondActionRow);
// await interaction.showModal(modal);
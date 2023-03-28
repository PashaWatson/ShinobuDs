const { AttachmentBuilder, Client, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { request } = require('undici');

const applyText = (canvas, text) => {
    const context = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 70;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        context.font = `${fontSize -= 10}px sans-serif`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (context.measureText(text).width > canvas.width - 300);

    // Return the result to use in the actual canvas
    return context.font;
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('send profile'),
    async execute(interaction, client) {
        // создания холста
        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://media.discordapp.net/attachments/1048947133291712603/1049018572019613896/355840_screenshots_20170206163810_2.png?width=1352&height=676');
        //использует размеры холста для растягивания изображения на весь холст
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        context.strokeRect(0, 0, canvas.width, canvas.height);
        context.font = '28px sans-serif';
        context.fillStyle = '#ffffff'; 
        context.fillText('Профиль', canvas.width / 2.7, canvas.height / 3);
        context.font = applyText(canvas, `${interaction.member.displayName}!`);
        context.fillStyle = '#B00000';
        context.fillText(`${interaction.member.displayName}!`, canvas.width / 3, canvas.height / 1.8);
        context.arc(125, 125, 75, 0, Math.PI * 2, true);
        context.closePath();
        context.clip();
        const { body } = await request(interaction.user.displayAvatarURL({ extension: 'jpg' }));
        const avatar = await Canvas.loadImage(await body.arrayBuffer());
        context.drawImage(avatar, 25, 0, 200, canvas.height);
        // использует полезную структуру класса вложений
        const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });


        interaction.reply({ files: [attachment] });
    }
}
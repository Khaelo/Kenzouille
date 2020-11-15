const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');

    client.user.setStatus("online");
    client.user.setActivity("les messages de Kenza et Aurelie", {type:3})
});

client.on('message', (message) => {
    if (message.author.id === "766652908669632542") {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Kenzouille');
        message.react(reactionEmoji);
    }
    if (message.author.id === "688786329361973256") {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Aurelius');
        message.react(reactionEmoji);
    }
});

client.login(process.env.TOKEN);

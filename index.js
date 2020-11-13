const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');

    client.user.setStatus("online");
    client.user.setActivity("Les messages de Kenza", {type:3})
});

client.on('message', (message) => {
    if (message.author.id === "766652908669632542") {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Kenzouille');
        message.react(reactionEmoji);
    }
});

client.login('Nzc2ODk1NzY3MDYyOTA0ODMy.X67ikA.gg31cgQfF2fNLyfMhxd2X9djjqU');
const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        let kullanıcı = message.mentions.members.first();

        if(kullanıcı){
            const $adista = new Discord.MessageEmbed()
            .setDescription(`${kullanıcı} Kişisinin Profil Resmi`)
            .setColor('RANDOM')
            .setImage(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send($adista)
        } else {
            const $adista = new Discord.MessageEmbed()
            .setDescription(`${message.author} Profil Resmin`)
            .setColor('RANDOM')
            .setImage(message.author.avatarURL({dynamic: true, size: 2048}))
             .setTimestamp() 
            message.channel.send($adista)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Avatar','AVATAR','pp','Pp','PP','İCON','icon','İcon','aVATAR','avatra','Avatra','AVATRA','avtra','AVTRA','Avtra'],
    permLevel: 0
}

exports.help = {
    name: 'avatar'
}
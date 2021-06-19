
const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // $adista
        let mesaj = args.slice(0).join(' ')

        // $adista
        if(!mesaj){
            const $adista = new Discord.MessageEmbed()
            .setDescription(`**Lütfen Duyuruya Atacağım Mesajıda Gir.**`)
            .setColor('BLACK')
            .setFooter('Pâyidar')
            return message.channel.send($adista)
        }

        // $adista | CMF
        if(mesaj){
            client.channels.cache.get("847019530328997908").send(`${mesaj} ||@everyone||`)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Duyuru','DUYURU'],
    permLevel: 4
}

exports.help = {
    name: 'duyuru'
}
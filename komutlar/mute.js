const Discord = require('discord.js');
const ms = require('ms');

    exports.run = (client, message, args) => {

        // Yetki İçin
         if(!message.member.roles.cache.get("805171366776930344")){
             const yetki = new Discord.MessageEmbed()
             .setColor('BLACK')
             .setDescription(` ${message.author} **Bu Kodu Kullana Bilmek İçin Yeterli Yetkin Bulunmuyor...** `)
             return message.channel.send(yetki)
           
        }

        let kullanıcı = message.mentions.members.first();
        let sure = args[1];
        let sebep = args.slice(2).join(' ');

        if(!kullanıcı){
            const kullanicihatasi = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(` ** ${message.author} Kullanıcı Bulunamadı, Lütfen Kullanıcı Etiketle** `)
            .setFooter('Mute Hatası ❌')
            return message.channel.send(kullanicihatasi)
        }
        
        if(!sure){
            const surehatasi = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(` ** ${message.author} Süre Girmeyi Unuttun, \n\n \` 1s = 1 Saniye || 1h = 1 Saat || 1d = 1 Gün || 1y = 1 Yıl \` ** `)
            .setFooter('Mute Hatası ❌')
            return message.channel.send(surehatasi)
        }

        if(!sebep){
            const sebephatasi = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(` ** ${message.author} **Lütfen Geçerli Bir Sebep Giriniz...** `)
            .setFooter('Mute Hatası ❌')
            return message.channel.send(sebephatasi)
        }

        if(kullanıcı || sure || sebep){
            const jail = new Discord.MessageEmbed()
            .setDescription(` ${kullanıcı} Kişisi ${message.author} Tarafından, **${sebep}** Sebebiyle **${sure.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün')}** Boyunca Susturuldu`)
            .setColor('#00FF00')
            .setTitle(` **Başarıyla Susturuldu** `)
            message.channel.send(jail)

            // Jail Atıldığı Zaman Verilecek & Alınacak Roller
                kullanıcı.roles.add('852179254329212969')
            // Jail Bittiği Zaman Verilecek & Alınacak Roller
                setTimeout(() => {
                  kullanıcı.roles.remove('852179254329212969')
                    // Jail Bitince Kanal Bilgilendirme Mesajı Atalım
                  
          

                    client.channels.cache.get('805188089919963206').send(` **${kullanıcı} Adlı Üye'nin Mute Süresi Doldu** `)
                }, ms(sure))
        }
    } 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['vmute','sustur'],
    permLevel: 0
}

exports.help = {
    name: 'mute',
    description: 'mute',
    usage: '.mute @kişi süre sebep'
}

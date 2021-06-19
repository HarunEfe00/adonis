
const Discord = require('discord.js');
const ms = require('ms');

    exports.run = (client, message, args) => {

        // Yetki İçin
         if(!message.member.roles.cache.get("805171367192428604")){
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
            .setFooter('Jail Hatası ❌')
            return message.channel.send(kullanicihatasi)
        }
        
        if(!sure){
            const surehatasi = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(` ** ${message.author} Süre Girmeyi Unuttun, \n\n \` 1s = 1 Saniye || 1h = 1 Saat || 1d = 1 Gün || 1y = 1 Yıl \` ** `)
            .setFooter('Jail Hatası ❌')
            return message.channel.send(surehatasi)
        }

        if(!sebep){
            const sebephatasi = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(` ** ${message.author} **Lütfen Geçerli Bir Sebep Giriniz...** `)
            .setFooter('Jail Hatası ❌')
            return message.channel.send(sebephatasi)
        }

        if(kullanıcı || sure || sebep){
            const jail = new Discord.MessageEmbed()
            .setDescription(` ${kullanıcı} Kişisi ${message.author} Tarafından, **${sebep}** Sebebiyle **${sure.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün')}** Boyunca Jail'e Atıldı `)
            .setColor('#00FF00')
            .setTitle(` **Başarıyla Jail'e Atıldı** `)
            message.channel.send(jail)

      
          
            // Jail Atıldığı Zaman Verilecek & Alınacak Roller
                kullanıcı.roles.add('805171367971520562')
                kullanıcı.roles.remove('805176597610364938')
                kullanıcı.roles.remove('805171363765682196')
           kullanıcı.roles.remove('805173684025294868')
           kullanıcı.roles.remove('805171361953742888')
           kullanıcı.roles.remove('805171361285931008')
           kullanıcı.roles.remove('852466343273693184')
           kullanıcı.roles.remove('852466341611831316')
           kullanıcı.roles.remove('852466341611831316')
           kullanıcı.roles.remove('852466342007144458')
           kullanıcı.roles.remove('852479528407793685')
           kullanıcı.roles.remove('805173684025294868')
           kullanıcı.roles.remove('805171368382562384')
           kullanıcı.roles.remove('805171363765682196')
          
            // Jail Bittiği Zaman Verilecek & Alınacak Roller
                setTimeout(() => {
                  kullanıcı.roles.remove('774768832556302397')
                  kullanıcı.roles.remove('774770577344561192')
                  kullanıcı.roles.remove('846762779154710568')
                  kullanıcı.roles.remove('824067529826762842')
                  kullanıcı.roles.remove('775774224819814470')
                  kullanıcı.roles.remove('824067935349899294')
                  kullanıcı.roles.remove('731475794169298956')
                  kullanıcı.roles.remove('731475547342766092')
                  kullanıcı.roles.remove('731413138070831105')
                  kullanıcı.roles.remove('775707475449217025')
                  kullanıcı.roles.remove('774773585393745951')
                  kullanıcı.roles.remove('774768832556302397')
                     kullanıcı.roles.add('731475794169298956')
                     kullanıcı.roles.add('731475547342766092')
                    kullanıcı.roles.add('ÜYE ROL İD 846762779154710568')
                    // Jail Bitince Kanal Bilgilendirme Mesajı Atalım
                  
          

                    client.channels.cache.get('762067658002137099').send(` **${kullanıcı} Jail Süren Doldu Umarım Tekrarlamazsın** `)
                }, ms(sure))
        }
    
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Jail','karantina','Karantina','JAİL','Cezalı','cezalı','Ceza-ver','ceza-ver'],
    permLevel: 0
}

exports.help = {
    name: 'jail',
    description: 'Adonis JAİL',
    usage: '.jail @kişi süre sebep'
}

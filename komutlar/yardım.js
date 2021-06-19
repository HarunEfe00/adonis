const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setColor("RED")
 .setThumbnail(message.author.avatarURL({ dynamic: true }))
 .setTitle(`᱗ ADONİS`)
 .addField(`Erkek Kayıt`,`.erkek @kişi İsim Yaş`)
 .addField(`Kadın Kayıt`,`.kadın @kişi İsim Yaş`)
 .addField(`Cinsiyetsiz Kayıt`,`.kayıt @kişi İsim Yaş`)
 .addField(`Kayıtsıza Atma`,`.kayıtsız @etiket`)
 .addField(`İsim Değiştirme`,`.isimdeğiştir @etiket İsim Yaş`)
 .addField(`Vip Alıp-Verme`,`.vipver @etiket - !vipal @etiket`)
 .addField(`Statslara Bakma`,`.stats @etiket - !topstats - !stats-sıfırla @etiket`)
 .addField(`Profil Profil-Temizleme`,`.profil @etiket - !profil-temizle @etiket`)
 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","y"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
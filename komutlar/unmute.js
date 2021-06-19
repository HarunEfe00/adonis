const Discord = require('discord.js');
const db = require('quick.db');
const jkood = require('../jkood.js');

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has(jkood.mutehammer)) return message.reply(`Bu Komutu Kıllanabilmek İçin Yeterli Yetkiye Sahip Değilsin!`);
  
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.reply('Lütfen Bir Kullanıcı Girin.')
  if (!member.roles.cache.has(jkood.muterol)) return message.reply("Bu kişi ceza almadı")
  
  let jail = jkood.jailrol
  
  member.roles.remove('852179254329212969')
  
   
   const embed = new Discord.MessageEmbed()
    .setAuthor("Mute Kaldırma Başarılı")
    .addField(`Susturması Kaldırılan Kişi\n`, `${member}`)
    .addField('Yetkili\n', `${message.author}`)
    .setFooter("᱗|Adonis")
    .setColor("RANDOM")
    .setThumbnail(member.user.avatarURL({dynamic:true}))  
    .setTimestamp()  
message.channel.send(embed)
} 

exports.conf = {
  enabled:true,
  guildOnly:true,
  aliases: ['unmute'],
  permLevel:0
}

exports.help = {
  name: 'unmute',
  description: "Belirtilen kişinin susturmasını kaldırılır",
  usage: 'unmute @kişi'
}
  
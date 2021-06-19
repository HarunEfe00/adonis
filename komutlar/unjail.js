const Discord = require('discord.js');
const db = require('quick.db');
const jkood = require('../jkood.js');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("jkood.unjail")) return message.reply(`Bu Komutu Kıllanabilmek İçin Yeterli Yetkiye Sahip Değilsin!`);
  
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.reply('Lütfen Bir Kullanıcı Girin.')
  if (!member.roles.cache.has(jkood.jailrol)) return message.reply("Bu kişi ceza almadı")
  
  let jail = jkood.jailrol
  
  member.roles.remove('805171367971520562')
  member.roles.add('805176597610364938')
  
   member.roles.add('805171363765682196')
   member.roles.add('731475547342766092')
  
   
   const embed = new Discord.MessageEmbed()
    .setAuthor("Jail Kaldırma Başarılı!")
    .addField(`Jaili Kaldırılan Kişi\n`, `${member}`)
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
  aliases: ['unjail'],
  permLevel:0
}

exports.help = {
  name: 'unjail',
  description: "Belirtilen kişinin cezası kaldırılır",
  usage: 'unjail @kişi'
}
  
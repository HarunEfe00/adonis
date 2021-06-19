const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const jkood = require('../jkood.js');

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = ayarlar.prefix;

  if (!message.member.roles.cache.has(jkood.banhammer))  return message.channel.send(`Bu komutu kullanabilmek için yeterli yetkin bulunmamakta!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(`Sunucudan yasaklamak istediğiniz kullanıcıyı etiketlemelisiniz; \`${prefix}kick @Gnarge Reklam\` `);
  if (user.id === message.author.id) return message.channel.send(':x: | Lütfen Sunucudan Atmak istediğiniz Kişiyi Etiketleyiniz!');
  if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`:x: | Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`:x: | Etiketlediğin kullanıcıyı sunucuda bulamadım.`)

 if (!message.guild.member(user).kickable) return message.channel.send(`:x: | Bu kişiyi sunucudan atamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);

   if (!message.guild.member(user).kickable) return message.channel.send(':x: | Sunucudaki yetkilileri yasaklayamam!');

  message.guild.members.kick(user.id)
  
  const embed = new Discord.MessageEmbed()
    .setAuthor("Atma İşlemi Başarılı")
    .addField(`Atılan Kişi\n`, `${member}`)
    .addField('Yetkili\n', `${message.author}`)
    .setFooter("᱗|Adonis")
    .setColor("RANDOM")
    .setThumbnail(member.user.avatarURL({dynamic:true}))  
    .setTimestamp()  
message.channel.send(embed)
} 


exports.conf = {
  aliases: ['kick'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'kick',
  description: 'Belirttiğiniz kişiyi sunucudan atar.',
  usage: 'kick <@kullanıcı> <sebep>',

};
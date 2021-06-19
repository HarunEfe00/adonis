const Discord = require("discord.js")

exports.run = (client, message, args) => {
 
  let everyone = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(everyone, {
    SEND_MESSAGES: false  ///buraya true Yazarak Sohbet aç komutunu yaparsın
  });

  const lock = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(':lock: Kanal Kapatıldı')
 .setTimestamp()  
  message.channel.send(lock);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lock"],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-kapat",
  description: "Sohbeti Kapatırsıniz",
  usage: "kapat"
};
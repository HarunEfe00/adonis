const Discord = require("discord.js")
exports.run = async(client, message, args) => {
    message.channel.send("Selam, beni buradan davet edebilirsin\nhttps://discord.com/oauth2/authorize?client_id=846466575737028659&scope=bot&permissions=805829694")

  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "Davet Linki"
  };
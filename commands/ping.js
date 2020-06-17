// MessageEmbed class extraction from the discord.js library/package
const {MessageEmbed} = require("discord.js");

// Basic command structure, importing bot, message and the args
exports.run = async (bot, message, args) => {
  
  // Send the commands list
  //message.channel.send(new Date().getTime() - message.createdTimestamp + " ms")
  return message.channel.send(
      new MessageEmbed()
      .setAuthor('Netzwerkdiagnose - Ping')
      .setDescription(new Date().getTime() - message.createdTimestamp + " ms - Constellate API")
      .setFooter("Constellate • " + "Anfrage von: " + message.author.tag)
      .setColor("#FF4646")
  );

}
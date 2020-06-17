// MessageEmbed class extraction from the discord.js library/package
const {MessageEmbed} = require("discord.js");

// Basic command structure, importing bot, message and the args
exports.run = async (bot, message, args) => {
  
  // Send the commands list
  message.channel.send(
    new MessageEmbed()
      .setTitle("NGC-7541")
      .setDescription(`Constellate NGC-7541\n[Einladung](${await bot.generateInvite(0)})`)
      .addField("Spiele Musik", "Füge etwas zur Warteschlange hinzu\n*Nutzung:  \`!p𝚕𝚊𝚢 (Name/URL)\`*")
      .addField("Wiedergabe überspringen", "Überspringt die aktuelle Wiedergabe\n*Nutzung:  \`!𝚜𝚔𝚒𝚙\`*")
      .addField("Warteschlange anzeigen", "Zeigt alle vorhandenen Einträge der Warteschlange\n*Nutzung:  \`!queue\`*")
      .addField("Wiedergabe beenden", "Entfernt alle Einträge aus der Warteschlange und stoppt die Wiedergabe\n*Nutzung:  \`!stop\`*")
      .setColor("#FF4646")
      .setFooter("Constellate • " + "Anfrage von: " + message.author.tag)
      
  )
  
  // Delete the user's message
  message.delete()
  
}
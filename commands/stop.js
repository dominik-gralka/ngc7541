// Basic command structure, importing bot, message and the args
exports.run = async (bot, m, args, active) => {
   const { MessageEmbed } = require("discord.js");
   let fetched = active.get(m.guild.id);
  
  // Deletes the user's message
  m.delete()
  
  // Checks if the member is in a voice channel
  if(!m.member.voice.channel) return m.channel.send(
      new MessageEmbed()
      .setAuthor('Fehler - !stop', 'https://i.imgur.com/WvgI9Pe.png')
      .setDescription("Die Wiedergabe kann nur in einem Sprachkanal gestoppt werden.")
      .setFooter("Constellate • " + "Anfrage von: " + m.author.tag,)
      .setColor("#FF4646")
  );
  
  // Checks if the bot is in a voice channel
  if(!m.guild.me.voice.channel) return m.channel.send(
       new MessageEmbed()
      .setAuthor('Fehler - !stop', 'https://i.imgur.com/WvgI9Pe.png')
      .setDescription("NGC-7541 ist in keinem Sprachkanal.")
      .setFooter("Constellate • " + "Anfrage von: " + m.author.tag,)
      .setColor("#FF4646")
  );
  
  // Checks if the bot and the member are in the same voice channel
  if(m.guild.me.voice.channel.id !== m.member.voice.channel.id) return m.channel.send(
       new MessageEmbed()
      .setAuthor('Fehler - !stop', 'https://i.imgur.com/WvgI9Pe.png')
      .setDescription("Wir sind nicht im selben Sprachkanal.")
      .setFooter("Constellate • " + "Anfrage von: " + m.author.tag,)
      .setColor("#FF4646")
  );
  
  // Leaves the voice channel if all checks passes
  

  fetched.dispatcher.emit("stop");
  m.guild.me.voice.channel.leave();
  
  // Tells the member the bot left the voice channel
  m.channel.send(
         new MessageEmbed()
      .setAuthor('Sprachkanal verlassen - !stop', 'https://i.imgur.com/WvgI9Pe.png')
      .setDescription("Die Wiedergabe wurde beendet und der Sprachkanal verlassen.")
      .setFooter("Constellate • " + "Anfrage von: " + m.author.tag,)
      .setColor("#FF4646")
  );
}
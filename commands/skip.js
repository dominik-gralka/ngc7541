// Basic command structure, importing bot, message and the args
exports.run = async (bot, m, args, active) => {
  const { MessageEmbed } = require("discord.js");

  // Deletes the user's message
  m.delete()
  
  // Retrieves the server's music information
  let fetched = active.get(m.guild.id);
  
  // Checks if there is any music playing in the server
  if(!fetched) return m.channel.send(
        new MessageEmbed()
      .setAuthor('Fehler - !skip', 'https://i.imgur.com/WvgI9Pe.png')
      .setDescription("Es wird aktuell keine Musik gespielt.")
      .setFooter("Constellate • " + "Anfrage von: " + m.author.tag,)
      .setColor("#FF4646")
  );
  
  // Checks if the bot and the member are in the same voice channel
  if(m.guild.me.voice.channel !== m.member.voice.channel) return m.channel.send(
       new MessageEmbed()
      .setTitle("Fehler - !skip")
      .setDescription("Wir sind nicht im selben Sprachkanal.")
      .setFooter('Constellate', 'https://i.imgur.com/Vct273N.png')
      .setColor("#FF4646")
  );
  
  // Skips to current playing song
  fetched.dispatcher.emit("finish");
  
  // Tells the member the bot skipped the current song
  m.channel.send(
        new MessageEmbed()
      .setAuthor('Song überspringen - !skip', 'https://i.imgur.com/WvgI9Pe.png')
      .setDescription("Die aktuelle Wiedergabe wurde übersprungen.")
      .setFooter("Constellate • " + "Anfrage von: " + m.author.tag,)
      .setColor("#FF4646")
  );
  
}
// MessageEmbed class extraction from the discord.js library/package
const { MessageEmbed } = require("discord.js");

// Basic command structure, importing bot, message and the args
exports.run = async (bot, message, args, active) => {
  
  // Deletes the user's message
  message.delete()
  
  // Retrieves the server's music information
  let fetched = active.get(message.guild.id);
  
  // Checks if there is any music playing in the server
  if(!fetched) return message.channel.send(
      new MessageEmbed()
      .setTitle("Fehler")
      .setDescription("Ich höre hier keine Musik. Es scheint also nichts in der Warteschlange zu sein.")
      .setFooter('Constellate', 'https://i.imgur.com/Vct273N.png')
      .setColor("#FF4646")
  );
  
  // Defines the queue
  let queue = fetched.queue;

  // Create an empty string for the queue song list
  let data = "";
  
  // Loop through the entire queue
  for (var i = 1; i < queue.length; i++) {
    
    //  Add each song to the list
    data += `${i}. **${queue[i].songTitle}** - ${queue[i].duration} -- **Anfrage von:** *${queue[i].requestor}*\n`;
  
  }
  
  // If there are no songs in the queue, tell the member that the queue is empty
  if (data.length < 1) data = "Keine Songs in der Warteschlange";
  
  // Sends the queue
  message.channel.send(
    new MessageEmbed()
      .setAuthor('Warteschlange - !queue', 'https://i.imgur.com/WvgI9Pe.png%27')
      .setThumbnail(queue[0].thumbnail)
      .addField("Aktuell wird gespielt:", queue[0].songTitle, true)
      .addField("Länge:", queue[0].duration, true)
      .addField("Angefragt von:", queue[0].requestor, true)
      .addField("Warteschlange", data)
      .setColor("#FF4646")
      .setFooter("Constellate • " + "Anfrage von: " + message.author.tag,)
    );
  
};
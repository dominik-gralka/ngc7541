// Search class extraction from the discord.js library/package
const search = require('yt-search')

// MessageEmbed class extraction from the discord.js library/package
const {MessageEmbed} = require("discord.js")

// Basic command structure, importing bot, message, args and active
exports.run = async (bot, message, args, active) => {
  
  // Search YT with the given title/author
  search(args.join(' '), async (err, res) => {
    
      // Reduces the results to 10 entries
      let videos = res.videos.slice(0, 10)
      
      // Creates an empty string for the songs list
      let songs = "";
    
      // Loop through the songs
      for(var i in videos){
        
        // Add each song to the list along with its duration
        songs += `[${parseInt(i) + 1}]: ${videos[i].title} - ${videos[i].timestamp}\n`
        
      }
    
      // Sends the song picker and defines it to a variable for later use
      let picker = await message.channel.send(
       new MessageEmbed()
      .setAuthor('Suchanfrage - !play', 'https://i.imgur.com/WvgI9Pe.png')
      .setDescription(songs)
      .addField("Wähle eine Nummer von \`1-10\`","Schreibe \`abbrechen\` um die Auswahl abzubrechen.")
      .setFooter("Constellate • " + "Anfrage von: " + message.author.tag,)
      .setColor("#FF4646")
      )
  
      // Define a message collector for the user to pick a song from the picker
      const collector = message.channel.createMessageCollector(m => m.author.id == message.author.id)
      
      // Event which fires once the collector recieves a message from the user
      collector.once('collect', (msg) => {
        
        // Delete the picker embed
        picker.delete()
        
        // Delete the user's message
        msg.delete()
        
        // Checks if the entered message is a number between one and ten
        if(!isNaN(msg.content) && msg.content <= 10 && msg.content >= 1) {
          
          // Runs the play command with the 
          require(`./play.js`).run(bot, message, [videos[parseInt(msg.content)-1].url], active)
          
        }
        
        // Checks if the message is 'cancel' to cancel the picker
        else if(isNaN(msg.content) && msg.content.toLowerCase() === "abbrechen") {
          
          // Stop the message collector
          collector.stop();
          
          // Tells the user the collector has canceled
          message.channel.send(
          new MessageEmbed()
        .setAuthor('Abbrechen - !play', 'https://i.imgur.com/WvgI9Pe.png')
        .setDescription("Auswahl abgebrochen")
        .setFooter("Constellate • " + "Anfrage von: " + message.author.tag,)
        .setColor("#FF4646")
          );
        
        }
        
        // If none of the above statements are met it stops the collector
        else {
          
          // Stop the message collector
          collector.stop();
          
          // Tells the user their input is invalid
          message.channel.send(`\`${msg.content}\` ist keine Option.`)
          
        }
      
      })
  
    })
}
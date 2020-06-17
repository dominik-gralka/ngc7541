exports.run = async (bot, message, args) => {
  const {Discord, MessageEmbed} = require("discord.js");

  var http = require("http");
  
  
async function nitro_website() {
    return new Promise((resolve, reject)=>{
        http.get({ host:'cns.status.nitroapp.de' }, (res)=>{
            if (res.statusCode === 200) {
                resolve(' - Server erreichbar ✅');
            }
            else{
                resolve(' - Server nicht erreichbar ['+ res.statusCode + '] ❌');
            }
        }).on('error', (error)=>{
            resolve(' - Server nicht erreichbar ❌');
        });
    });
}
  
async function nitro_cl1() {
    return new Promise((resolve, reject)=>{
        http.get({ host:'mc.nitroapp.de' }, (res)=>{
            if (res.statusCode === 200) {
                resolve(' - Server erreichbar ✅');
            }
            else{
                resolve(' - Server nicht erreichbar ❌');
            }
        }).on('error', (error)=>{
            resolve(' - Server nicht erreichbar ❌');
        });
    });
}
  
async function nitro_cl2() {
    return new Promise((resolve, reject)=>{
        http.get({ host:'cl2.nitroapp.de' }, (res)=>{
            if (res.statusCode === 200) {
                resolve(' - Server erreichbar ✅');
            }
            else{
                resolve(' - Server nicht erreichbar ['+ res.statusCode + '] ❌');
            }
        }).on('error', (error)=>{
            resolve(' - Server nicht erreichbar ❌');
        });
    });
}

async function nitro_cl3() {
    return new Promise((resolve, reject)=>{
        http.get({ host:'cl3.nitroapp.de' }, (res)=>{
            if (res.statusCode === 200) {
                resolve(' - Server erreichbar ✅');
            }
            else{
                reject(' - Server nicht erreichbar ❌');
            }
        }).on('error', (error)=>{
            resolve(' - Server nicht erreichbar ❌');
        });
    });
}

async function constellate() {
    return new Promise((resolve, reject)=>{
        http.get({ host:'cns.status.constellate.de' }, (res)=>{
            if (res.statusCode === 200) {
                resolve(' - Server erreichbar ✅');
            }
            else{
                resolve(' - Server nicht erreichbar ['+ res.statusCode + '] ❌');
            }
        }).on('error', (error)=>{
            resolve(' - Server nicht erreichbar ❌');
        });
    });
}

  
  
try{
const nitro_website_s = await nitro_website();
      const nitro_cl1_s = await nitro_cl1();
      const nitro_cl2_s = await nitro_cl2();
      const nitro_cl3_s = await nitro_cl3();
      const constellate_s = await constellate();
  
      message.channel.send(
        
      new MessageEmbed()
      .setAuthor('Status', 'https://i.imgur.com/WvgI9Pe.png')
      .setTitle('Status der Nitro und Constellate Dienste')
      .setDescription('Nitro Webseite' + nitro_website_s + '\nNitro CL1 (Gameserver)' + nitro_cl1_s + '\nNitro CL2 (Cloudsystem)' + nitro_cl2_s + '\nNitro CL3' + nitro_cl3_s + '\nConstellate' + constellate_s)
      .setFooter("Constellate • " + "Anfrage von: " + message.author.tag)
      .setColor("#FF4646")
      
      
      
      );  
}
catch(e){
}  


  
};


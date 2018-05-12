const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "/"

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('ready', function () {
  bot.user.setGame('[/help]|Crazy_Street_ -> Host').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
    return channel.send('Bienvenue ' + member.displayName + ' sur le serveur de Crazy Street, je t\'invite à aller voir les #règlement, amuses-toi bien sur le Discord :smile: ')
  }).catch(console.error)

  var channel = member.guild.channels.find('name', 'bienvenue_bye');
  if (!channel) return
  var bvn = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Un nouveau Mini Crazy est arrivéé !")
  .setDescription(`\n Bienvenue **${member.user}** sur le Discord de Crazy_Street_ :smile:`)
  .setFooter("Je t'invite à aller dans le channel #règlement pour lire les règle du Discord ;)", member.user.displayAvatarURL)
  channel.sendEmbed(bvn)
  //channel.send("Bienvenue toi : **" + member.user + "** sur : **Développeur(euse)s [FR, 2018]**.")
});

bot.on('guildMemberRemove', function (member) {
  
    var channel = member.guild.channels.find('name', 'bienvenue_bye');
    if (!channel) return
    var bvn = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Un Mini Crazy est parti !")
    .setDescription(`\n Aurevoir **${member.user}** :frowning: `)
    .setFooter("Tu reviendras nous voir", member.user.displayAvatarURL)
    channel.sendEmbed(bvn)
    });

bot.on('message', message => {

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#4FB448")
        .setThumbnail("https://images-ext-1.discordapp.net/external/veZptUu_KDKmwtUJX5QT3QxESYCaRp4_k0XUwEQxubo/https/i.imgur.com/e9DIB8e.png?width=80&height=80")
        .setTitle("Commande du bot - CrazyBot")
        .setDescription("Liste des commandes")
        .addField("/crazystreet", "Info sur Crazy_Street_")
        .addField("/Unosial", "Info sur Unosial")
        .addField("/host", "En développement")
        .addField("/botinfo", "Info sur le bot")
        .addField("/invite", "Lien d'invitation pour rejoindre le discord")
        message.channel.sendMessage(help_embed);
        console.log("Un MiniCrazy a utilisé la commande /help")
    }
    
    if(message.content === prefix + "help"){
      var help_embed = new Discord.RichEmbed()
      .setColor("#4FB448")
      .setThumbnail("https://images-ext-1.discordapp.net/external/veZptUu_KDKmwtUJX5QT3QxESYCaRp4_k0XUwEQxubo/https/i.imgur.com/e9DIB8e.png?width=80&height=80")
      .setTitle("Commande de modération - CrazyBot")
      .setDescription("Liste des commandes")
      .addField("/mute", "En développement")
      .addField("/unmute", "En développement")
      .addField("/ban", "En développement")
      .addField("/kick", "En développement")
      message.channel.sendMessage(help_embed);
  }

    if(message.content === prefix + "crazystreet"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#4FB448")
        .setThumbnail("https://yt3.ggpht.com/-crHFyzLCViM/AAAAAAAAAAI/AAAAAAAAAAA/SfJVEztH9HQ/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg")
        .setTitle("Crazy_Street_")
        .setDescription("18 ans, vidéaste sur YouTube développeur pour Unosial")
        .addField("Youtube", "https://www.youtube.com/user/CrazyCraftHC/about")
        .addField("Twitter", "https://twitter.com/crazycrafthc_yt?lang=fr")
        message.channel.sendMessage(help_embed);
        console.log("Un MiniCrazy veut plus d'info sur Crazy_Street en faisant la commande /CrazyStreet")
    }

    if(message.content === prefix + "unosial"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#4FB448")
        .setThumbnail("https://pbs.twimg.com/profile_images/950780773178728448/XlM9XmLN_400x400.jpg")
        .setTitle("Unosial")
        .setDescription("Serveur Minecraft Survie 1.12.2 [Actuellement en Développement] CM: @Aeverr_ @Typholz")
        .addField("IP du serveur", "On l'auras l'IP mais pas aujourd'hui")
        .addField("Twitter", "https://twitter.com/crazycrafthc_yt?lang=fr")
        message.channel.sendMessage(help_embed);
        console.log("Un MiniCrazy veut plus d'info sur Unosial en faisant la commande /Unosial")
    }

    if(message.content === prefix + "botinfo"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#4FB448")
        .setThumbnail("https://minotar.net/helm/Crazy_Street_/300.png")
        .setTitle("CrazyBot")
        .setDescription("Info du Bot CrazyBot")
        .addField("Nom", "@CrazyBot#8719")
        .addField("Version", "Bêta")
        .addField("Creator", "@Franklin#3692")
        .addField("Aide" ,"Xenos#2351 et lKi'#5772")
        .addField("Crée le", "18/04/2018")
        .addField("Pour", "Le Discord de Crazy_Street_")
        .addField("Invite boit", "Ce bot est uniquement accesible au discord de Crazy_Street_, il est donc privée")
        message.channel.sendMessage(help_embed);
        console.log("Un MiniCrazy veut plus d'info sur le bot en faisant la commande /botinfo")
    }

    
    if(message.content === prefix + "invite"){
      var help_embed = new Discord.RichEmbed()
      .setColor("#4FB448")
      .setThumbnail("https://minotar.net/helm/Crazy_Street_/300.png")
      .setTitle("Liens d'invitation")
      .setDescription("Voici le lien d'invitation pour inviter tes amis sur le Discord :smile:")
      .addField("Invitation:", "https://discord.gg/2TWTSrs")
      message.channel.sendMessage(help_embed);
      console.log("Un MiniCrazy veut inviter un pote sur le serveur en faisant la commande /invite")
  
  }
  
      if(message.content === prefix +  "report Dimix cheat"){
      var help_embed = new Discord.RichEmbed()
      .setColor("#4FB448")
      .setTitle("Report - Xray")
      .addField("Cause:", "A besoin de cheat pour avoir du skill ")
      message.channel.sendMessage(help_embed);
      console.log("Un MiniCrazy veut report Dimix")
        }
        if(message.content === prefix +  "report Dimix tryharde"){
      var help_embed = new Discord.RichEmbed()
      .setColor("#4FB448")
      .setTitle("Report - Tryharde")
      .addField("Cause:", "A besoin de tryharde pour essayer de gagner, mais il perd")
      message.channel.sendMessage(help_embed);
      console.log("Un MiniCrazy veut report Dimix")
          }
  if(message.content === "aba")
    {
      message.reply("Abadakor")
    }
  
   if(message.content === "Crazy_Street_")
    {
      message.reply("CrazyStreet Ne te repondra pas vu qu'il est malvoyant")
      message.reply("Commande by Dimix")
    }
       
  if(message.content === prefix + "report")
    {
      message.reply("Va sur le site d'Epicube: https://epicube.fr/report")
    }
  
  
   if(message.content === "Lulu voc")
    {
      message.reply("Crazy a dit que tu devais venir voc @LuluTriel")
    }
   if(message.content === "abaEnzoo")
    {
      message.reply("Il a enfin le Legend sur AbaEpicube")
    }
  
   if(message.content === "Je peux être OP ?")
    {
      message.reply("Ok, pour être OP, tu tournes a droite, puis tu vas rue bambi (Tu y trouvera @|Baptou|)et tu seras OP")
    }
   if(message.content === "AbaFunky")
    {
      message.reply("Respècte AbaFunky, et il te respectera en retour")
    }
  
   if(message.content === "AbaDev")
    {
      message.reply("AbaDev, le Dieu, rien à dire de plus !")
    }
  
  if(message.content === "Speed")
    {
      message.reply(".;,;.")
    }

})



  bot.on('message', message => {  
  
    if(message.content === "tg") {
        message.delete()
        message.reply("Évite les messages comme ça, please !")
    }
        if(message.content === "FORTNITE") {
        message.delete()
        message.reply("Évite les messages de ce jeu comme ça, chaque personne qui parle de ce jeu, un dimix decède et un Crazy_Street_ défonce  quelqu'un !")
    }
            if(message.content === "Fortnite") {
        message.delete()
        message.reply("Évite les messages de ce jeu comme ça, chaque personne qui parle de ce jeu, un dimix decède et un Crazy_Street_ défonce  quelqu'un !")
    }
            if(message.content === "fortnite") {
        message.delete()
        message.reply("Évite les messages de ce jeu comme ça, chaque personne qui parle de ce jeu, un dimix decède et un Crazy_Street_ défonce  quelqu'un !")
    }
            if(message.content === "F-O-R-T-N-I-T-E") {
        message.delete()
        message.reply("Évite les messages de ce jeu comme ça, chaque personne qui parle de ce jeu, un dimix decède et un Crazy_Street_ défonce  quelqu'un !")
    }
            if(message.content === "dimix") {
        message.delete()
        message.reply("Évite les messages comme ça, chaque personne qui parle de lui, un dimix se fait mute sur le discord de AbaDev !")
    }
                if(message.content === "Dimix") {
        message.delete()
        message.reply("Évite les messages comme ça, chaque personne qui parle de lui, un dimix se fait mute sur le discord de AbaDev !")
    }
      if(message.content === "Tg") {
        message.delete()
        message.reply("Évite les messages comme ça, please !")
    }
      if(message.content === "TG") {
        message.delete()
        message.reply("Évite les messages comme ça, please !")
    }
      if(message.content === "tG") {
        message.delete()
        message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "fuck") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "nigg") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "fuk") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "cunt") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "cnut") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "bitch") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "dick") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "d1ck") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "pussy") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "asshole") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "b1tch") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "b!tch") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "blowjob") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "cock") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "c0ck") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "NTM") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "bite") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }
    if(message.content === "putain") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }  
    if(message.content === "merde") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")
    }      
    if(message.content === "mrde") {
      message.delete()
      message.reply("Évite les messages comme ça, please !")





      
    }    
})

bot.login(process.env.TOKEN)

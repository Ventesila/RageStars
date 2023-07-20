const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
  
  let basvuru = "1042019379614863400"// //Başvurunun gideceği kanal
	let kanal = "1042019378172022855" // Baş vurunun yapılacağı kanalı
  let log = "1042019379614863400" // Bot Eklendi / Onaylandı / Rededildi Kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
	if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`:x: Botunun ID'sini yazmalısın.`).then(x => x.delete({timeout: 30000}))
  if (!prefix) return message.channel.send(`:x: Botunun prefixini yazmalısın.`).then(x => x.delete({timeout: 30000}))
message.delete()
 
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot ID", botid)
  .addField("Bot Prefix", prefix)
  client.channels.cache.get(basvuru).send(embed)
  client.channels.get(log).send(`${message.author} adlı kullanıcının <@${botid}> adlı botu sıraya ekledi. Botu onaylanmayı bekliyor.`)
  message.channel.cache.send(`:white_check_mark: Bot ekleme isteğiniz alındı.`).then(x => x.delete({timeout: 3000}))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};
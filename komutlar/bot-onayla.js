const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.roles.cache.has("792010324781563915"))  return message.channel.send(`:x: Bu komutu kullanabilmek için "\`BotList Yetkili\`" yetkisine sahip olmalısın.`);
	let botisim = args[0]
  let sahip = args[1]
	let log = "1042023961858416680" //  Bot Eklendi / Onaylandı / Rededildi Kanalı
	
	if (!botisim) return message.channel.send(`:x: Botun idsini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
		client.channels.cache.get(log).send(`:tada: <@${sahip}> adlı kişinin <@${botisim}> adlı botu onaylandı. Onaylayan yetkili : ${message.author}`);
		message.channel.send(`:white_check_mark: Botu onayladınız.`).then(x => x.delete({timeout: 3000}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 3
};

exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};
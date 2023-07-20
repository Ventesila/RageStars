const Discord = require('discord.js');//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = function(client, message, args) {
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!message.member.roles.cache.has("1042023961858416680"))  return message.channel.send(`:x: Bu komutu kullanabilmek için "\`BotList Yetkili\`" yetkisine sahip olmalısın.`);
	let botisim = args[0]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sahip = args[1]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep = args[2]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep1 = args[3]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep2 = args[4]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep3 = args[5]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep4 = args[6]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep5 = args[7]//Rache Code //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5, Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep6 = args[8]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep7 = args[9]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep8 = args[10]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let sebep9 = args[11]//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
	let log = "774208316791455775" // Bot Eklendi / Onaylandı / Rededildi Kanalı
	//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
	if (!botisim) return message.channel.send(`:x: Botun idsini yazmalısın.`).then(x => x.delete({timeout: 3000}))//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!sebep) return message.channel.send(`:x: Botu neden onaylamadığını yazmalısın.`).then(x => x.delete({timeout: 3000}))//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    if (!sahip) return message.channel.send(`:x: Bot Sahibi id yazman lazım.`).then(x => x.delete({timeout: 3000}))
  message.delete()//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
		client.channels.cache.get(log).send(`:x: <@${sahip}> adlı kişini <@${botisim}> adlı botu reddedildi. Sebep : ${sebep}  Reddeden yetkili : ${message.author}`);
		message.channel.send(`:white_check_mark: Botu reddettiniz.`).then(x => x.delete({timeout: 3000}))
};
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  enabled: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: false,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['bot-reddet', 'reddet'],//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  permLevel: 3//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'botreddet', //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
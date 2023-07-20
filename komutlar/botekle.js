const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let botid = args[0];
  let prefix = args[1];

  let basvuruKanalID = "1131671874703732847"; // Başvurunun gideceği kanal
  let basvuruKanal = client.channels.cache.get(basvuruKanalID);

  let kanalID = "1042019378172022855"; // Başvurunun yapıldığı kanal
  let kanal = client.channels.cache.get(kanalID);

  let logKanalID = "1042019379614863400"; // Bot Eklendi / Onaylandı / Rededildi Kanalı
  let logKanal = client.channels.cache.get(logKanalID);

  if (message.channel.id !== kanalID) {
    return message.channel.send(`Bu komutu sadece <#${kanalID}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}));
  }

  if (!botid) {
    return message.channel.send(`:x: Botunun ID'sini yazmalısın.`).then(x => x.delete({timeout: 30000}));
  }

  if (!prefix) {
    return message.channel.send(`:x: Botunun prefixini yazmalısın.`).then(x => x.delete({timeout: 30000}));
  }

  message.delete();

  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
    .setTitle("Bot Ekletme")
    .addField("Bot Sahibi", message.author.tag) // Düzeltilen kısım
    .addField("Bot ID", botid)
    .addField("Bot Prefix", prefix);

  basvuruKanal.send(embed);
  logKanal.send(`${message.author} adlı kullanıcının <@${botid}> adlı botu sıraya ekledi. Botu onaylanmayı bekliyor.`);
  message.channel.send(`:white_check_mark: Bot ekleme isteğiniz alındı.`).then(x => x.delete({timeout: 3000}));
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

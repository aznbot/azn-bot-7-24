const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  'Botumuzun özelliklerini öğrenmek için ?yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  '?uyarı komutunu kullanın.',
  '',
  `TigerARMY resmi sunucusu : https://discord.gg/Rdqtxv5`,
  `**Tigers'® sunucusu** https://discord.gg/Rdqtxv5`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + ' |?yardım | ' + client.guilds.size + ' sunucu, | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcıya sahibim! TEŞEKKÜRLER AZN!');
})

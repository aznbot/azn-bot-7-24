const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: AZN efendimizin botu aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
client.user.setGame(" "Merhaba arkadaş. Merhaba arkadaş. Çok ezikçe. Belki sana bir isim vermeliyim ama bu çok saçma olur. Sen sadece bir düşüncesin, bunu unutmamaliyiz. Siktir, bu gerçekten oldu. Hayali bir insanla konuşuyorum. Size anlatacağım şey çok gizli, hepimizi aşan bir komplo. Dışarıda dünyayı yöneten güçlü insanlardan oluşan gizli bir grup var. Size şimdi, görünmez ve hakkında hiç bir şey bilinmeyen insanlardan bahsedeceğim. %1'in üstündeki %1'e sahip, izne gerek duymadan tanrıyı oynayan insanlardan. Ve şimdi de sanırım beni takip ediyorlar."", "https://twitch.tv/scarew0");
}

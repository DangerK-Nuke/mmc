const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
    message.delete()
    if (!message.member.roles.find("name", "⌭  Abone Transmitter")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** Abone Transmitter **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
    let toabone = message.guild.member(message.mentions.users.first());
    let abonerole = message.guild.roles.find(`name`, "⌭  v12 İnvite Manager Altyapı");
    if (!abonerole) return message.reply("Rol Bulunamadı Lütfen 'İnvite Manger' Adıyla Rol Oluşturunuz.");
    if (!toabone) return message.reply("Bir Kullanıcı Etiketleyin.");
    await (toabone.addRole(abonerole.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let aboneembed = new Discord.RichEmbed()
        .setTitle("<a:bildiri:770588596942929921> ・ v12 İnvite Manager Altyapı Rolü Verildi")
        .setColor('BLUE')
        .addField("<a:yumuakok:770591161672531978> ・ v12 İnvite Manager Altyapı Rolü Veren Yetkili", `${message.author.tag}`, true)
        .addField("<a:yumuakok:770591161672531978> ・ v12 İnvite Manager Altyapı Rolü Alan Kullanıcı", `${vUser}`, true)
       .setTimestamp();
    let abonelog = message.guild.channels.find(`name`, "📷︲galeri");
      if (!abonelog) return message.channel.send("Kayıt Log Kanalı bulunamadı.`");
    abonelog.send(aboneembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite-ver','invite'],
};
exports.help = {
  name: 'i',
  description: 'Kayıt etme komutu',
  usage: 'a'
};  
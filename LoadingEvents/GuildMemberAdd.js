const Database = require("../Models/Restriction.js");
const client = process.client;
const auth = require("../authorization.json");
const { MessageAttachment, WebhookClient , MessageEmbed} = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");


class Uye {
  constructor(uye) {
    this.uye = uye;
  }  
  
  async Hoşgeldin(uye) {
    let  nixses1 = this.uye.guild.channels.cache.get("848920654052327468")
    let  nixses2 = this.uye.guild.channels.cache.get("848920654052327469")
    let  nixses3 = this.uye.guild.channels.cache.get("848920654052327470")
    let  nixses4 = this.uye.guild.channels.cache.get("848920654052327472")
    let  nixses5 = this.uye.guild.channels.cache.get("848920654052327473")
    
    var dizi = [`${ nixses1.members.size}`, `${ nixses2.members.size}`, `${ nixses3.members.size}`, `${ nixses4.members.size}`, , `${ nixses5.members.size}`]
    
    var kanalenbuyuk = dizi.reduce( (acc, mevcut) => { return (acc < mevcut ? mevcut :acc) });
    
    let nixseskanallar;
    if( nixses1.members.size == kanalenbuyuk) nixseskanallar =  nixses1; else
    if( nixses2.members.size == kanalenbuyuk) nixseskanallar =  nixses2; else
    if( nixses3.members.size == kanalenbuyuk) nixseskanallar =  nixses3; else
    if( nixses4.members.size == kanalenbuyuk) nixseskanallar =  nixses4; else
    if( nixses5.members.size == kanalenbuyuk) nixseskanallar =  nixses5;     
    
    const CezaList = await Database.find({ userID: this.uye.id, Activity: true});
    let sure = (new Date().getTime() - this.uye.user.createdAt.getTime());
     if ((CezaList) && (CezaList.some(x  => x.Type === "JAIL"))) return this.uye.roles.add(auth.CezaRoles.JailRoles).catch(() => { });
     if ((CezaList) && (CezaList.some(x  => x.Type === "BAN"))) return this.uye.ban({reason: "Forbidden Member"});
     if (sure >= client.getDate(1, "hafta")) {
       await this.uye.roles.add(auth.Perms.Unregister).catch(() => { });
       if ((this.uye.user.username.includes(auth.Tags.RealTag)) && (auth.Tags.RealTag !== "")) this.uye.roles.add(auth.Tags.TagRol).catch(() => { });
       if ((CezaList) && (CezaList.some(x  => x.Type === "MUTE"))) return this.uye.roles.add(auth.CezaRoles.MuteRoles).catch(() => { });
       client.message(`:tada: **${this.uye.guild.name}**'ya hoş geldin ${this.uye.user.toString()}!
      
Hesabın **${moment(this.uye.user.createdAt).format('LLL')}** (${client.tarih(this.uye.user.createdAt)}) tarihinde oluşturulmuş.

Sunucu kurallarımız <#${auth.GuildData.Chats.Kurallar}> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.

  Seninle beraber **${this.uye.guild.memberCount}** kişiye ulaştık! Kayıt olmak için ${nixseskanallar} odasına girerek kayıt işlemini gerçekleştirebilirsin.`, auth.GuildData.Chats.KayıtChat);
    } else { // Etkinlik ve Çekilişlerimizden haberdar olmak için <#${auth.Logs.RolAlma}> kanalından rollerini almayı unutma!
// Tagımızı (\`${auth.Tags.RealTag}\`) alarak bizlere destek olabilirsin! 
       await this.uye.roles.add(auth.CezaRoles.Karantina).catch(() => { });
       client.message(new MessageEmbed().setDescription(`${this.uye.user.toString()} - \`${this.uye.id}\` üyesi sunucuya katıldı fakat hesabı \`${moment(this.uye.user.createdAt).format('LLL')}\` (${client.tarih(this.uye.user.createdAt)}) tarihinde açıldığı için <@&${auth.CezaRoles.Karantina}> rolü verildi!`)
       .setAuthor(this.uye.user.tag, this.uye.user.displayAvatarURL({dynamic: true}))
       .setColor('#460707')
       .setThumbnail(this.uye.guild.iconURL({ dynamic: true })), auth.GuildData.KayıtChat);
    }
  }
}

async function Welcome(uye) {
  let welcome = new Uye(uye);
  await welcome.Hoşgeldin();
};

module.exports.event = {
  name: "guildMemberAdd", 
  eventOn: uye => Welcome(uye)
};
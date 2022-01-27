module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js")) => {
  if ((!author.roles.cache.some(r => auth.Perms.TalentAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
msg.channel.send({embed: { 
color: client.renk[Math.floor(Math.random() * client.renk.length)],
author: { name: msg.member.user.tag, icon_url:  msg.member.user.displayAvatarURL({dynamic:true}) }, 
description: `**Rol Yardım Menüsü**
Öncelikle bir rol vermek istiyorsanız <@&${auth.Perms.TalentAuth[0]}> rolüne sahip olmanız gerekiyor. Bu komut sayesinde aşağıdaki rolleri kullanıcılara verebilirsiniz.
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

<@&${auth.Talent.Streamer}>: \`.streamer [@Nîx]\`
<@&${auth.Talent.StreamerCezalı}>: \`.streamercezalı [@Nîx]\`
<@&${auth.Talent.Vokal}>: \`.vokal [@Nîx]\`
<@&${auth.Talent.Ressam}>: \`.ressam [@Nîx]\`
<@&${auth.Talent.Şair}>: \`.şair [@Nîx]\`
<@&${auth.Talent.YazTas}>: \`.yazılım [@Nîx]\`
<@&${auth.Talent.VoiceActor}>: \`.voiceaktor [@Nîx]\`
<@&${auth.Talent.GoLive}>: \`.golive [@Nîx]\`
<@&${auth.Talent.Muzisyen}>: \`.müzisyen [@Nîx]\`
`,}});
};
  
module.exports.help = {
  name: "ayardım",
  alias: ["abilityyardım","rolyardım","rolyardim","rol-yardım"]
};

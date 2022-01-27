const client = process.client;
const auth = require("../authorization.json");

class Ready {
  constructor(guild) {
    this.guild = guild;
  }
  
  kur() {
     client.user.setActivity("Nîx? 💜 Rîx?");
    console.log("("+client.user.username +") adlı hesapta [" +this.guild.name+"] adlı sunucuda giriş yapıldı.");
  }
}

async function ready() {
  let readyy = new Ready(client.guilds.cache.get(auth.GuildData.GuildID));
  await readyy.kur();
};

module.exports.event = {
  name: "ready",
  eventOn: () => ready()
};
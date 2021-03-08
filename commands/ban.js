const { MessageEmbed, User } = require("discord.js");

module.exports = {
    name: 'ban',
    description: "this bans the person who is pinged!",
    execute: (client, message, args) => {

      
      if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({ embed: {
        
        description: `You Don't have enough permissions`,
        color: 1310975
      }});

const member = message.mentions.members.first()
if(!member) return message.channel.send({ embed: {
  description: `Please Mention A Member`,
  color: 1310975
  
} 
});
if(member){
    const user = message.mentions.users.first();
    guild.members.ban(user);
  let Embed = new MessageEmbed()
  {
    Embed.setDescription(`${member} Has Been Ban`)
    return message.channel.send(Embed)
    

  }
 



}
if (!mentionedMember.bannable) return message.channel.send("I cannot ban that user.");
}
}
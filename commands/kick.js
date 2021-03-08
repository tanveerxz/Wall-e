  const { MessageEmbed, User } = require("discord.js");

  module.exports = {
      name: 'kick',
      description: "this kicks the person who is pinged!",
      execute: (client, message, args) => {

        
        if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send({ embed: {
          
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
    const memberTarger = message.guild.members.cache.get(member.id);
    member.kick();
    let Embed = new MessageEmbed()
    {
      Embed.setDescription(`${member} Has Been Kicked`)
      return message.channel.send(Embed)
      .catch((error) =>{
        message.channel.send("I couldn't kick that person");
        throw error;
    })
  }
  
  
  
  }
  if (!mentionedMember.kickable) return message.channel.send("I cannot kick that user.");
      }}
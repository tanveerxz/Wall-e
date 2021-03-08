const { MessageEmbed, User } = require("discord.js");

module.exports = {
    name: 'banone',
    description: "this bans the person who is pinged!",
    execute: (client, message, args) => {
        
        if (message.member.hasPermission('BAN_MEMBERS')) {
            const userBan = message.mentions.users.first();


            if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({ embed: {
        
                description: `You Don't have enough permissions`,
                color: 1310975
              }});
	if(!member)return message.channel.send({ embed: {
        
        description: `please Mention a member`,
        color: 1310975
      }});
      if (userBan) {
        var member = message.guild.member(userBan);

        if (member) {
            member.ban({
                reason: 'you broke the rules.'
            }).then(() => {
                message.reply(`${userBan.tag} was banned from the server!`)
            })



    }else {
        message.reply('Hey.. you cannot use that command!')
    }
}}}}
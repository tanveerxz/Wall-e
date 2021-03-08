        const { MessageEmbed, User } = require("discord.js");

        module.exports = {
            name: 'mute',
            description: "this mutes the person who is pinged!",
            execute: (client, message, args) => { 
                if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send({ embed: {
                    description: `You Don't have enough permissions`,
                    color: 1310975
                    
                } 
            });
                let member = message.mentions.members.first();
                if(!member) return message.channel.send({ embed: {
                    description: `Please Mention A Member`,
                    color: 1310975
                    
                } 
            });
            var guild = message.guild
            const role = guild.roles.cache.find(role => role.name === 'Muted');
            member.roles.add(role);
            return message.channel.send({ embed: {
                description: `${User} has been Muted`,
                color: 1310975
            }})}};
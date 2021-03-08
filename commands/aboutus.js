const{MessageEmbed} = require('discord.js')
module.exports = {
    name:"aboutus",
    description:"this shows the server'S rules",
    execute:(clinet, message, args)=>{
        let Embed = new MessageEmbed()
        Embed.setDescription("**__Bot Developers Hub"),
        Embed.setImage("");
        message.channel.send(Embed)
        }}
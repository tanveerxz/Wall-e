const{MessageEmbed} = require('discord.js')
module.exports = {
    name:"owner",
    description:"this shows the server'S rules",
    execute:(clinet, message, args)=>{
        let Embed = new MessageEmbed()
        Embed.setDescription("**__My Owner Is__\n\n Tanveer252#9999***"),
        Embed.setImage("");
        message.channel.send(Embed)
        }}
    module.exports = {
        name: 'helpmusic',
        description: "",
        execute: (client, message, args, Discord) => { 

        const Embed = new Discord.MessageEmbed()
        Embed.setTitle(`WALL-E Bot Help`)
        Embed.setThumbnail(`https://images-ext-2.discordapp.net/external/Imga-qjOml7YRJTCykGz0GG4iLhZvJJS4XcYbL4CtVs/https/cdn.discordapp.com/avatars/813133704401518602/48828508c3042241326a9c89f94f2c9d.webp`)
        Embed.addFields({
            name: 'Play Command',
            value: `Use _play {song} To Listen To A Song`,
        },{
            name: 'Leave Commad',
            value: `Use _leave For The Bot To Leave The Voice Channel`,
        }
        )
        Embed.setDescription(`MORE COMMANDS COMING SOON!`)
        Embed.setFooter(`${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
        Embed.setTimestamp()

        message.channel.send(Embed)



        }}


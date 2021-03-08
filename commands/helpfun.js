module.exports = {
    name: 'helpfun',
    description: "",
    execute: (client, message, args, Discord) => { 

    const Embed = new Discord.MessageEmbed()
    Embed.setTitle(`WALL-E Bot Help`)
    Embed.setThumbnail(`https://images-ext-2.discordapp.net/external/Imga-qjOml7YRJTCykGz0GG4iLhZvJJS4XcYbL4CtVs/https/cdn.discordapp.com/avatars/813133704401518602/48828508c3042241326a9c89f94f2c9d.webp`)
    Embed.addFields({
        name: 'Avatar Command',
        value: `Use _av To View Your Or Someone Else's Avatar`,
    },{
        name: 'Ping Command',
        value: 'Use _ping To View The Latency And The API Latency Of The Bot',
    },{
        name: 'Say Command',
        value: 'Use _say {content} \n To Send A Msg Through The Bot',
    },{
        name: 'Minecraft Server Stats',
        value: 'Use _mcserver {server IP adress} {port} \n To Get The Stats Of A Minecraft Server',
    },{
        name: 'Server Info',
        value: `Use _serverinfo To View The Current Server'S Stats`,
    }
    )
    Embed.setFooter(`${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
    Embed.setTimestamp()

    message.channel.send(Embed)



    }}


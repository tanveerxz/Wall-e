module.exports = {
    name: 'nuke',
    description: 'get info abt a minecraft server',
    aliases: ['n'],
    execute: async(client, message, args, Discord) =>{
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send({embed:{
        description: `You don't have enough permissions to execute a command`}});

        if(!message.guild.me.hasPermission("MANAGE_CHANNELS"))return message.channel.send({embed:{
            description: `I don't have enough permissions to execute a command`}});

            let reason = args.join(" ");
            const nukeChannel = message.channel;


            if(!reason) reason = "no reason given";
            if(!nukeChannel.deletable)return message.channel.send({embed:{
                description: `This channel is not deletable`}});

                await nukeChannel.clone().catch(err => console.log(err));
                await nukeChannel.delete(reason).catch(err => console.log(err));
    }}
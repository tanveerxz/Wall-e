module.exports = async (client, message, args, Discord) => {
    client.snipes.set(message.channel.id , {
        content: message.content,
        author: message.author.tag,
        member: message.member,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
}
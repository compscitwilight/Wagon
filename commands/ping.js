const discordjs = require("discord.js")

module.exports = {
    Name: "ping",
    Description: "Returns the ping of the bot in milliseconds.",
    Category: "Utility",
    Usage: "ping",
    Permissions: [discordjs.Permissions.FLAGS.SEND_MESSAGES],
    Execute: (client, msg, args) => {
        msg.channel.send("Pong! " + client.ws.ping + "ms")
    }
}
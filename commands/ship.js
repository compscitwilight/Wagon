const discordjs = require("discord.js")

module.exports = {
    Name: "ship",
    Description: "Returns the percentage of compatibility between two people's names.",
    Category: "Fun",
    Usage: "ship <companion1> <companion2>",
    Permissions: [discordjs.Permissions.FLAGS.SEND_MESSAGES],
    Execute: (client, msg, args) => {
        const companion1 = args[1]
        const companion2 = args[2]

        if (!args[1] || !args[2]) {
            msg.channel.send("Please enter two people's names.")
            return
        }

        const percentage = Math.floor(Math.random() * 100)
        const bars = percentage / 10

        const embed = new discordjs.MessageEmbed()
            .setTitle("[ " + "❤️".repeat(bars) + "]")
            .setDescription(companion1 + " and " + companion2 + " are " + percentage + "% compatible.")
            .setColor("#ff404c")

        msg.channel.send({
            embeds: [embed]
        })
    }
}
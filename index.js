const discordjs = require("discord.js")
const fs = require("fs")
const config = require("./config.json")

const client = new discordjs.Client({ intents: [discordjs.Intents.FLAGS.GUILDS, discordjs.Intents.FLAGS.GUILD_MESSAGES] })

client.on("ready", () => {
    const logChannel = client.channels.cache.find(channel => channel.id == "984049209739202591")
    logChannel.send("Bot is online! : " + new Date().toUTCString())
})

client.on("messageCreate", (msg) => {
    if (!msg.content.startsWith(config.prefix)) return
    if (msg.author.bot) return

    const args = msg.content.split(/ +/g)
    const cmd = args[0].slice(config.prefix.length).toLowerCase()

    const path = "./commands/" + cmd + ".js"

    if (!fs.existsSync(path)) {
        msg.channel.send("Invalid command, run \"help\" for a list for commands")
        return
    }

    const command = require(path)
    const author = msg.member

    if (!author.permissions.has(command.Permissions)) {
        msg.channel.send("You do not have permission to use this command.")
        return
    }

    command.Execute(client, msg, args)
})

client.login(config.token)
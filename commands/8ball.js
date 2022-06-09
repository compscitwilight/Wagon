const discordjs = require("discord.js")
const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

module.exports = {
    Name: "8ball",
    Description: "Returns a random answer from the 8ball.",
    Category: "Fun",
    Usage: "8ball <question>",
    Permissions: [discordjs.Permissions.FLAGS.SEND_MESSAGES],
    Execute: (client, msg, args) => {
        if (!args[1]) {
            msg.channel.send("Please ask a question.")
            return
        }

        const answer = answers[Math.floor(Math.random() * answers.length)]
        msg.channel.send(answer)
    }
}
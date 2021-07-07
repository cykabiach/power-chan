module.exports = {
    name: 'alc',
    description: "Cyka's anilist challenge",
    execute(message, args) {
        message.reply("Today's badge: Throwback Thursday#3 - [8/7/21] is:");
        message.channel.send("https://media.giphy.com/media/9nEx6fOnowpsHe4eqb/giphy.gif");
        message.channel.send("**FROM:**");
        message.channel.send("https://anilist.co/anime/21/One-Piece/");

    }
}
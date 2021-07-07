module.exports = {
    name: 'kick',
    description: "Command to kick someone out",
    execute(message, args) {
        if(message.member.roles.cache.has('862218784432848896')){
            const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("Be grateful Kobeni's car wasnt around.");

        } else {
            message.channel.send("mention someone or you're next");
        }} else {message.channel.send ("How dare you dictate terms to me, filthy peasant!");

        }

        
    }

}
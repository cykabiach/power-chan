module.exports = {
    name: 'ban',
    description: "Command to ban someone out",
    execute(message, args) {
        if(message.member.roles.cache.has('862218784432848896')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send("Welp, atleast they tasted delicious :soup: ");
    
            } else {
                message.channel.send("mention someone or I'll impose a 100% tax");
      
        } 

        } else {message.channel.send ("How dare you dictate terms to me, lowly creature!");}

    }

}
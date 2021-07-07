module.exports = {
    name: 'kill',
    description: "kill someone",
    execute(message, args) {
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'peasant');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'killed');

            let memberTarget = message.guild.members.cache.get(target.id);
            if(!args[1]){      
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.reply(`${target} was killed`);
                message.channel.send("https://media.tenor.com/images/2d41b9b8e64d4da2271d54c50c0e5f38/tenor.gif");
                return
            } 

        } else {
            message.reply("Who am I supposed to kill again?");
        }
        
    }
}
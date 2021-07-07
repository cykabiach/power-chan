module.exports = {
    name: 'revive',
    description: "revive someone",
    execute(message, args) {
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'peasant');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'killed');

            let memberTarget = message.guild.members.cache.get(target.id);
            if(!args[1]){      
                memberTarget.roles.add(mainRole.id);
                memberTarget.roles.remove(muteRole.id);
                message.reply(`${target} was revived`);
                message.channel.send("https://pbs.twimg.com/media/E4femXCXIBc8bNg.jpg");
                return
            } 

        } else {    
            message.reply("Who am I supposed to revive again?");
        }
        
    }
}


module.exports = {
    name: 'youtube',
    description: "this is a CSM trailer command",
    execute(message, args){
        if(message.member.roles.cache.has('862006848742490154')){
            message.channel.send('https://www.youtube.com/watch?v=eyonP1AgC0k');
        } else { message.channel.send('A creature lower than peasant?! By speaking to Power you have increased your standing in this server, you are now a peasant.');
        message.member.roles.add('862006848742490154').catch(console.error);
    }

        
    }
}
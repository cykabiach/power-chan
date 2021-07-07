module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){

        
        if(message.member.roles.cache.has('862006848742490154')){
            message.channel.send('pong!');
        } else {
                message.channel.send('A creature lower than peasant?! By speaking to Power you have increased your standing in this server, you are now a peasant.');
                message.member.roles.add('862006848742490154').catch(console.error);
            }
        }
        
    } 

const ms = require('ms');
module.exports = {
    name: 'shun',
    description: "mute members",
    async execute(message, args) {
        if(message.member.roles.cache.has('862218784432848896')){
            const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'peasant');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'shunned');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){      
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(' Shunned for their lowly behaviour, should have fed them veggies instead');
                return
            }

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`Shunned for their lowly behaviour, should have fed them veggies instead. Dont worry though, they will be back in ${ms(ms(args[1]))}`);
            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));

        } else {
            message.channel.send('I was really looking forward to shutting someone up, maybe mention a real user next time?');
        }}
        else {message.channel.send ("How dare you dictate terms to me, scum of earth!");

        }
        



    }


}
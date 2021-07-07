module.exports = {
    name: 'unshun',
    description: "unmute members",
    async execute(message, args) {
        if(message.member.roles.cache.has('862218784432848896')){
            const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'peasant');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'shunned');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send('Guess I can feed them veggies now');

        } else {
            message.channel.send('Who do I feed veggies to again?');
        }}
        else {message.channel.send ("How dare you dictate terms to me, you absolute waste of space!");

        }
        



    }
}
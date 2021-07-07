const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'powy ';

const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('power-chan is online!');
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'peasant');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('862253911703289866').send(`A being lower than a peasant?! Now that youve spoken to Power, you are now a peasant. Rejoice! <@${guildMember.user.id}>`);
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command == 'lesbian') {
        client.commands.get('lesbian').execute(message, args);
    }
    if(command == 'revive') {
        client.commands.get('revive').execute(message, args);
    }
    if(command == 'kill') {
        client.commands.get('kill').execute(message, args);
    }

    if(command == 'love') {
        client.commands.get('love').execute(message, args);
    }

    if(command == 'bigbren') {
        client.commands.get('bigbren').execute(message, args);
    }

    if(command == 'pat') {
        client.commands.get('pat').execute(message, args);
    }

    if(command == 'hug') {
        client.commands.get('hug').execute(message, args);
    }
   
    if(command == 'sad') {
        client.commands.get('sad').execute(message, args);
    }

    if(command == 'bongo') {
        client.commands.get('bongo').execute(message, args);
    }

    if(command == 'help2') {
        client.commands.get('help2').execute(message, args);
    }

    if(command == 'dance') {
        client.commands.get('dance').execute(message, args);
    }

    if(command == 'happy') {
        client.commands.get('happy').execute(message, args);
    }

    if(command == 'unshun') {
        client.commands.get('unshun').execute(message, args);
    }

    if(command == 'veggies') {
        client.commands.get('veggies').execute(message, args);
    }

    if(command == 'drive') {
        client.commands.get('drive').execute(message, args);
    }

    if(command == 'puke') {
        client.commands.get('puke').execute(message, args);
    }

    if(command == 'help') {
        client.commands.get('help').execute(message, args, Discord);
    }
    
    if(command == 'shun') {
        client.commands.get('shun').execute(message, args);
}
    if(command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    if(command === 'ban') {
        client.commands.get('ban').execute(message, args);
    }
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args, Discord);
    } else if (command == 'reddit'){
        client.commands.get('reddit').execute(message, args, Discord);
    } else if(command == 'horny') {
        client.commands.get('horny').execute(message, args);
    } else if(command == 'alc') {
        client.commands.get('alc').execute(message, args);

    
}
}); 



client.login('process.env.token');

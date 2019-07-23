const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg4MDE5NzY5MzEyMjgwNTg2.XP_CvA.ts4TZSklF18gHLmtkpyUOJce6OU';

const PREFIX = '!';

var version = '1.0.0';

var secondbot =  '`Name:SecondBot Version:1.0.0 Author:Ali.J#1612 License:ISC Discord.js:11.5.1 Main:index.js`';

var ahmed = 'واحد اسمه احميد';

var username = `${member}`;

const usedCommandRecently = new Set();

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('The Im not here Role', { type: 'PLAYING' }).catch(console.error);

})

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`Welcome to DrawIt server, ${member}, please read the Rules channel`)
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'website':
            message.channel.sendMessage('www.NordVPN.com')
            break;
        case 'info':
            if (args[1] === 'bot') {
                message.channel.sendMessage(secondbot)
            
            } else {
                message.channel.sendMessage('Invaild Args')
            }
            break;
        case 'clear':
            if (!args[1]) return message.reply('Error,please define second arg')
            message.channel.bulkDelete(args[1]);
            break;

        case 'embed':

            const embed = new Discord.RichEmbed()
                .setTitle('User Information')
                .addField('Player Name', message.author.username)
                .addField('Current Server', message.guild.name)
                .setColor(0x00FF93)
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);

        break;

        case 'ahmed':
            if (args[1] === 'algmal') {
                message.channel.sendMessage(ahmed)
            } else {
                message.channel.sendMessage('Invaild Args ya klb')
            }
            break;
    
        case 'slap':
            if (args[1] === username) {
                message.channel.sendMessage(`${author} slapped ${user}`)
            }
            break;

            
            
            case 'kick':

                const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('You have been kicked!').then(() => {
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply(" That user isn\'t in the this guild")
                }
            } else {
                message.reply('You need to specify a person!')
            }

        break;

        case 'cooldown':
            if(usedCommandRecently.has(message.author.id)){
                message.reply("You cannot use that command just yet wait anothor 30 seconds!");
            } else{
                message.reply('You are not on cooldown! This is a custom command!');
 
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                 usedCommandRecently.delete(message.author.id)
                }, 30000);
            }

        break;

    }
})
bot.login(token);
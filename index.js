const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzE5MjA0MzM5Mjk3NTUwNDA3.Xt0Bhw.5Mg_P33nXOrDHm7EyQceDO25P8g';

const channel = bot.channels.cache.get('719278771949142026');


bot.on('ready', () => {
    console.log('this bot is online!');
})

bot.on('message', message=>{

    msg = message.content.toLowerCase();

      if(msg != 'can'){
          if(message.channel.id === '719230147185868810'){
          if(message.member != 719204339297550407){
                message.delete();
          } 
      }
    }
});

bot.on('message', message =>{

    if (message.member.roles.cache.some(role => role.name === 'Behaviour Watch')){
        
    const channel = bot.channels.cache.get('719303755232706700')

    channel.send({embed: {
        author: {

        name: "BehaviorWatch - Alert",
        icon_url: bot.user.avatarURL

        },

        title: "A user with the behavior watch role sent a message:",
        description: message.content

    }})


    }

});


bot.login(token);
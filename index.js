const Keyv = require('keyv');

const keyv = new Keyv();
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!";
const channelMain = new Keyv('sqlite://path/to.sqlite');
Number('correct');
correct = 537;


function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
      


bot.on('message', message => {


    if(message.channel.id === '747178708439138486'){


        if(message.author.bot) return;

        if(isNaN(message.content, 10) === true){

            message.delete();

            return;

        }


        if(parseInt(message.content, 10) === correct){

            
            message.channel.send(`<@${message.author.id}> HAS WON THE GUESS THE NUMBER CONTEST!`);
            message.channel.send(`<@${message.author.id}> HAS WON THE GUESS THE NUMBER CONTEST!`);
            message.channel.send(`<@${message.author.id}> HAS WON THE GUESS THE NUMBER CONTEST!`);
            message.channel.send(`<@${message.author.id}> HAS WON THE GUESS THE NUMBER CONTEST!`)
             .then(() => message.pin());

            correct = randomNum(1, 1000);

            console.log(correct);
           
            
        }

        
    }

})

bot.on('message', message => {



    if (!message.content.startsWith(prefix) || message.author.bot) return;

    var args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if(command === "suggest"){

        var suggestion = args.join(",").replace(/,/g, " ");

        let embed = new Discord.MessageEmbed()
             .setColor('#0099ff')
             .setTitle(message.author.username + " suggests:")
             .setThumbnail(message.author.avatarURL())
             .setTimestamp()
             .setDescription(`${suggestion}`)
             .setFooter("React below if you like the suggestion!");


        channelMain.send(embed).then(sentEmbed => {
            sentEmbed.react("🔺")
            sentEmbed.react("🔻")
        })

    }



})


bot.on('message', message => {


    if(message.author.bot) return

    if(message.content.toLowerCase().includes('i-')){

        message.reply(`What do you mean "I-"? Is there something more? I need story! ||smh||`);

    }


})

 

bot.on("ready", () =>{

    bot.user.setActivity("yootoobe", {type: "WATCHING"});
    
});


keyv.on('error', err => console.error('Keyv connection error:', err));


bot.login(process.env.token);


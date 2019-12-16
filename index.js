const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NjU2MTgxNjQ1NDA5Mzg2NDk2.Xfe9bg.CSGv507Nx3CFOD_jjWa4qVpgUyk";

bot.on("ready", () => {
  console.log("Working!");
});

const prefix = "!"

const ytdl = require('ytdl-core');

const queue = new Map();

bot.once('reconnecting', () => {
	console.log('Reconnecting!');
});

bot.once('disconnect', () => {
	console.log('Disconnect!');
});


bot.on('message', async message => {
    if (message.author.bot) return;
    if (checkID(message.content)) {
        id = Number(message.content)
        playTaunt(message,id);
    }
});


function checkID(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

function playTaunt(msg, id) {
    if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('taunt/'+id+'.mp3');
            dispatcher.on('end', () => {
                dispatcher.end();
            })

            dispatcher.on('error', e => {
                console.log("error: ");
                console.log(e)
            });
        })
    }
}



bot.login(token);
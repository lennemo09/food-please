const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "YOUR TOKEN HERE";

bot.on("ready", () => {
    bot.user.setActivity('for food!pls', { type: 'WATCHING' })
    console.log("Working!");
});



const queue = new Map();

bot.once('reconnecting', () => {
	console.log('Reconnecting!');
});

bot.once('disconnect', () => {
	console.log('Disconnect!');
});


bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.content === "food!pls") {
        message.channel.send("Here are all the taunts I have right now:")
        message.channel.send(`1     Yes.    
    2     No.    
    3     Food please.    
    4     Wood please.    
    5     Gold please.    
    6     Stone please.    
    7     Ahh!    
    8     All hail, king of the losers!    
    9     Ooh!    
    10    I'll beat you back to Age of Empires.    
    11    (Herb laugh)    
    12    Ah! being rushed.    
    13    Sure, blame it on your ISP.    
    14    Start the game already!    
    15    Don't point that thing at me!    
    16    Enemy sighted!    
    17    It is good to be the king.    
    18    Monk! I need a monk!     
    19    Long time, no siege.    
    20    My granny could scrap better than that.      
    21    Nice town, I'll take it.      
    22    Quit touching me!       
    23    Raiding party!      
    24    Dadgum.      
    25    Eh, smite me.          
    26    The wonder, the wonder, the... no!         
    27    You played two hours to die like this?    
    28    Yeah, well, you should see the other guy.         
    29    Roggan.          
    30    Wololo.           
    31    Attack an enemy now.          
    32    Cease creating extra villagers.           
    33    Create extra villagers.           
    34    Build a navy.        
    35    Stop building a navy.          
    36    Wait for my signal to attack.         
    37    Build a wonder.         
    38    Give me your extra resources.           
    39    (Ally sound)           
    40    (Enemy sound)          
    41    (Neutral sound)    
    42    What age are you in?
    -----------------------------------------
    Non-AoE Sounds:
    43    Minecraft Hurt - OOF
    44    Tuturu
    45    Za Warudo!
    46    *Weeboo* Fck Yu
    47    *Weeboo* WOW~
    48    *Weeboo* Gud Joppu!
    49    *EKUSU KALIBAHHHHHHHHH!!!*
    50    BRUH
    51    *PepeLaugh* Oh no no no no
    52    OH CYKA BLYAT
    53    Roblox Death - OOF
    54    *Nut*
    55    Aw shit. Here we go again.`)
    
    message.channel.send(`
    56    Dota 2: 你气不气?
    57    Dota 2: Боже, ты посмотри вокруг, что происходит!
    58    Dota 2: Lakad Matatag, Normalin Normalin!
    59    Dota 2: Absolutely perfect.    
    60    Dota 2: 啊？队友呢？队友
    61    Deze Nuts
    62    I am. Inevitable.
    63    I'm Batman.
    64    Batman: I'm vengence. I am the night!
    69    Nice.
    70    Rude.
    71    LCT The world is a puzzle to solve.
    72    LCT Laugh
    73    LCT Khong Bach a.
    300   This. Is. SPARTA!`)
    }
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
    if (id > 300 || id < 1) {
        return
    } else {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('taunt/'+id+'.mp3');
                console.log("playing "+id+".mp3")
                dispatcher.on('end', () => {
                    dispatcher.end();
                })
    
                dispatcher.on('error', e => {
                    console.log("error: ");
                    console.log(e)
                });
            })
        } else {
            msg.channel.send('Must be in voice channel.')
        }
    }
    
}



bot.login(token);

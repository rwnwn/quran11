const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');
 
const prefix = '-' // ادممن بريفكس
 
 
const developers = ["489322902886547457"] // ايدي صاحب البوت
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(prefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
 
 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
});
 
function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('*' + str);
}
 
function pluck(array) {
    return array.map(function(item) { return item['name']; });
}
 
function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }
 
  }
 
 
var servers = {};
 
var q1 = "!quran 1"
 
var q2 = "!quran 2"
 
var q3 = "!quran 3"
 
var q4 = "!quran 4"
 
var q5 = "!quran 5"
 
var q6 = "!quran 6"
 
var q7 = "!quran 7"
 
var q8 = "!quran 8"
 
var q9 = "!quran 9"
 
var q10 = "!quran 10"
 
var q11 = "!quran 11"
 
var q12 = "!quran 12"
 
var q13 = "!quran 13"
 
var q14 = "!quran 14"
 
var q15 = "!quran 15"
 
var q16 = "!quran 16"
 
var q17 = "!quran 17"
 
var q18 = "!quran 18"
 
var q19 = "!quran 19"
 
var q20 = "!quran 20"
 
var q21 = "!quran 21"
 
var q22 = "!quran 22"
 
var q23 = "!quran 23"
 
var q24 = "!quran 24"
 
var q25 = "!quran 25"
 
 
function play(connection, message) {
    var server = servers[message.guild.id];
   
   server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));
 
    server.queue.shift();
 
    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}
 
client.on("ready", () => {
    console.log(`Quran bot is in ${client.guilds.size} servers `)
});
 
client.on("message", message => {
                        if (message.content === q1 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);  
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=E1Y0pDXNPu8', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
 
                        if (message.content === q2 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = ytdl('https://www.youtube.com/watch?v=IEC8wi6wpGg', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
 
                            if (message.content === q3 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = ytdl('https://www.youtube.com/watch?v=cjmh_-4VY9I', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
 
                            if (message.content === q4 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=L0s4ij88LTU', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
                              if (message.content === q5 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Je1QLnXRGjE', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
                                  if (message.content === q6 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=2Q--P6Fxyl0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
                                      if (message.content === q7 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=yM-nVWU0wfU', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q8 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=fw2ByWafkV0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q9 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=tuYP5JktEn0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q10 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=RGnYiavNAJI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q11 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=W7KqMe44aGo', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q12 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=hXVqZRX9FUM', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q13 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Up4iDBOjGU8', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q14 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=YwClCEV1AWA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q15 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=20-hBBasCGE', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q16 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=E4dbht9oza4', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q17 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=9QhMMkQ_VSg', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q18 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=UerpNxFxg0w', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q19 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=-ulcJ6m0euU', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q20 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=MMYT9P_OZUo', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q21 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=5OERHMfuI7E', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q22 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=VMSWdncvHqo', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q23 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=JrNFbjseBcg', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q24 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=9CN-31h_wK4', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q25 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=vSOl00Y-WDo', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
 
 
  if(message.content === "!stop" ) {
                var servers = {};
 
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
   
  }
 
 if(message.content === "server2quran") {
   message.channel.send(` QuranBot
شكرا لإستعمال البوت | Thanks You
 `)
 }
 
       
});
 
// by Abo khalil - صدقة جارية

client.login(process.env.BOT_TOKEN);

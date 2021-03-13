const Discord = require('discord.js'); // calls the discordjs library into our file
const { prefix, token } = require('./config.json'); //calls in my config file for sensitive/global data using destructuring
const client = new Discord.Client(); // create a new client to communicate the bot with

const users = [];

// anonymous function to let us know "once" the bot is ready
// happens once
client.once('ready', () => {
	console.log('Ready!');
});

//"on" a message sent, print the message to our console
client.on('message', message => {
    if (message.author.id === `798826154035118080`) return; //ignore the bot
    /* if (message.author.id === `450864245089763331`) {
        message.channel.send(`ike u dirty slut https://cdn.discordapp.com/attachments/440610043298316320/799116151245766676/ike_you_ignorant_slut.png`);
        return;
    } */
    

    console.log(message.content);
    let msgArray = message.content.toLowerCase().match(/\S+/g);
    console.log(msgArray);

    /* if(msgArray[0] == "move") {
        let mem = message.mentions.members.first();
        const chan = client.channels.find("name", vc)
            mem.setVoiceChannel(chan)
            .then(() => console.log(`Moved ${mem.displayName} to ${chan}`))
        .catch(console.error);
        }
    } */

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');

    /* If the first two words are 'mike ladder' in a message. */
    if(msgArray[0] == "mike" && msgArray[1] == "ladder") {
        
        if(msgArray.includes("<@!228691321122979850>")){
            return message.channel.send(`No bullying logan, jerk.`);
        }
        let members = message.mentions.members.array(); // collect all the mentioned members

        // grab the message timestamp for timeout immunity
        // check the users array to see if the user exists, last timestamp was > 10 minutes ago
        // add the user and the timestamp to the users array
        // remove the member from the members array if the timestamp was < 10 min ago

        let timestamp = Date.now();
        members.forEach((member, index) => {
            if (users.length != 0 && users.some(u => u.id === member.id)) {
                users.forEach((u, i) => console.log(`\n User: ${i} id: ${u.id}` ))

                let user = users.find(u => u.id == member.id);

                let diff = timestamp - user.lastTimestamp;

                if ( diff <= 600000) {
                    message.channel.send(`Immunity granted. Minutes remaining: ${(((600000 - diff)/60000)).toFixed(2)}`);
                    members.splice(index, 1);
                } else {
                    user.lastTimestamp == timestamp;
                }
            } else {
                let u = {id:member.id, lastTimestamp: timestamp};
                users.push(u)
            }
        })
        
        if (members.length == 0) {return;}

        // grab the original position of all mentioned members
        let membersOriginalPosition = members.map( (m) => {
            //console.log(m.voice.channelID);
            return m.voice.channel;
        });

        /* let x = msgArray.findIndex( (i) => i == "to") + 1;
        let channel = "";
        for(let i=x; i<msgArray.length; i++) {
            channel += msgArray[i];
        } */
        //now channel should be populated with the channel name

        /* //for each member mentioned
        members.forEach( (e) => {
            //set their voice channel to each of the voice channels in the server
            setTimeout(
                e.voice.setChannel(client.channels.cache. 
                , 2500)
        ); */

        //for each member mentioned
        //set their voice channel to each of the voice channels in the server
            //have a list of the voice channels of the server
            //cycle them through each other, with 3k ms timeouts
        
        voiceChannels.forEach( (v, i) => {
            members.forEach( (m) => {
                setTimeout( ()=> m.voice.setChannel(v), 1000);
                //console.log(" " + i + " " + m.voice.channelID);
            })
        })

        //console.log("Test " + members[0].voice.channelID);
        
        members.forEach( (m, i) => {
            //console.log("Before: " + m.voice.channelID);
            //console.log(membersOriginalPosition[i].id);
            m.voice.setChannel(membersOriginalPosition[i]);
            //console.log("After: " + m.voice.channelID);
        })
    }

    /* msgArray.every(token => {
        if(token == `bot`) {
            message.channel.send("u said " + message.content);
            
            return false;
        }
        return true;
    }); */

    /* Any message with 'bot'. */
    if(msgArray.includes("bb")) {
        message.channel.send(`<@${message.author.id}> you called?`);
    }

    if(message.content.toLowerCase() == "i love you") {
        message.channel.send(`i love u too <3`);
    }

    if (message.author.id === `228668215239245824`) {
        if(Math.random() < 0.25) {
            //message.channel.send(`<@${message.author.id}> yeah ian????`);
            message.channel.send(`yeah ian????`);
        }
        return;
    }

    if (message.author.id === `296076159492554754`) {
        if(Math.random() < 0.25) {
            //message.channel.send(`<@${message.author.id}> yeah ian????`);
            message.channel.send(`According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don’t care what humans think is impossible.” SEQ. 75 - “INTRO TO BARRY” INT. BENSON HOUSE - DAY ANGLE ON: Sneakers on the ground. Camera PANS UP to reveal BARRY BENSON’S BEDROOM ANGLE ON: Barry’s hand flipping through different sweaters in his closet. BARRY Yellow black, yellow black, yellow black, yellow black, yellow black, yellow black...oohh, black and yellow... ANGLE ON: Barry wearing the sweater he picked, looking in the mirror. BARRY (CONT’D) Yeah, let’s shake it up a little. He picks the black and yellow one. He then goes to the sink, takes the top off a CONTAINER OF HONEY, and puts some honey into his hair. He squirts some in his mouth and gargles. Then he takes the lid off the bottle, and rolls some on like deodorant. CUT TO: INT. BENSON HOUSE KITCHEN - CONTINUOUS Barry’s mother, JANET BENSON, yells up at Barry. JANET BENSON Barry, breakfast is ready! CUT TO: "Bee Movie" - JS REVISIONS 8/13/07 1. INT. BARRY’S ROOM - CONTINUOUS BARRY Coming! SFX: Phone RINGING. Barry’s antennae vibrate as they RING like a phone. Barry’s hands are wet. He looks around for a towel. BARRY (CONT’D) Hang on a second! He wipes his hands on his sweater, and pulls his antennae down to his ear and mouth. BARRY (CONT'D) Hello? His best friend, ADAM FLAYMAN, is on the other end. ADAM Barry? BARRY Adam? ADAM Can you believe this is happening? BARRY Can’t believe it. I’ll pick you up. Barry sticks his stinger in a sharpener. SFX: BUZZING AS HIS STINGER IS SHARPENED. He tests the sharpness with his finger. SFX: Bing. BARRY (CONT’D) Looking sharp.`);
            message.channel.send('also suck my toes billy');
        }
        return;
    }

    /* Random chance for ike's messages to spawn a photo. */
    if (message.author.id === `450864245089763331` || message.author.id === `138417094567002113`) {

        if(Math.random() == 0) {
            message.channel.send(`Mike is the sexiest out of all y'all.`);
            message.channel.send(`https://media.discordapp.net/attachments/695387851528863754/799117500020817920/Sombrero_Mike.png`);
        }

        return;
    }

    


    /* for(let token in msgArray) {
        console.log(msgArray.token);
        if(msgArray.token == "bot"){
            message.channel.send("u said " + message.content);
        }
    } */

    /* //if the message is "bot" then react
    if(message.content.startsWith("em")) {
        message.channel.send("`take off the socks em`");
    } else if (message.content.startsWith(prefix)) {
        message.channel.send("u said " + message.content);
    } */

    /* if(message.content.startsWith(prefix)) {
        //console.log(message.content);
        //console.log(message.content.match(/\S+/g));
        message.channel.send("u said " + message.content);
    } */
	
});





// login with ur bot token
client.login(token);

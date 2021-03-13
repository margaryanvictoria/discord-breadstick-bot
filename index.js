const fs = require('fs'); // node's file system
const Discord = require('discord.js'); // discord's js library
const { prefix, token } = require('./config.json'); // our secret or global variables

const client = new Discord.Client(); // create a discord connection
client.commands = new Discord.Collection(); // create a collection of commands attached to our client

// get all the javascript command files we created in the commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// load all of our command files and set them into our client.commands Collection
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	// other commands...
});

client.login(token);
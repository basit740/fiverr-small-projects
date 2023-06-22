const { Client, WebhookClient, Intents } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config({
	path: '.env',
});

const intents = new Intents();
intents.add(
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES
	// Add any other intents your bot requires
);

const client = new Client({
	intents: intents,
});
const token = process.env.BOT_TOKEN;

client.login(token);

// List servers and channels
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);

	const guilds = client.guilds.cache;
	guilds.forEach((guild) => {
		console.log(`Server: ${guild.name}`);
		console.log('Channels:');
		guild.channels.cache
			.filter((channel) => channel.type === 'text') // Only consider text channels
			.forEach((channel) => console.log(`- ${channel.name}`));
	});
});

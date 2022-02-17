const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./eve/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.login(process.env.DISCORD_TOKEN);
const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');

const Database = require('better-sqlite3');

class CustomClient extends Client {
    constructor() {
        super({ intents: [Intents.FLAGS.GUILDS] });
        this.commands = new Collection();
        this.databaseConnection = new Database('database.db', { verbose: console.log });
    }

    initializeEvents() {
        const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const event = require(`../events/${file}`);
            if (event.once) {
                super.once(event.name, (...args) => event.execute(...args));
            } else {
                super.on(event.name, (...args) => event.execute(...args));
            }
        }
    }

    initializeCommands() {
        const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            this.commands.set(command.data.name, command);
        }
    }
}

module.exports = CustomClient;
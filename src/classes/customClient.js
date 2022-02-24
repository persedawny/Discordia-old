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
        let eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

        for (let file of eventFiles) {
            let event = require(`../events/${file}`);

            if (event.once) {
                super.once(event.name, (...args) => event.execute(...args));
            } else {
                super.on(event.name, (...args) => event.execute(...args));
            }
        }
    }

    initializeCommands() {
        const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

        for (let file of commandFiles) {
            let command = require(`../commands/${file}`);
            this.commands.set(command.data.name, command);
        }
    }

    initializeAndStartCronJobs() {
        let jobFiles = fs.readdirSync('./src/cronjobs').filter(file => file.endsWith('.js'));

        for (const file of jobFiles) {
            let job = require(`../cronjobs/${file}`);
            new job().start();
        }
    }
}

module.exports = CustomClient;
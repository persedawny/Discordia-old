const CustomClient = require('../src/classes/customClient.js');
const DatabaseCreator = require('../src/db/databaseCreator');
const MorningCronJob = require('../src/cronjobs/morningCronJob');
const dotenv = require('dotenv');

dotenv.config();

const client = new CustomClient();
DatabaseCreator.CreateDatabase(client);

client.initializeEvents();
client.initializeCommands();
client.login(process.env.DISCORD_TOKEN);

new MorningCronJob().start();
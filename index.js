const CustomClient = require('./src/classes/customClient.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new CustomClient();

client.initializeEvents();
client.initializeCommands();
client.login(process.env.DISCORD_TOKEN);
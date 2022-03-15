import { CustomClient } from "./client/customClient";
const dotenv = require('dotenv');

dotenv.config();

var client = new CustomClient();
client.initializeEvents();
client.initializeCommands();
client.login(process.env.DISCORD_TOKEN);
client.initializeAndStartCronJobs();
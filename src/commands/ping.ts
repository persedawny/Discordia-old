import { SlashCommandBuilder } from "@discordjs/builders";
import { ICommand } from "../abstractions/ICommand";

export default class PingCommand implements ICommand {
	data: SlashCommandBuilder;

	constructor(){
		this.data = new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
	}

	async execute(interaction) {
		await interaction.reply('Pong!');
	};
};
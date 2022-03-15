import { SlashCommandBuilder } from "@discordjs/builders";
import { ICommand } from "../abstractions/iCommand";

export default class ServerCommand implements ICommand {
	data: SlashCommandBuilder;

	constructor(){
		this.data = new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with standard information of the current server.');
	}

	async execute(interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	}
};
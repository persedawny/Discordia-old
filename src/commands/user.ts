import { SlashCommandBuilder } from "@discordjs/builders";
import { ICommand } from "../abstractions/ICommand";

export default class UserCommand implements ICommand {
	data: SlashCommandBuilder;

	constructor(){
		this.data = new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with standard information of the current user.');
	}

	async execute(interaction) {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
};
import { SlashCommandBuilder } from "@discordjs/builders";
import { Message } from "discord.js";
import { ICommand } from "../abstractions/ICommand";

export default class implements ICommand {
    data: SlashCommandBuilder;

    constructor(){
        this.data = new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with standard information of the current user.'); 
    }

    execute(interaction: Message): void {
        interaction.reply("Help");
    }
}
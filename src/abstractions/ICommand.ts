import { SlashCommandBuilder } from "@discordjs/builders";
import { Message } from "discord.js";

export interface ICommand {
    data: SlashCommandBuilder;
    execute: (interaction: Message) => void;
}
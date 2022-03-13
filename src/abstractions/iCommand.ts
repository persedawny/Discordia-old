import { SlashCommandBuilder } from "@discordjs/builders";

export interface ICommand {
    data: SlashCommandBuilder
    execute: (interaction) => void;
}
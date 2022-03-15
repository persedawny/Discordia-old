import { SlashCommandBuilder } from "@discordjs/builders";
import { Message } from "discord.js";
import { CustomClient } from "../client/customClient";

export interface ICommand {
    data: SlashCommandBuilder;
    client: CustomClient;
    execute: (interaction: Message) => void;
}
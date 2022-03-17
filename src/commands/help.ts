import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageEmbed } from "discord.js";
import { ICommand } from "../abstractions/ICommand";
import { CustomClient } from "../client/customClient";

export default class implements ICommand {
    data: SlashCommandBuilder;
    client: CustomClient;
    isAdminOnly: boolean = false;

    constructor(client: CustomClient){
        this.data = new SlashCommandBuilder()
		    .setName('help')
		    .setDescription('Sends information of every known command.');

        this.client = client;
    }
    
    
    execute(interaction: CommandInteraction): void {
        // TODO: Embed maker in boilerplate?
        console.log(this.client.application);
        
        let exampleEmbed = new MessageEmbed()
        .setAuthor({ name: this.client.application.name })
        .setImage(this.client.application.icon)
        .setTimestamp();

        this.client.commands.forEach(command => {
            exampleEmbed.addField(command.data.name, command.data.description, true);
        });

        interaction.reply({ embeds: [exampleEmbed] });
    }
}
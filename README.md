# How to make a new database model
```typescript
import { BaseEntity } from "../../abstractions/baseEntity";

export default class extends BaseEntity { 
    text: string;
    
    constructor(){
        super("Test");
    }
}
```

All you need to do is make a new class in the database -> models folder.
The class should always extend ```BaseEntity```! And in the constuctor you will need to call the constructor of ```BaseEntity``` with the name of the table.
All the properties you give this class will be used while generating your new database table. This new class will automatically get generated the next time you run your bot.

# How to make a new cronjob
```typescript
import { CustomClient } from "../../client/customClient";
import { CustomCronJob } from "../customCronJob";

export default class extends CustomCronJob{
    constructor(client: CustomClient){
        super('00', '00', '9', () => {
            // Your code goes here
        })
    }
}
```

# How to make a new command
```typescript
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
        let exampleEmbed = new MessageEmbed()
        .setAuthor({ name: this.client.user.username, iconURL: this.client.user.avatarURL() })
        .setTimestamp()
        .setColor("#ADD8E6");

        this.client.commands.forEach(command => {
            let description = `${command.data.description}`;

            if(command.isAdminOnly){
                description += `\n[ADMIN ONLY]`
            }

            exampleEmbed.addField(command.data.name, description, true);
        });

        interaction.reply({ embeds: [exampleEmbed] });
    }
}
```
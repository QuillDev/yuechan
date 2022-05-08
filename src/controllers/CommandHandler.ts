import { HimeClient } from "../HimeClient";
import { Controller } from "./Controller";

export class CommandHandler extends  Controller {

    register(hime: HimeClient): Promise<void> {
        const {client, commands} = hime;

        client.on('interactionCreate', async (interaction) => {
            if(!interaction.isCommand()) return;
            
            const command = commands.get(interaction.commandName)
            if(!command) return;


            await command.init(hime, interaction);
        });

        return Promise.resolve();
    }

}
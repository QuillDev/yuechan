import { SlashCommandBuilder } from "@discordjs/builders";
import { RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import { Routes } from 'discord-api-types/v9'
import { Controller } from "../../@types/Controller";
import { HimeClient } from "../HimeClient";

export class CommandRegister extends Controller {

    //TODO: Remove in prod;
    private testGuild = process.env.TEST_GUILD;
    private clientID = process.env.CLIENT_ID;

    register = async (hime: HimeClient): Promise<any> => {
        const {commands, rest} = hime;

        const restCommands: RESTPostAPIApplicationCommandsJSONBody[] = []

            commands.forEach((command, _key, _map) => {
                const slash = command.setupSlashCommand(
                    new SlashCommandBuilder()
                    .setName(command.name)
                    .setDescription(command.description)
                );
                console.log(`Registering command ${command.name}`)
                restCommands.push(slash.toJSON());
            });

            //If we're in test mode
            if(this.testGuild && this.clientID){

                
                await rest.put(
                    Routes.applicationGuildCommands(this.clientID, this.testGuild),
                    {body: restCommands}
                )
                .then(() => console.log(`Registered ${commands.size} commands!`))
                .catch(console.error)
                return;
            }

        return;
    }

}
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { HimeClient } from "../HimeClient";

export abstract class Command{
    abstract get name(): string;
    abstract get description(): string;
    abstract init(hime: HimeClient, event: CommandInteraction): Promise<any>
    
    public setupSlashCommand(builder: SlashCommandBuilder): SlashCommandBuilder{
        return builder;
    }
}
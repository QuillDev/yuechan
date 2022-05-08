import { SlashCommandBuilder } from "@discordjs/builders";
import { HimeClient } from "../HimeClient";
export abstract class Controller{

    abstract register(hime: HimeClient) : Promise<any>
}
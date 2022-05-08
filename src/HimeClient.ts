import { REST } from "@discordjs/rest";
import { Client } from "discord.js";
import { Command } from "../@types/Command";
import { Controller } from "../@types/Controller";

export class HimeClient {
    public rest: REST;
    public commands: Map<string, Command> = new Map()
    
    constructor(public client: Client, private token: string){
        this.rest = new REST({version: '9'});
        this.rest.setToken(token);
    }

    login = async () => {
        await this.client.login(this.token);
    }

    registerCommand = (commands: Command[]) => {
        commands.forEach((command) => this.commands.set(command.name, command));
    }
    addController = (controllers: Controller[]) => {
        controllers.forEach((controller) => controller.register(this));
    }
}
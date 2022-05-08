import { CacheType, CommandInteraction } from "discord.js";
import { Command } from "../../@types/Command";
import { HimeClient } from "../HimeClient";

export class PingCommand extends Command {
    get name(): string {
        return 'ping';
    }
    get description(): string {
        return 'some bullshit command';
    }

    init = async (hime: HimeClient, event: CommandInteraction<CacheType>) => {
        await event.reply({content: 'ay yo?', ephemeral: true});
        console.log('l + ratio')

        return;
    }

}
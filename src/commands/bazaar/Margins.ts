import { CommandInteraction, CacheType, MessageEmbed } from "discord.js";
import { Command } from "../../../@types/Command";
import { HimeClient } from "../../HimeClient";
import { getBiggestGains } from "./HypixelAPI";

const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
});

export class Margins extends Command {
    
    get name(): string {
        return 'margins'
    }
    get description(): string {
        return 'gets largest bazaar gains 🚀'
    }
    init = async (hime: HimeClient, event: CommandInteraction<CacheType>) => {
        await event.reply('ユエは考えている!')
        const gains = await getBiggestGains()

        const embed = new MessageEmbed();
        embed.setTitle(`統計を見て！`)
        for(let idx = 0; idx < Math.min(10, gains.length); idx++){
            const item = gains[idx];
            embed.addFields(
                {name: item.id, value: `B/S: ${formatter.format(item.priceRatio)} | PPU: ${formatter.format(item.priceRatio)}`}
            )
        }

        await event.editReply({embeds: [embed]})
    }

}
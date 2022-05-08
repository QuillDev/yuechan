import { config } from 'dotenv'
import { Client, Intents } from 'discord.js'
import { HimeClient } from './src/HimeClient';
import { LoginController } from './src/controllers/listener/LoginController';
import { PingCommand } from './src/commands/PingCommand';
import { CommandHandler } from './src/controllers/CommandHandler';
import { Margins } from './src/commands/bazaar/Margins';
import { CommandRegister } from './src/controllers/CommandRegister';
config();

const token = process.env.DISCORD_TOKEN;
if(!token){
    throw 'Invalid Token Supplied!'
}

( async () => {
    const bot = new Client({intents: [Intents.FLAGS.GUILDS]});
    const client = new HimeClient(bot, token);

    client.addController([
        new LoginController(),
        new CommandHandler(),
    ]);
    //Post login controllers
    client.registerCommand([
        new PingCommand(),
        new Margins()
    ]);
    
    client.addController([new CommandRegister()])

    await client.login();
})();


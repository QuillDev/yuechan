import { HimeClient } from "../../HimeClient";
import { Controller } from "../Controller";

export class LoginController extends Controller {
    register({client}: HimeClient): Promise<any> {

        client.once('ready', () => {
            console.log(`Logged in as ${client?.user?.username} | ID: ${client?.application?.id}`);
        });

        return Promise.resolve();
    }
}
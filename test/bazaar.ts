import { getBiggestGains } from "../src/commands/bazaar/HypixelAPI";

(async () => {
    const data = await getBiggestGains();

    for(let idx = 0; idx < Math.min(20, data.length); idx++){
        console.log(data[idx]);
    }
})();
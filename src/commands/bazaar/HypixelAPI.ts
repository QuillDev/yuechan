import { BazaarMargin, BazaarResponse } from "../../../@types/hypixel/bazaar/BazaarTypes";

export const getBazaarData = async (): Promise<BazaarResponse> => {
    const json = await fetch('https://api.hypixel.net/skyblock/bazaar')
    .then((res: Response) => res.json())
    .catch(console.error);

    return { success: json['success'], lastUpdated: json['lastUpdated'], products: new Map(Object.entries(json['products']))}
}

export const getBiggestGains = async() => {
    const margins: BazaarMargin[] = [];

    (await getBazaarData()).products.forEach(({quick_status, product_id, buy_summary, sell_summary }, _k, _m) => {
        if(buy_summary.length == 0) return;
        if(sell_summary.length == 0) return;

        const curBuy = buy_summary[0].pricePerUnit;
        const curSell = sell_summary[0].pricePerUnit;

        const {buyPrice, sellPrice, buyOrders, sellOrders, buyMovingWeek, sellMovingWeek} = quick_status

        margins.push({
            id: product_id,
            priceRatio: (curBuy / curSell),
            ppu: curBuy - curSell,
            instantDemand: buyOrders / sellOrders,
            weekDemand: buyMovingWeek / sellMovingWeek,
            status: quick_status
        });
    });

    return margins.filter((it) => it.status.buyMovingWeek > 250000).sort((a, b) => b.priceRatio - a.priceRatio);
}
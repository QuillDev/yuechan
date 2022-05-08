export type BazaarResponse = {
    success: boolean,
    lastUpdated: number,
    products: Map<string, BazaarItemData>
}

export type BazaarItemData = {
    product_id: string;
    sell_summary: BazaarSummaryEntry[];
    buy_summary: BazaarSummaryEntry[];
    quick_status: BazaarQuickStatus;
}


export type BazaarSummaryEntry = {
    amount: number;
    pricePerUnit: number;
    orders: number;
}

export type BazaarQuickStatus = {
    productId: string;
    sellPrice: number;
    sellVolume: number;
    sellMovingWeek: number;
    sellOrders: number;
    buyPrice: number;
    buyVolume: number;
    buyMovingWeek: number;
    buyOrders: number;
}

export type BazaarMargin = {
    id: string,
    ppu: number,
    priceRatio: number,
    instantDemand: number,
    weekDemand: number,
    status: BazaarQuickStatus
}

import { getRepository } from "typeorm";
import { Stock } from "../../entities/Stock";

type StockUpdateRequest = {
    id: string;
    ticker: string;
    name: string;
    icon: string;
    type: string;
    sector: string;
    industry: string;
    market_cap: number;
    dividend_yield: number;
};

export class UpdateStockService {
    async execute({
        id,
        ticker,
        name,
        icon,
        type,
        sector,
        industry,
        market_cap,
        dividend_yield,
    }: StockUpdateRequest) {
        const repo = getRepository(Stock);

        const stock = await repo.findOne(id);

        if (!stock) {
            return new Error("Stock does not exists!");
        }

        stock.ticker = ticker ? ticker : stock.ticker;
        stock.name = name ? name : stock.name;
        stock.icon = icon ? icon : stock.icon;
        stock.type = type ? type : stock.type;
        stock.sector = sector ? sector : stock.sector;
        stock.industry = industry ? industry : stock.industry;
        stock.market_cap = market_cap ? market_cap : stock.market_cap;
        stock.dividend_yield = dividend_yield
            ? dividend_yield
            : stock.dividend_yield;

        await repo.save(stock);

        return stock;
    }
}

import { getRepository } from "typeorm";
import { Stock } from "../../entities/Stock";

type StockRequest = {
    ticker: string;
    name: string;
    icon: string;
    type: string;
    sector: string;
    industry: string;
    market_cap: number;
    dividend_yield: number;
};

export class CreateStockService {
    async execute({
        ticker,
        name,
        icon,
        type,
        sector,
        industry,
        market_cap,
        dividend_yield,
    }: StockRequest): Promise<Stock | Error> {
        const repo = getRepository(Stock);

        if (await repo.findOne({ ticker })) {
            return new Error("Stock already exists");
        }

        const stock = repo.create({
            ticker,
            name,
            icon,
            type,
            sector,
            industry,
            market_cap,
            dividend_yield,
        });

        await repo.save(stock);

        return stock;
    }
}

import { getRepository } from "typeorm";
import { Stock } from "../../entities/Stock";

export class GetAllStocksService {
    async execute() {
        const repo = getRepository(Stock);

        const stocks = await repo.find();

        return stocks;
    }
}

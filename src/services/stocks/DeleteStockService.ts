import { getRepository } from "typeorm";
import { Stock } from "../../entities/Stock";

export class DeleteStockService {
    async execute(id: string) {
        const repo = getRepository(Stock);

        if (!(await repo.findOne(id))) {
            return new Error("Stock does not exists!");
        }

        await repo.delete(id);
    }
}

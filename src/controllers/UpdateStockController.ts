import { Request, Response } from "express";
import { UpdateStockService } from "../services/stocks/UpdateStockService";

export class UpdateStockController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const {
            ticker,
            name,
            icon,
            type,
            sector,
            industry,
            market_cap,
            dividend_yield,
        } = request.body;

        const service = new UpdateStockService();

        const result = await service.execute({
            id,
            ticker,
            name,
            icon,
            type,
            sector,
            industry,
            market_cap,
            dividend_yield,
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}

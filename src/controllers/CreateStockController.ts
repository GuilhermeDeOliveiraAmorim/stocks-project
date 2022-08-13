import { Request, Response } from "express";
import { CreateStockService } from "../services/stocks/CreateStockService";

export class CreateStockController {
    async handle(request: Request, response: Response) {
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

        const service = new CreateStockService();

        const result = await service.execute({
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

import { Request, Response } from "express";
import { GetAllStocksService } from "../../services/stocks/GetAllStocksService";

export class GetAllStocksController {
    async handle(request: Request, response: Response) {
        const service = new GetAllStocksService();

        const stocks = await service.execute();

        return response.json(stocks);
    }
}

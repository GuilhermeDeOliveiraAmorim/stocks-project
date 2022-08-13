import { Request, Response } from "express";
import { DeleteStockService } from "../../services/stocks/DeleteStockService";

export class DeleteStockController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteStockService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}

import { Request, Response } from "express";
import { UpdateUserService } from "../../services/users/UpdateUserService";

export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { email, password } = request.body;

        const service = new UpdateUserService();

        const result = await service.execute({
            id,
            email,
            password,
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}

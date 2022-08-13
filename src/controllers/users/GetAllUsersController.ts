import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/users/GetAllUsersService";
import { jsonToCsv } from "../../util/csvToJson";

export class GetAllUsersController {
    async handle(request: Request, response: Response) {
        const service = new GetAllUsersService();

        const users = await service.execute();

        console.log(jsonToCsv);

        return response.json(users);
    }
}

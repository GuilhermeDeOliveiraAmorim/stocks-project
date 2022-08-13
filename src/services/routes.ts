import { Router } from "express";
import { CreateStockController } from "../controllers/stocks/CreateStockController";
import { DeleteStockController } from "../controllers/stocks/DeleteStockController";
import { GetAllStocksController } from "../controllers/stocks/GetAllStocksController";
import { UpdateStockController } from "../controllers/stocks/UpdateStockController";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { DeleteUserController } from "../controllers/users/DeleteUserController";
import { GetAllUsersController } from "../controllers/users/GetAllUsersController";
import { UpdateUserController } from "../controllers/users/UpdateUserController";

const routes = Router();

routes.get("/", (req, res) => {
    res.send("Hello investor!");
});

routes.post("/stocks", new CreateStockController().handle);
routes.get("/stocks", new GetAllStocksController().handle);
routes.delete("/stocks/:id", new DeleteStockController().handle);
routes.put("/stocks/:id", new UpdateStockController().handle);

routes.post("/users", new CreateUserController().handle);
routes.get("/users", new GetAllUsersController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);
routes.put("/users/:id", new UpdateUserController().handle);

export { routes };

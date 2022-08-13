import { Router } from "express";
import { CreateStockController } from "../controllers/CreateStockController";
import { DeleteStockController } from "../controllers/DeleteStockController";
import { GetAllStocksController } from "../controllers/GetAllStocksController";
import { UpdateStockController } from "../controllers/UpdateStockController";

const routes = Router();

routes.get("/", (req, res) => {
    res.send("Hello investor!");
});

routes.post("/stocks", new CreateStockController().handle);
routes.get("/stocks", new GetAllStocksController().handle);
routes.delete("/stocks/:id", new DeleteStockController().handle);
routes.put("/stocks/:id", new UpdateStockController().handle);

export { routes };

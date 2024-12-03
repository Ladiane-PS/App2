import { Router } from "express";
//import controllersMateriais from "./controllers/controllers.materiais.js";
import controllerUser from "./controllers/controller.user.js";

const router = Router();

// User..
router.post("/users/register", controllerUser.Inserir);

export default router;
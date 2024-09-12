import express from "express"
import HobbiesController from "../controllers/hobbiesController"

const routes = express.Router();

routes.get("/hobbies", HobbiesController.listarHobbies);
routes.get("/hobbies/:id", HobbiesController.listarHobbiePorId);
routes.post("/hobbies", HobbiesController.cadastrarHobbie);
routes.put("/hobbies/:id", HobbiesController.atualizarHobbie);
routes.delete("/hobbies/:id", HobbiesController.deletarHobbie);

export default routes;
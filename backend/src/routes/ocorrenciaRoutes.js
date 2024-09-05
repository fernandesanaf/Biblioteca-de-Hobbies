import express from "express"
import OcorrenciaController from "../controllers/ocorrenciaController.js"

const routes = express.Router();
console.log("rotas")
routes.get("/ocorrencias", OcorrenciaController.listarOcorrencias);
routes.get("/ocorrencia/:id", OcorrenciaController.listarOcorrenciaPorId);
routes.post("/ocorrencia", OcorrenciaController.cadastrarOcorrencia);
routes.put("/ocorrencia/:id", OcorrenciaController.atualizarOcorrencia)
routes.delete("/ocorrencia/:id", OcorrenciaController.deletarOcorrencia);

export default routes;
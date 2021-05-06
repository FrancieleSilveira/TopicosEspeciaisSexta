import { Router } from "express";
import {CicloController} from "../controllers/CicloController";

const router = Router();
const cicloController = new CicloController();

//Métodos HTTP -->
//GET  --> (cliente) Solicita um determinado recurso do servidor
//POST --> (cliente) Envia um recurso para o servidor
router.get("/ciclo/listar/", cicloController.listar); 
router.get("/ciclo/listar/:param1/:param2", cicloController.buscarOrId);
router.post("/ciclo/cadastrar", cicloController.cadastrar);

 export { router };
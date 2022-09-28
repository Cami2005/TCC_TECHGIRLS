import 'dotenv/config'

import loginController from './controller/loginController.js';
import produtoController from './controller/produtoController.js';
import categoria from './controller/categoriasController.js';
import tema from './controller/temaController.js'
import usuarioController from './controller/usuarioController.js'

import multer from "multer";
import cors from "cors"
import express from "express"

const server = express();
server.use(cors());
server.use(express.json());

server.use(loginController);
server.use(produtoController);
server.use(categoria);
server.use(tema);
server.use(usuarioController)
server.use(multer)


const PORT= process.env.PORT;
server.listen(PORT, () => console.log('API Subiu!!!' + PORT));
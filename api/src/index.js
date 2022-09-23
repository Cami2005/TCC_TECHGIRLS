import 'dotenv/config'

import loginController from '../src/controller/loginController.js';

import cors from "cors"
import express from "express"

const server =express();
server.use(cors());
server.use(express.json());

server.use(loginController);


const PORT= process.env.PORT;
server.listen(PORT, () => console.log('API Subiu!!!' + PORT));
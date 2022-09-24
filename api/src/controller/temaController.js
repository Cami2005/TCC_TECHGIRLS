import {listarTemas} from '../repository/tema.js' 
import { Router } from "express";
const server = Router();


server.get('/api/tema', async (req, resp) => {
    try {
        const linhas = await listarTemas();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;
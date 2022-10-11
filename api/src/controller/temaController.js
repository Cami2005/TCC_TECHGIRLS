import {EditarTema, inserirTema, listarTemas} from '../repository/tema.js' 
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

server.put('/api/tema/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const tema = req.body;

        const resposta = await EditarTema(id, tema);
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/api/tema', async (req, resp) => {
    try {
        const novoTema= req.body;
        const tema = await inserirTema(novoTema);

        resp.send(tema);

    } catch (err) {
        resp.status(404).send({
            erro: err.menssage
        })
        
    }
})
export default server;
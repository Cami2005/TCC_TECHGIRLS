import {DeletarTema, EditarTema, inserirTema, listarTemas} from '../../repository/tema.js' 
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

server.delete('/api/tema/:id', async (req, resp) => {
    try {
        const {id} = req.params;

        const resposta= await DeletarTema(id);
        
            resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;
import { Router } from "express"; 
import { inserirUsuario } from "../repository/usuarioRepository.js";

const server = Router(); 

server.post('/usuario', async (req, resp) => {
    try{
        const usuario = req.body;

        const novoUsuario = await inserirUsuario(usuario);
        if( novoUsuario != 1)
            throw new Error('Não foi possível inserir as informações do usuário')

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
   
})


export default server;
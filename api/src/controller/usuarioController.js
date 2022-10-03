import { Router } from "express"; 
import { inserirUsuario } from "../repository/usuarioRepository.js";

const server = Router(); 

server.post('/usuario', async (req, resp) => {
    try{
        const usuario = req.body;

        const novoUsuario = await inserirUsuario(usuario);
        if( !novoUsuario.id )
            throw new Error('Não foi possível inserir as informações do usuário - id');
        if( !novoUsuario.nome )
            throw new Error('Não foi possível inserir as informações do usuário - nome');
        if( !novoUsuario.telefone )
            throw new Error('Não foi possível inserir as informações do usuário - telefone');
        if( !novoUsuario.cpf )
            throw new Error('Não foi possível inserir as informações do usuário - cpf');
        if( !novoUsuario.rg )
            throw new Error('Não foi possível inserir as informações do usuário - rg');
        if( !novoUsuario.nascimento )
        throw new Error('Não foi possível inserir as informações do usuário - nascimento');

        resp.send(novoUsuario);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
   
})


export default server;
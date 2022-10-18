import { Router } from "express";
import { ListarProdutosInicio } from "../../repository/usuario/produtoRepository.js";

const server = Router();

server.get('/usuario/produto', async (req,resp) => {
    try {
        const resposta = await ListarProdutosInicio();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;
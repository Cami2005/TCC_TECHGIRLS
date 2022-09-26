import { inserirCor, inserirProduto, inserirTamanho, salvarImagem } from '../repository/produtoRepository.js';

import multer from 'multer';
import { Router } from 'express';

const server = Router();
const upload = multer({dest:'./storage/capaProduto'});

//inserir Produto
server.post('/produto', async (req,resp) => {
    try {
        const novoProduto = req.body;

        
        const produtoInserido = await inserirProduto(novoProduto);
        console.log(novoProduto);

        resp.send(produtoInserido);
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        })
    }
})


server.put('/produto/:id/imagem', upload.single("img"), async (req, resp) => {
    try {
        const {id} = req.params;

        const img = req.file.path;

        const resposta = await salvarImagem(id, img);

        console.log(resposta.affectedRows);

        resp.status(204).send();
    }
    catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

server.post('/cor', async (req,resp) => {
    try {
        const novaCor = req.body;

        if(!novaCor.nome)
            throw new Error('Nome do produto é obrigatório!');


        const corInserida = await inserirCor(novaCor);
        console.log(novaCor);

        resp.send(corInserida);
    
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        })
    }
})

server.post('/produto/tamanho', async (req,resp) => {
    try {
        const novoTamanho = req.body;

        if(!novoTamanho.descricao)
            throw new Error('Tamnaho do produto é obrigatório!');

        const tamanhoInserido = await inserirTamanho(novoTamanho);

        resp.send(tamanhoInserido);
    
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        })
    }
})




export default server;
import { inserirProduto } from '../repository/produtoRepository.js';

import multer from 'multer';
import { Router } from 'express';

const server = Router();
const upload = multer({ dest: 'storage/capaProduto'})

//inserir Produto
server.post('/produto', async (req,resp) => {
    try {
        const novoProduto = req.body;

        if(!novoProduto.nome)
            throw new Error('Nome do produto é obrigatório!');

        if(!novoProduto.preco)
            throw new Error('Valor do produto é obrigatório!');

        if(!novoProduto.descricao)
            throw new Error('Descrição do produto é obrigatória!');

        if(!novoProduto.disponivel)
            throw new Error('Descrição do produto é obrigatória!');

        const produtoInserido = await inserirProduto(novoProduto);
        console.log(novoProduto);

        resp.send(produtoInserido);
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        })
    }
})

//ALTERAR IMAGEM
server.put('/produto/:id/capa', upload.single('capa'), async (req,resp) => {
    try {
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem,id);
        if(resposta != 1)
        throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro : err.message
        })
    }
})

export default server;
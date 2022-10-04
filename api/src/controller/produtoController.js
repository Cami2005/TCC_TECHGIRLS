import { inserirCor, inserirProduto, inserirTamanho, salvarImagem, listarProduto, alterarProduto, removerProdutor, buscarPorNome, buscarPorCategoria, buscarPorTema } from '../repository/produtoRepository.js';

import multer from 'multer';
import { Router } from 'express';

const server = Router();
const upload = multer({dest:'./storage/produto'});

//inserir Produto
server.post('/produto', async (req,resp) => {
    try {
        const novoProduto = req.body;
        
        const produtoInserido = await inserirProduto(novoProduto);
        
        resp.send({
            id : produtoInserido});
    } 
    catch (err) {
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

server.put('/produto/imagem/:id', upload.array('imagens'), async (req, resp) => {
    try{
        const id = req.params.id;
        const imagens = req.files;

        for( const imagem of imagens) {
            await salvarImagem(id, imagem.path);
        }

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/produto/cor', async (req,resp) => {
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
        console.log(novoTamanho);

        resp.send(tamanhoInserido);
    } catch (err) {
        resp.status(400).send({
            erro: err.message 
        })
    }
})


server.get('/produto', async (req,resp) => {
    try {
        const resposta = await listarProduto();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put ('/produto/:id', async (req,resp) => {

	try {
		const { id } = req.params;
		const produto = req.body;

		if(!produto.nome) 
			throw new Error ('Nome do produto é obrigatório!');

	     if (!produto.tema) 
			throw new Error ('Tema do produto é obrigatório!');
		
        if(!produto.categoria) 
			throw new Error ('Categoria do produto é obrigatória!');
		
        if(!produto.preco) 
			throw new Error ('Preço do produto é obrigatório!');
		
        if(!produto.descricao) 
			throw new Error ('Descrição do produto é obrigatória!');
		if(produto.disponivel === undefined) 
			throw new Error ('Disponibilidade do produto é obrigatório!');

const resposta = await alterarProduto(id, produto);
if (resposta != 1)
            throw new Error('Produto não pode ser alterado');
        else
            resp.status(204).send();


} catch (err) { 
resp.status(400).send({
	erro: err.message
  
     })
   }
})

server.delete('/produto/:id', async (req,resp) => {
	try {
		const {id} = req.params;

		const resposta = await removerProdutor(id);
		if(resposta != 1)
			throw new Error('Produto não pode ser removido');
			resp.status(204).send();
		}

		catch (err) {
		resp.status(400).send ({
		  erro: err.message
			})
		   }
		})

        server.get('/produto/busca', async (req, resp) => {
            try {
                const { nome } = req.query;
                
                const resposta = await buscarPorNome(nome);
        
                if (resposta.length == 0)
                    resp.status(404).send([])
                else
                    resp.send(resposta);
            } catch (err) {
                resp.status(400).send({
                    erro: err.message
                })
            }
        })
        server.get('/filtro/tema', async (req,resp) => {

            try{
                const { nome } = req.query;
                const x = await buscarPorTema(nome);
                resp.send(x)
        
            } catch(err) {
                resp.status(400).send({
                    erro: err.message
                })
            }
        })

        server.get('/filtro/categoria', async (req,resp) => {

            try{
                const { nome } = req.query;
                const x = await buscarPorCategoria(nome);
                resp.send(x)
        
            } catch(err) {
                resp.status(400).send({
                    erro: err.message
                })
            }
        })

        server.get('/produto/tema', async (req,resp) => {

            try{
                const { nome } = req.query;
                const x = await filtrarPorTema(nome);
                resp.send(x)
        
            } catch(err) {
                console.log()
               
            }
        })

        server.get('/produto/categoria', async (req,resp) => {

            try{
                const { nome } = req.query;
                const y = await filtrarPorCategoria(nome);
                resp.send(y)
        
            } catch(err) {
                console.log()
               
            }
        })


        
export default server;
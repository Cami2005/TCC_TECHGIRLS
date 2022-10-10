import { Router } from "express"; 
import { alterarDadosCartao, alterarEndereco, Avaliacao, deletarCartao, deletarEndereco, Favoritos, inserirEndereco, inserirNovoCartao, inserirUsuario, listarAvaliacoes, listarEnderecos, listarFavoritos, listarTodosCartoes, removerProdutoFavoritos } from "../repository/usuarioRepository.js";

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

server.post('/endereco', async (req, resp) => {
            try {
              
                const endereco= req.body;
                
                const novoEndereco= await inserirEndereco(endereco);
                if(!novoEndereco.cep) {
                    throw new Error('Id não registrado');
                    };
                    if(!novoEndereco.residencia) {
                        throw new Error('Nome não registrado');
                    };
                    if(!novoEndereco.endereco) {
                        throw new Error('Tema não registrado');
                    };
                    if(!novoEndereco.bairro) {
                        throw new Error('Categoria não registrada');
                    };
                    if(!novoEndereco.estado) {
                        throw new Error('Preço não registrado')
                    }
                    if(!novoEndereco.uf) {
                            throw new Error('Descrição não registrada')
                    }
                    if(!novoEndereco.complemento) {
                        throw new Error('Descrição não registrada')
                }

            
                    resp.send(novoEndereco);

            } catch (err) {
                resp.status(404).send({
                    erro: err.message
                })
            }

})

server.get('/endereco', async (req, resp) => {
    try {
        const resposta = await listarEnderecos();
        resp.send(resposta);
    
    } catch (err) {
            resp.status(404).send ({
                erro: err.message
            })    
    }
})

server.put('/endereco/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const endereco = req.body;

        const resposta = await alterarEndereco(id, endereco);

        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            err: err.message
        })
    }
})

server.delete('/endereco/:id', async (req,resp) => {
    	try {
    		const {id} = req.params;
    
    		const resposta = await deletarEndereco(id);
    		if(resposta != 1)
    			throw new Error('Endereço não pode ser removido');
    			resp.status(204).send();
    		}
    
    		catch (err) {
    		resp.status(400).send ({
    		  erro: err.message
    			})
    		   }
    		})

            server.post('/cartao', async (req, resp) => {
                try {
                  
                    const cartao= req.body;
                    
                    const novoCartao= await inserirNovoCartao(cartao);
                    if(!novoCartao.numero) {
                        throw new Error('Id não registrado');
                        };
                        if(!novoCartao.validade) {
                            throw new Error('Nome não registrado');
                        };
                        if(!novoCartao.codigo) {
                            throw new Error('Tema não registrado');
                        };
                        if(!novoCartao.cpf) {
                            throw new Error('Categoria não registrada');
                        };

    
                
                        resp.send(novoCartao);
    
                } catch (err) {
                    resp.status(404).send({
                        erro: err.message
                    })
                }
    
    })

server.get('/cartao', async (req, resp) => {
    try {
        const resposta = await listarTodosCartoes();
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})
    
server.put('/cartao/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const cartao = req.body;

        const resposta = await alterarDadosCartao(id, cartao);

        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            err: err.message
        })
    }
})

server.delete('/cartao/:id', async (req, resp) => {
    try {
        const {id} = req.params;

        const resposta = await deletarCartao(id);
        if(resposta != 1)
            throw new Error('Cartão não pode ser removido');
            resp.status(204).send();

    } catch (error) {
        resp.status(400).send ({
            erro: err.message
        })
    }
})

server.post('/usuario/avaliacao', async (req, resp) => {
    try {
        const novaAvaliacao = req.body;
        const avaliacao = await Avaliacao(novaAvaliacao);
        
        if(!avaliacao.produto) {
            throw new Error('produto não registrado');
            };
            if(!avaliacao.usuario) {
                throw new Error('Usuario não registrado');
            };
            if(!avaliacao.nota) {
                throw new Error('Nota não registrada');
            };
            if(!avaliacao.comentario) {
                throw new Error('Comentario não registrado');
            };
            if(!avaliacao.data) {
                throw new Error('data não registrado')
            }

        resp.send(avaliacao);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/usuario/avaliacao', async (req, resp) => {
    try {
        const resposta = await listarAvaliacoes();
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.menssage
        })
    }
})

server.post('/usuario/favorito', async (req, resp) => {
    try {
        const novoFavorito = req.body;
        const favorito = await Favoritos(novoFavorito);
        resp.send(favorito);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.delete('/favorito/:id', async (req,resp) => {

    try {
        const { id } = req.params;
        const resposta = await removerProdutoFavoritos(id);
        
        if (resposta !=1)
            throw new Error('Favorito não pode ser removido');

        resp.status(204).send();
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
}
})

server.get('/usuario/favorito', async (req, resp) => {
    try {
        const resposta= await listarFavoritos();
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send ({
            erro: err.message
        })
    }
})

export default server;
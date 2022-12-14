import { con } from "./connection.js";

export async function inserirUsuario(usuario){
    
    const comando = `
    insert into tb_usuario(nm_usuario, ds_telefone, ds_cpf, ds_rg, dt_nascimento) 
    values( ?, ?, ?, ?, ?)
    `;

    const [resposta] = await con.query(comando, [usuario.nome, usuario.telefone, usuario.cpf, usuario.rg, usuario.nascimento]);
    usuario.id = resposta.insertId;
    
    return usuario;
}


export async function AlterarInfosUsuarios(id, usuario){
    const resposta = `
    UPDATE TB_USUARIO
        SET
            NM_USUARIO        = ?, 
            DS_TELEFONE       =  ?,
            DS_CPF            =  ?, 
            DS_RG             =  ?, 
            DT_NASCIMENTO     =  ?
            WHERE ID_USUARIO    = ?`

    const [comando] = await con.query (resposta, [
                usuario.nome,
                usuario.telefone,
                usuario.cpf,
                usuario.rg,
                usuario.nascimento,
                id]);
    usuario.id = id;
    return usuario;
}



export async function inserirEndereco(endereco) {
    const comando = `
    INSERT INTO TB_USUARIO_ENDERECO (ID_USUARIO, DS_CEP, NM_NOME_RESIDENCIA, DS_ENDERECO, DS_BAIRRO, DS_ESTADO, DS_UF, NR_NUMERO, DS_COMPLEMENTO_REF)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [resp] = await con.query(comando, [
                                                        endereco.usuario,
                                                        endereco.cep,
                                                        endereco.residencia,
                                                        endereco.endereco,
                                                        endereco.bairro,
                                                        endereco.estado,
                                                        endereco.uf,
                                                        endereco.numero,
                                                        endereco.complemento
            ])
        
    endereco.id = resp.insertId;
    return endereco;
}

export async function listarEnderecos(){
    const resposta = `
    SELECT 
    ID_USUARIO_ENDERECO         id, 
    ID_USUARIO                  usuario,
    DS_CEP                      cep,
    NM_NOME_RESIDENCIA          residencia,
    DS_ENDERECO                 endereco,
    DS_BAIRRO                   bairro,
    DS_ESTADO                   estado,
    DS_UF                       uf,
    NR_NUMERO                   numero,
    DS_COMPLEMENTO_REF          complemento
    FROM TB_USUARIO_ENDERECO
    `;

    const [linhas] = await con.query (resposta);
    return linhas;
}

export async function alterarEndereco(id, endereco) {
    const comando =
            `UPDATE TB_USUARIO_ENDERECO
            SET
                ID_USUARIO           = ?,
                DS_CEP               = ?,
                NM_NOME_RESIDENCIA   = ?,
                DS_ENDERECO          = ?,
                DS_BAIRRO            = ?,
                DS_ESTADO            = ?,
                DS_UF                = ?,
                NR_NUMERO            = ?,
                DS_COMPLEMENTO_REF   = ?
            WHERE ID_USUARIO_ENDERECO = ?`
            
        const [resposta] = await con.query(comando, [
            endereco.usuario,
            endereco.cep,
            endereco.residencia,
            endereco.endereco,
            endereco.bairro,
            endereco.estado,
            endereco.uf,
            endereco.numero,
            endereco.complemento,
            id
])
        endereco.id = id;
        return endereco;
}

export async function deletarEndereco (id){
    const comando = `
    DELETE FROM TB_USUARIO_ENDERECO
    WHERE ID_USUARIO_ENDERECO = ? `;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function inserirNovoCartao(cartao) {
    const comando = `
    INSERT INTO TB_CARTAO (ID_USUARIO_LOGIN, DS_NUMERO, DT_VALIDADE, DS_CODIGO, DS_CPF)
    VALUES( ?, ?, ?, ?, ?)`;
    const [resposta] = await con.query(comando , [
        cartao.usuario,
        cartao.numero,
        cartao.validade,
        cartao.codigo,
        cartao.cpf
    ])

    cartao.id = resposta.insertId;
    return cartao;
}

export async function listarTodosCartoes(){
    const resposta = `
    SELECT
    ID_CARTAO           id,
    ID_USUARIO_LOGIN    usuario,
    DS_NUMERO           numero,
    DT_VALIDADE         validade,
    DS_CODIGO           codigo,
    DS_CPF              cpf
    FROM TB_CARTAO`;
   
    const [linhas] = await con.query(resposta);
    return linhas;
}

export async function alterarDadosCartao(id, cartao){
    const resp= `
    UPDATE TB_CARTAO
    SET
        ID_USUARIO_LOGIN   = ?,
        DS_NUMERO          = ?,
        DT_VALIDADE        = ?,
        DS_CODIGO          = ?,
        DS_CPF             = ?
    WHERE ID_CARTAO = ?`

    const [resposta] = await con.query(resp , [
        cartao.usuario,
        cartao.numero,
        cartao.validade,
        cartao.codigo,
        cartao.cpf,
        id
    ])
    cartao.id = id;
    return cartao;
}

export async function deletarCartao (id){
    const comando = `
    DELETE FROM TB_CARTAO
    WHERE ID_CARTAO = ? `;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function Avaliacao(avaliacao){
    const comando= `
    insert into TB_PRODUTO_AVALIACAO(ID_PRODUTO, ID_USUARIO, VL_NOTA, DS_COMENTARIO, DT_AVALIACAO)
VALUES (?, ?, ?, ?, ?);
`;
    const [resp] = await con.query(comando, [
                avaliacao.produto,
                avaliacao.usuario,
                avaliacao.nota,
                avaliacao.comentario,
                avaliacao.data
    ])
    avaliacao.id = resp.insertId;
    return avaliacao;
}

export async function listarAvaliacoes(){
        const resposta = `
        SELECT 
	ID_PRODUTO_AVALIACAO		ID, 
    ID_PRODUTO					PRODUTO, 
    ID_USUARIO					USUARIO, 
    VL_NOTA						NOTA,
    DS_COMENTARIO				COMENTARIO,
    DT_AVALIACAO				AVALIACAO
FROM TB_PRODUTO_AVALIACAO`;
        const [linhas] = await con.query(resposta);
        return linhas;
        
}

export async function Favoritos(favorito){
    const comando= `
    INSERT INTO TB_USUARIO_FAVORITO(ID_USUARIO, ID_PRODUTO)
    VALUES(?, ?)`;
    const [resp] = await con.query(comando, [
        favorito.usuario,
        favorito.produto
    ])
    favorito.id = resp.insertId;
    return favorito;
}


export async function removerProdutoFavoritos (id) {
	const comando = `DELETE FROM TB_USUARIO_FAVORITO 
			 WHERE ID_USUARIO_FAVORITO = ?`;

const [resp] = await con.query(comando, [id]);
return resp.affectedRows;
}

export async function listarFavoritos(){
    const comando= `
    select 
	ID_USUARIO_FAVORITO		ID, 
    ID_USUARIO				USUARIO, 
    ID_PRODUTO				PRODUTO
from TB_USUARIO_FAVORITO;
`
    const [linhas] = await con.query(comando);
    return linhas
}


export async function Pedidos(pedido){
    const comando = `
    INSERT INTO TB_PEDIDO(ID_USUARIO, ID_USUARIO_ENDERECO, ID_CARTAO, VL_SUBTOTAL, DS_SITUACAO, DT_PEDIDO, VL_FRETE)
    VALUES(?, ?, ?, ?, ?, ?, ?);
    `
    const [resp] = await con.query(comando, [
                                pedido.usuario,
                                pedido.endereco,
                                pedido.cartao,
                                pedido.subtotal,
                                pedido.situacao,
                                pedido.data,
                                pedido.frete
    ])
    pedido.id = resp.insertId;
    return pedido;
}

export async function ListarPedidos(){
    const resposta =`
    select
	ID_PEDIDO				id,
    ID_USUARIO				usuario,
    ID_USUARIO_ENDERECO		endereco,
    ID_CARTAO				cartao,
    VL_SUBTOTAL				subtotal,
    DS_SITUACAO				situacao,
    DT_PEDIDO				pedido,
    VL_FRETE				frete
    FROM TB_PEDIDO`;

    const [linhas] = await con.query(resposta);
    return linhas
}

export async function AlterarSenha(id, senha){
    const resposta= `
    UPDATE TB_USUARIO_LOGIN
    SET
        DS_SENHA = ?
        WHERE ID_USUARIO_LOGIN =?`;
        
        const [resp] = await con.query(resposta, [senha.senha, id])
        
        senha.id = id;
        return senha;
}
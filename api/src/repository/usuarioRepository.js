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
    return cartao
}

export async function deletarCartao (id){
    const comando = `
    DELETE FROM TB_CARTAO
    WHERE ID_CARTAO = ? `;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

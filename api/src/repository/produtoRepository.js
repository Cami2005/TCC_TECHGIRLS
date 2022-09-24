import { con } from './connection.js'

export async function inserirProduto(produto) {
    const comando = `
    INSERT INTO TB_PRODUTO (ID_PRODUTO, ID_TEMA , ID_CATEGORIA, NM_PRODUTO, VL_PRECO, DS_DESCRICAO, DS_DISPONIVEL)
    VALUES ( ?, ?, ?, ?, ?, ?,?) `;
    const [resp] = await con.query(comando, [
                            produto.id, 
                            produto.tema, 
                            produto.categoria,
                            produto.nome,
                            produto.preco,
                            produto.descricao,
                            produto.disponivel
                        ])
    produto.id = resp.insertId;
    return produto;
}


export async function inserirCor(cor) {
    const comando = `
    INSERT INTO TB_COR (ID_PRODUTO, NM_COR)
    VALUES(?, ?) `;
    const [resp] = await con.query(comando, [cor.id, cor.nome])

    cor.id = resp.insertId;
    return cor;


}

export async function inserirTamanho(tamanho) {
    const comando = `
    INSERT INTO TB_COR (ID_TAMANHO,ID_PRODUTO, DS_TAMANHO)
    VALUES(?, ?, ?) `;
    const [resp] = await con.query(comando, [tamanho.id, tamanho.produto, tamanho.descricao])

    tamanho.id = resp.insertId;
    return tamanho;


}
export async function salvarProdutoCategoria(idProduto, idCategoria) {
    const comando = `
        insert into tb_produto_categoria (id_categoria, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}
export async function salvarTema(idProduto, idTema) {
    const comando = `
        insert into tb_produto_categoria (id_tema, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idTema, idProduto])
}

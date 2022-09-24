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


export async function inserirCor(idProduto, cor) {
    const comando = `
    INSERT INTO TB_COR (ID_PRODUTO, NM_COR)
    VALUES(?, ?) `;
    const [resp] = await con.query(comando, [idProduto, cor])

}

export async function inserirTamanho(idProduto, tamanho) {
    const comando = `
    INSERT INTO TB_TAMANHO (ID_PRODUTO, DS_TAMANHO)
    VALUES(?, ?) `;
    const [resp] = await con.query(comando, [idProduto, tamanho])

}
export async function salvarProdutoCategoria(idProduto, idCategoria) {
    const comando = `
        insert into tb_produto_categoria (id_categoria, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}

import { con } from 'connection.js';

export async function inserirProduto(produto) {
    const comando = `
    INSERT INTO TB_PRODUTO (NM_PRODUTO, VL_PRECO, DS_DESCRICAO, DS_DISPONIVEL)
    VALUES ( ?, ?, ?, ?) `;
    const [resp] = await con.query(comando, [
                            produto.nome,
                            produto.preco,
                            produto.descricao,
                            produto.disponivel
                        ])
    produto.id = resp.insertId;
    return produto;
}

export async function inserirProdutoCategoria(idCategoria, idProduto) {
    const comando = `
    INSERT INTO TB_PRODUTO (ID_CATEGORIA)
    VALUES (?) 
    WHERE ID_PRODUTO = ?`;

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}

export async function inserirCor(idProduto, cor) {
    const comando = `
    INSERT INTO TB_COR (ID_PRODUTO, NM_COR)
    VALUES(?, ?) ;`
}

export async function inserirTamanho(idProduto, tamanho) {
    const comando = `
    INSERT INTO TB_TAMANHO (ID_PRODUTO, DS_TAMANHO)
    VALUES(?, ?) `;
}
import { con } from 'connection.js'

export async function inserirProduto(produto) {
    const comando = `
    INSERT INTO TB_PRODUTO (ID_CATEGORIA, ID_TEMA, NM_PRODUTO, VL_PRECO, DS_DESCRICAO, DS_DISPONIVEL)
    VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [resp] = await con.query(comando, [
                            produto.idDepartamento,
                            produto.nome,
                            produto.preco,
                            produto.destaque
                        ])
    return resp.insertId;
}

export async function inserirProdutoCategoria(idProduto, idCategoria) {
    const comando = `
    INSERT INTO TB_CATEGORIA (NM_CATEGORIA)
    VALUES (?)
    `;

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}

export async function inserirCor(idProduto, cor) {
    const comando= `
    INSERT INTO TB_COR (ID_PRODUTO, NM_COR)
    VALUES(?, ?)`;

}

export async function inserirTamanho(idProduto, tamanho) {
    const comando= `
    INSERT INTO TB_TAMANHO (ID_PRODUTO, DS_TAMANHO)
    VALUES(?, ?)
    `;
}
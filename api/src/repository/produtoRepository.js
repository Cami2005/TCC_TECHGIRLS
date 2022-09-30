import { con } from './connection.js'

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


export async function inserirCor(cor) {
    const comando = `
    INSERT INTO TB_COR (ID_PRODUTO, NM_COR)
    VALUES(?, ?) `;
    const [resp] = await con.query(comando, [cor.produto, cor.nome])
    cor.id = resp.insertId;
    return cor;
}

export async function inserirTamanho(tamanho) {
    const comando = `
    INSERT INTO TB_TAMANHO (ID_PRODUTO, DS_TAMANHO)
    VALUES(?, ?) `;
    const [resp] = await con.query(comando, [tamanho.produto, tamanho.descricao])

    tamanho.id = resp.insertId;
    return tamanho;


}
export async function salvarProdutoCategoria(categoria) {
    const comando = `
        insert into tb_produto_categoria (nm_categoria)
                                  values (?)
    `

    const [resp] = await con.query(comando, [categoria.nome]);
    categoria.id = resp.insertId;

}

export async function salvarTema(idProduto, idTema) {
    const comando = `
        insert into tb_produto_categoria (id_tema, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idTema, idProduto])
}

export async function salvarImagem(id, imagem) {
    const comando = `
        insert into tb_imagem (id_produto, img_produto, img_destaque)
        values (?, ?, false)
        `;
        
    if (isNaN(id)) {
        throw new Error("id tem o valor =" + "'" + id + "'" + " e imagem tem o valor=" + imagem) // vai retornar o que estamos enviando na rota em :id
    }
    
    const [resposta] = await con.query(comando, [id, imagem]);

    return resposta;
}  
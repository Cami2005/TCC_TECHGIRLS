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
    const [resp] = await con.query(comando, [tamanho.produto, tamanho.descricao]);
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


export async function listarProduto () {
    const comando = `SELECT ID_PRODUTO   id,
                   ID_TEMA    tema,
               ID_CATEGORIA categoria,
               NM_PRODUTO   nome,
               VL_PRECO     preco,
               DS_DESCRICAO descricao,
               DS_DISPONIVEL disponivel
               FROM TB_PRODUTO`;

const [linhas] = await con.query (comando);
return linhas;

}

export async function alterarProduto (id, produto) {
	const comando = 
            `UPDATE TB_PRODUTO
			SET NM_PRODUTO = ?,
			ID_TEMA        = ?,
			ID_CATEGORIA   = ?,
			VL_PRECO       = ?,
			DS_DESCRICAO   = ?,
			DS_DISPONIVEL  = ?
			WHERE ID_PRODUTO = ?`

const [resposta] = await con.query(comando, [produto.nome, produto.tema, produto.categoria, produto.preco, produto.descricao, produto.disponivel, id])
return resposta.affectedRows;
}

export async function removerProdutor (id) {
	const comando = `DELETE FROM TB_PRODUTO 
			 WHERE ID_PRODUTO = ?`;

	const [resposta] = await con.query (comando,[id]);
	return resposta.affectedRows;
}

export async function buscarPorNome(nome) {
    const comando =
    `SELECT ID_PRODUTO   id,
    ID_TEMA    tema,
ID_CATEGORIA categoria,
NM_PRODUTO   nome,
VL_PRECO     preco,
DS_DESCRICAO descricao,
DS_DISPONIVEL disponivel
FROM TB_PRODUTO
          WHERE NM_PRODUTO like ? `;
    

        
    const [linhas] = await con.query(comando, [ `%${nome}%` ]);
    return linhas;
}

export async function buscarPorCategoria(nome) {
    const comando =
    `SELECT ID_CATEGORIA   ID,
    NM_CATEGORIA  NOME
FROM TB_CATEGORIA
WHERE NM_CATEGORIA like ? `;
    
    const [linhas] = await con.query(comando, [ `%${nome}%` ]);
    return linhas;
}
export async function buscarPorTema(nome) {
    const comando =`
    select ID_TEMA  id,
           NM_TEMA  nome,
           DS_COR   cor
    FROM TB_TEMA
    WHERE NM_TEMA like ? `;
    
    const [linhas] = await con.query(comando, [ `%${nome}%` ]);
    return linhas;
}
export async function filtrarPorTema(nome){
    const comando = 
    `SELECT ID_TEMA  id,
            NM_TEMA  nome,
            DS_COR   cor
        FROM TB_TEMA
        WHERE NM_TEMA like ?`;

        const [linhas] = await con.query(comando, [ `%${nome}%` ]);
        return linhas;
    }

    export async function filtrarPorCategoria(nome){
        const comando = `
                SELECT ID_CATEGORIA   ID,
                NM_CATEGORIA  NOME
                FROM TB_CATEGORIA
                WHERE NM_CATEGORIA like ?`;
    
            const [linhas] = await con.query(comando, [ `%${nome}%` ]);
            return linhas;
        }
        

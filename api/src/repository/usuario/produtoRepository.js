import { con } from "../connection.js";

export async function ListarProdutosInicio(){ 
    const comando= `
    select 	tb_produto.id_produto	as id,
		nm_produto 				as nome,
		vl_preco				as preco,
		img_produto				as imagem
    from tb_produto
    inner join tb_imagem on tb_imagem.id_produto = tb_produto.id_produto
    where img_destaque = true`;

    const [r] = await con.query(comando);
    return r;
}
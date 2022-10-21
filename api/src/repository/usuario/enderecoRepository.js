import { con } from "../connection.js";

export async function listarEndereco(id){
    const comando = `
    select id_usuario 			as id,
			ds_cep	  			as cep,
			nm_nome_residencia 	as nome,
            ds_endereco			as endereco,
			ds_bairro			as bairro,
            ds_estado			as estado,
            ds_uf				as uf,
            nr_numero			as numero
from tb_usuario_endereco
where id_usuario = ? `;

const [registros] = await con.query(comando, [id]);
return registros;
}

export async function inserirEndereco(id, endereco){
    const comando = `
    insert into tb_usuario_endereco (id_usuario, ds_cep, nm_nome_residencia, ds_endereco, ds_bairro, ds_estado, ds_uf, nr_numero)
    values(?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [registros] = await con.query(comando, [id, endereco.cep, endereco.nome, endereco.endereco, endereco.bairro, 
    endereco.estado, endereco.uf, endereco.numero])

    return registros;
}
import { con } from "./connection.js";

export async function inserirUsuario(usuario){
    const comando = `
    insert into tb_usuario(id_usuario, nm_usuario, ds_email, ds_telefone, ds_cpf, ds_rg) 
    values(?, ?, ?, ?, ?, ?)
    `;

    const [resposta] = await con.query(comando, [usuario.id, usuario.nome, usuario.email, usuario.telefone, usuario.cpf, usuario.rg]);
    usuario.id = resposta.insertId;
    return resposta.affectedRows;
}
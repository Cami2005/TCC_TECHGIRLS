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


import { con } from "./connection.js";

export async function listarTemas() {
    const comando = `
        select id_tema        as id,
               nm_tema         as nome
          from tb_tema
    `

    const [linhas] = await con.query(comando);
    return linhas;
}


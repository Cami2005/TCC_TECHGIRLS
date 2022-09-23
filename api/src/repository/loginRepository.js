import {con} from './connection.js'

export async function login (email, senha) {
    const comando = 
    `
    select ID_ADM_LOGIN as id,
           NM_ADM	 as nome,
           DS_EMAIL	as		email
      from TB_ADM_LOGIN
     where DS_EMAIL 		= ?
       and DS_SENHA			= ?
        `;
    
        const [respostas] = await con.query (comando, [email, senha]);
        return respostas [0];
    }
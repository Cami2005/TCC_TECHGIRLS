import {con} from './connection.js'

export async function login (email, senha) {
    const comando = 
    `
    select ID_USUARIO 		id,
           NM_USUARIO		nome,
           DS_EMAIL			email
      from TB_USUARIO
     where DS_EMAIL 		= ?
       and DS_SENHA			= ?
    
        `
    
        const [respostas] = await con.query (comando, [email, senha])
        console.log(respostas)
        return respostas [0]
    }
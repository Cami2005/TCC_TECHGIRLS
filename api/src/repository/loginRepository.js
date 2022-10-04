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

    export async function loginUsuario(email, senha) {
      const comando = `
        select id_usuario_login as id,
        ds_email as email,
        ds_senha as senha
        from tb_usuario_login
        where ds_email = ?
        and ds_senha = ?
      `;

      const [resposta] = await con.query(comando, [email, senha]);

      return resposta[0];
    }

  export async function inserirUsuarioLogin(usuariologin){
    
    const comando= `
    insert into tb_usuario_login(id_usuario, ds_email, ds_senha)
    values( ?, ?, ?)
    `;
  
    const [r] = await con.query(comando, [ usuariologin.id_usuario, usuariologin.email, usuariologin.senha]);
    usuariologin.id= r.insertId;

    return usuariologin;
  }
import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function LoginAdm(email, senha){
        const r= await api.post('/admin/login', {email, senha});
        return r.data;
}

export async function InserirUsuarioLogin(id_usuario, email, senha){
    const r= await api.post('/login/usuario', {
        id_usuario: id_usuario, 
        email: email, 
        senha: senha
    });
    return r.status;
}
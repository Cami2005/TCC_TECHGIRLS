import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function LoginUsuario(nome, telefone, cpf, rg, nascimento) {
    const r = await api.post('/usuario', {
        nome: nome,
        telefone: telefone,
        cpf: cpf,
        rg: rg,
        nascimento: nascimento
    })
    return r.data;
}
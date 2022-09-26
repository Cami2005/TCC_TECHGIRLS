import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarPoduto(nome, descricao, preco, disponivel) {
    const resposta= await api.post('/produto', {nome, descricao, preco, disponivel});
    return resposta.data
}



export async function CadastrarCor(cor) {
    const resposta= await api.post ('/cor', {cor})
    return resposta.data
}


export async function CadastrarTamanho(tamanho) {
    const resposta= await api.post ('/tamanho', {tamanho})
    return resposta.data;
}

export async function listarCategorias() {
        const resp = await api.get('/api/categoria')
        return resp.data;
}

    export async function listarTemas() {
        const resp = await api.get('/api/tema')
        return resp.data;
    }
    
    
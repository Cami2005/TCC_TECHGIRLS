import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarPoduto(nome, descricao, preco, disponivel) {
    const resposta= await api.post('/produto',{
        
    nome: nome,
    preco: preco,
    descricao: descricao,
    disponivel: disponivel
    } )
    return resposta.data
}

export async function CadastrarCor(id,cor) {
    const resposta= await api.post ('/cor', {
        id: id,
        cor: cor
    })
    return resposta.data
}


export async function CadastrarTamanho(id, tamanho) {
    const resposta= await api.post ('/tamanho', {
        id: id,
        tamanho: tamanho

    })
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
    
    
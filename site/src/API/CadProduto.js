import { API_URL } from './config';

import axios from 'axios'
//import { con } from '../../../api/src/repository/connection';
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarPoduto(id, nome, descricao, preco, disponivel, usuario) {
    const resposta= await api.post('/produto',{
        id: id,
        nome: nome, 
        preco: preco, 
        descricao:descricao,
        disponivel: disponivel,
        usuario: usuario
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

    export async function listarCategorias() {
        const resp = await api.get('/api/categoria')
        return resp.data;
    }

    export async function listarTemas() {
        const resp = await api.get('/api/tema')
        return resp.data;
    }
    
    
    return resposta.data
}
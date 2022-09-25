import { API_URL } from './config';

import axios from 'axios'
import { con } from '../../../api/src/repository/connection';
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarPoduto(id, nome, descricao, preco, disponivel, usuario) {
    const resposta= await api.post('/produto',{
        id,
        nome, 
        preco, 
        descricao,
        disponivel,
        usuario
    } )
    return resposta.data
}

export async function CadastrarCor(id,cor) {
    const resposta= await api.post ('/cor', {
        id,
        cor
    })
    return resposta.data
}


export async function CadastrarTamanho(id, tamanho) {
    const resposta= await api.post ('/tamanho', {
        id,
        tamanho
    })
    return resposta.data
}
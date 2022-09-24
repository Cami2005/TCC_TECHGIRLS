import { API_URL } from './config';

import axios from 'axios'
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

//export async function InserirImagem(id, imagem){}
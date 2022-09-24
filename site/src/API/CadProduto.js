import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarPoduto(id, nome, descricao, valor, disponivel, usuario) {
    const resposta= await api.post('/produto',{
        tema,
        categoria,
        nome, 
        preco, 
        descricao,
        disponivel
    } )
    return resposta.data
}

//export async function InserirImagem(id, imagem){}
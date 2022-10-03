import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarPoduto(nome, descricao, preco, disponivel) {
    const resposta= await api.post('/produto', {
        nome: nome,
        descricao: descricao,
        preco: preco,
        disponivel: disponivel
    });
    console.log(resposta.data);
    return resposta.data;
}

export async function CadastrarImagem(id, imagem){
    const formData = new FormData();
    formData.append ('img', imagem);
    const resposta = await api.put(`/produto/:${id}/imagem`, formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        }
    });
    return resposta.status;
}


export async function CadastrarCor(produto, nome) {
    const resposta= await api.post ('/produto/cor', {
        produto: produto,
        nome: nome
    })
    return resposta.data;
}


export async function CadastrarTamanho(produto, tamanho) {
    const resposta= await api.post ('/produto/tamanho', {
        produto: produto,
        descricao: tamanho
    })
    return resposta.data;
}

export async function ProdutosListados() {
    const resp = await api.get('/produto')
    return resp.data;
}

export async function listarCategorias() {
        const resp = await api.get('/api/categoria')
        return resp.data;
}

export async function listarTemas() {
    const resp = await api.get('/api/tema')
    return resp.data;
}
export async function buscarProdutosPorNome(nome) {
    const resp = await api.get(`/produto/busca?nome=${nome}`)
    return resp.data;
}

export async function buscarCategoria(nome) {
    const resposta = await api.get(`/filtro/categoria?nome=${nome}`)
    return resposta.data;
}
export async function buscarPorTema(nome) {
    const resposta = await api.get(`/filtro/tema?nome=${nome}`)
    return resposta.data;
}
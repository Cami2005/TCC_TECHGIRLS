import { API_URL } from '../config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function SalvarEndereco(id, cep, referencia, endereco, bairro, cidade, estado, uf, numero) {
    const r = await api.post(`/api/usuario/${id}/endereco`, {
    id: id,
    cep: cep,
    referencia: referencia, 
    endereco: endereco,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    numero: numero    
})
    return r.data;
}



export async function ListarEnderecos(id) {
    const r = await api.get(`/api/usuario/endereco/${id}`);
    return r.data;
}

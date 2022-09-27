import MenuAdmin from "../../../components/pagAdm.js";
import "./index.scss";
import "../../../common/common.scss"
import {  useEffect, useState } from "react";
import {  CadastrarPoduto, listarCategorias, listarTemas } from '../../../API/CadProduto.js';

export default function Index() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [disponivel, setDisponivel] = useState(true);

    const [idCategoria, setIdCategoria] = useState();
    const [categorias, setCategorias] = useState([]);

    const [idTemas, setIdTemas] = useState();
    const [Temas, setTemas] = useState([]);

    const [catSelecionadas, setCatSelecionadas] = useState([]);

    // função adicionar novo produto completa
    // async function inserir(){
    //    Adicionar();
    //    adicionarCategoria()
    //    adicionarCategoria()
    //    adicionarImagem()
    //    alterarDestaque()
    // }

    //cor
    const [cor, setCor] = useState([]);
    const [novaCor, setNovaCor] = useState('');

    //tamanho
    const [tamanho, setTamanho] = useState([]);
    const [novoTamanho, setNovoTamanho] = useState('');

    //funções cor e tamanho (renderização)


    function delay(milliseconds) {
        return new Promise (resolve => setTimeout(resolve, milliseconds)) // acabar com o delay
    }

    async function arrayCor(){
        console.log(cor)
        console.log(novaCor);
        setCor([...cor, novaCor]);
        delay(500).then(_ => console.log(cor))
    }


    async function arrayTamanho(){
        console.log(tamanho)
        console.log(novoTamanho);
        setTamanho([...tamanho, novoTamanho]);
        delay(500).then(_=> console.log(tamanho))
    }

    //

    // função adicinar cores

    async

    async function Adicionar(){
        try {
            const precoProduto = Number(preco.replace(',', '.'));

            const r = await CadastrarPoduto (nome, descricao, precoProduto, disponivel)
            alert('Produto cadastrado com sucesso')
        } catch (err) {
        console.log();
        }
    }
 
    function buscarNomeCategoria(id) {
        const cat = categorias.find(item => item.id == id);
        return cat.categoria;
    }

    
    function adicionarCategoria() {
        if (!catSelecionadas.find(item => item == idCategoria)) {
            const categorias = [...catSelecionadas, idCategoria];
            setCatSelecionadas(categorias);
        }
    }


    async function carregarTemas() {
        const r = await listarTemas();
        setTemas(r);
    }


    async function carregarCategorias() {
        const r = await listarCategorias();
        setCategorias(r);
    }


    useEffect(() => {
        carregarCategorias();
        carregarTemas();
    }, [])



    
    return (
        <main className="inserirProduto">

                <MenuAdmin logo='../../../images/logoAdmin.png'/>

                <div className="informacoes-produto">

                    <h1> Adicionar Produto </h1>

                    <div className="inserir">

                        <div className="div1">
                            

                            <div className="flex-column">
                                <label> Nome do Produto </label>
                                <input type="text" value={nome} onChange={e=> setNome(e.target.value)} className="input"/>
                            </div>

                            <div className="flex-column">
                                <label> Descrição do Produto </label>
                                <textarea type="text" value={descricao} onChange={e=> setDescricao(e.target.value)} maxLength={100} className="textarea"/>
                            </div>

                            

                            <div className="flex-row space-between">
                                <div className="select-tamanho">
                                    <label> Categoria:</label>
                                    <select className="select" value={idCategoria} onChange={e => setIdCategoria(e.target.value)}>
                                        <option> Vestimenta </option>

                                        {categorias.map(item =>
                                <option value={item.id}> {item.categoria} </option>
                            )}
                                    </select>
                                </div>

                                

                                <div className="select-tamanho">
                                    <label> Tema: </label>
                                    <select className="select" value={idTemas} onChange={e => setIdTemas(e.target.value)}>
                                        <option> Harry Potter </option>

                                        {Temas.map(item =>
                            <option value={item.id}> {item.temas} </option>
                        )}
                                    </select>
                                </div>
                            </div>

                            
                            <div className="div-array">
                                <label> Cor </label>
                                <div className="flex-row">
                                    <input type="text" value={novaCor} onChange={e => setNovaCor(e.target.value)} className="input"/> 
                                    <button onClick={arrayCor} className="button-ok"> OK </button>
                                    
                                    {cor.map( item => 
                                        <div className="itemzinho" key={item} >
                                            {item}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="div-array">
                                <label> Tamanhos </label>
                                <div className="flex-row">
                                    <input value={novoTamanho}  className="input" onChange={e => setNovoTamanho(e.target.value)}/> 
                                    <button onClick={arrayTamanho} className="button-ok"> OK </button>

                                    {tamanho.map( item => 
                                        <div className="itemzinho" key={item} >
                                            {item}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex-column"> 
                                <label > Valor </label>
                                <input type="text" value={preco} onChange={e=> setPreco(e.target.value)} className="input"/>
                            </div>

                            <div>
                                    <div> <label type="checkbox" checked={disponivel} onChange={e=> setDisponivel(e.target.checked)}>Disponível ?</label> <input type='checkbox'/>&nbsp; </div>
                            </div> 
                        </div>

                        <div className="div2">
                            <div>
                                <label> Foto de destaque</label>
                                <input type="file" accept="image"/>
                            </div>

                            <div> 
                                <label> Fotos extras </label>
                                <input/>
                            </div>
                        </div>


                    </div>

                    <button onClick={Adicionar} className="button centralizar"> Adicionar </button>

                </div>

                
        </main>

    )
}
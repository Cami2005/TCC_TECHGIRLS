import MenuAdmin from "../../../components/pagAdm.js";
import { toast } from 'react-toastify';
import "./index.scss";
import "../../../common/common.scss"
import {  useEffect, useState } from "react";
import {  CadastrarCor, CadastrarPoduto, CadastrarTamanho, listarCategorias, listarTemas, salvarImagens, CadastrarImgDestaque } from '../../../API/CadProduto.js';
import DeletarItem from "../../../components/delete.js";

export default function Index() {


//VARIÁVEIS DE ESTADO

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0.0);
    const [disponivel, setDisponivel] = useState(true);

    const [idCategoria, setIdCategoria] = useState(0);
    const [categorias, setCategorias] = useState([]);

    const [idTemas, setIdTemas] = useState(0);
    const [Temas, setTemas] = useState([]);

    const [catSelecionadas, setCatSelecionadas] = useState([]);

    //imagens

    const [imagem1, setImagem1] = useState();
    const [imagem2, setImagem2] = useState();
    const [imagem3, setImagem3] = useState();
    const [imagem4, setImagem4] = useState();

    // imagem destaque

    const [destaque, setDestaque] = useState();


// FUNÇÕES

    //função imagem
    function escolherImagem(inputId) {
        document.getElementById(inputId).click();
    }

    function exibirImagem(imagem) {
        if (imagem == undefined){
            return '../images/add.png'
        }
        else {
            return URL.createObjectURL(imagem)
        }
    }

    // função imagem destaque

    async function escolherDestaque(){
        document.getElementById('imagemDestaque').click();
    }


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

    function arrayCor(){
            let c= [... cor, novaCor];
            setCor(c);
    
       // try {
            //setCor([...cor, novaCor]);
            //delay(500).then(_ => console.log(cor))
            //const addCor= await CadastrarCor (cor);
            //alert('Produto cadastrado com sucesso')
            
        //} catch (error) {
          //  console.log();

        //}
    }

    async function arrayTamanho(){
        let T= [...tamanho, novoTamanho];
        setTamanho(T);
        //setTamanho([...tamanho, novoTamanho]);
        //delay(500).then(_=> console.log(tamanho))
    }

    //

    function Remover(t){
        let c = cor.filter(item => item !== t);
        let T = tamanho.filter(item => item !== t);
        setCor(c)
        setTamanho(T)
    }

    function Limpar(){
        setCor([]);
        setTamanho([]);

    }

    useEffect(() => {
        Limpar();
    }, [])



  

    // função adicinar cores
 
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
        console.log(Temas);
    }


    async function carregarCategorias() {
        const r = await listarCategorias();
        setCategorias(r);
        console.log(categorias);
    }


    useEffect(() => {
        carregarCategorias();
        carregarTemas();
    }, [])

    useEffect(() => {
        console.log('tema: ' + idTemas);
        console.log('categoria: ' + idCategoria)
    }, [idCategoria, idTemas])

        // inserindo tamanho
        async function inserirTamanho(id) {
            for(let i=0; i<=tamanho.length; i++) {
            let x = await CadastrarTamanho(id, tamanho[i])
            }
        }

    // inserindo cores
    async function inserirCor(id) {
        for(let i=0; i<=cor.length; i++) {
        let x = await CadastrarCor(id, cor[i])
        }
    }

    // inserindo produto + cores + tamanho + imagens
    async function inserirProduto(){ 
        try {
            // const precoProduto = Number(preco.replace(',', '.'));
            const novoProduto = await CadastrarPoduto(nome, idTemas, idCategoria, descricao, preco, disponivel);
            inserirCor(novoProduto.id);
            inserirTamanho(novoProduto.id);
            const dest = await CadastrarImgDestaque(novoProduto.id, destaque);
            console.log(dest)
            const imgs = await salvarImagens(novoProduto.id, imagem1, imagem2, imagem3, imagem4);
            toast.dark('tudo ok')
        }
        catch (err) {
            alert({erro : err.message})
        }
    
       
    }        

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
                                            <option value={item.id}> {item.nome} </option>
                                        )}

                                    </select>
                                </div>

                                

                                <div className="select-tamanho">

                                    <label> Tema: </label>
                                    <select className="select" value={idTemas} onChange={e => setIdTemas(e.target.value)}>
                                        <option> Harry Potter </option>

                                        {Temas.map(item =>
                                            <option value={item.id}> {item.nome} </option>
                                        )}
                                    </select>
                                </div>

                            </div>

                            
                            <div className="div-array">
                                <label> Cor </label>

                                <div className="flex-row wrapwrap">

                                    <input type="text" value={novaCor} onChange={e => setNovaCor(e.target.value)} className="input input-item"/> 
                                    <button onClick={arrayCor} className="button-ok"> OK </button>
                                    
                                   {cor.map( item => 
                                        <div className="itemzinho">
                                            <DeletarItem  
                                            key={item}
                                            it={item}
                                            deletarit={Remover}  />
                                        </div>
                                    )}
                                  
                                </div>
                            </div>

                            <div className="div-array">

                                <label> Tamanhos </label>

                                <div className="flex-row wrapwrap">
                                    <input value={novoTamanho}  className="input input-item" onChange={e => setNovoTamanho(e.target.value)}/> 

                                    <button onClick={arrayTamanho} className="button-ok"> OK </button>

                                    {tamanho.map( item => 
                                        <div className="itemzinho" >
                                            <DeletarItem  
                                            key={item}
                                            it={item}
                                            deletarit={Remover}  />
                                        </div>
                                    )}

                                </div>

                            </div>

                            <div className="flex-column"> 

                                <label > Valor </label>
                                <input type="text" value={preco} onChange={e=> setPreco(e.target.value)} className="imagem-input"/>
                           
                            </div>
                

                            <div>
                                <div> 
                                     <label > Disponível ?</label> 
                                     <input type="checkbox" checked={disponivel} onChange={e=> setDisponivel(e.target.checked)}/>
                                </div>
                            </div> 

                        </div>

                        <div className="div2">
                            <div>

                                <h1> Foto Destaque </h1>

                                <img 
                                    className="img" 
                                    src={exibirImagem(destaque)}
                                    alt='' 
                                    onClick={escolherDestaque}  
                                />


                                <input 
                                type="file" 
                                id="imagemDestaque"
                                onChange={e => setDestaque(e.target.files[0])} 
                                />
                                
                            </div>

                            <div className="flex-column"> 

                                <h1> Fotos Extras</h1>

                                <div>
                                    <img className="img" src={exibirImagem(imagem1)} alt='' onClick={() => escolherImagem('imagem1')}/>
                                    <img className="img" src={exibirImagem(imagem2)}  alt='' onClick={() => escolherImagem('imagem2')}/>
                                    <img className="img" src={exibirImagem(imagem3)}  alt='' onClick={() => escolherImagem('imagem3')}/>
                                    <img className="img" src={exibirImagem(imagem4)}  alt='' onClick={() => escolherImagem('imagem4')}/>

                                    <input type='file' id='imagem1' onChange={e => setImagem1(e.target.files[0])} />
                                    <input type='file' id='imagem2' onChange={e => setImagem2(e.target.files[0])} />
                                    <input type='file' id='imagem3' onChange={e => setImagem3(e.target.files[0])} />
                                    <input type='file' id='imagem4' onChange={e => setImagem4(e.target.files[0])} />
                                </div>
                                
                            </div>

                        </div>


                    </div>

                    <button onClick={inserirProduto} className="button centralizar"> Adicionar </button>

                </div>

                
        </main>

    )
}
import { Link } from "react-router-dom";
import  MenuAdmin from "../../../components/pagAdm";
import BoxProduto from "../../../components/boxProduto";
import "./index.scss"
import "../../../common/common.scss"
import { useEffect, useState } from "react";
import { buscarCategoria, buscarDestaque, buscarPorTema, deletarProduto, ProdutosListados } from "../../../API/CadProduto";
import { toast } from "react-toastify";

export default function Index(){
    const[produto, setProduto] = useState([]);

    const[filtroTema, setFiltroTema]= useState('');
    const[filtroCategoria, setFiltroCategoria] = useState('');

    async function buscarTemaClick() {
        const resp = await buscarPorTema(filtroTema);
        console.log(resp)
        setProduto(resp);
    }
    async function buscarCategoriaClick() {
        const resp = await buscarCategoria(filtroCategoria);
        console.log(resp)
        setProduto(resp);
    }

    async function ListarProdutos(){
        const resposta= await ProdutosListados();
        await buscarDestaque()
        setProduto(resposta)
    }

    async function DeletarProdutos(id) {
        try { 
            await deletarProduto(id);
            toast.dark('Deletado com sucesso');
            await ListarProdutos();
        }
        catch(err) {
            toast.error(err.message)
        }
    }

    useEffect(() => {
        ListarProdutos();
    }, [])

    return(
        <main className="Novo-Produto">

            <MenuAdmin logo='../../../images/logoAdmin.png'/>

            <div className="fundo">

                <div className="espacamento">
                    <Link className="edit" to='/AddProduto'>Novo Produto </Link>
                    <div>
                        <input type='text' value={filtroTema} onChange={e=> setFiltroTema(e.target.value)}></input>
                        <button onClick={buscarTemaClick}>Buscar</button>
                        <input type='text' value={filtroCategoria} onChange={e=> setFiltroCategoria(e.target.value)}></input>
                        <button onClick={buscarCategoriaClick}>Buscar</button>
                    </div>
               </div>

                

                <div className="produtosmapeamento">
                    {produto.map(item =>

                        <BoxProduto
                            img=""
                            preco={item.preco}
                            nome={item.nome}
                            clickdelete={() => DeletarProdutos(item.id)}
                            clickedit=""
                        />
                   
                     )}
                </div>


            </div>
            
        </main>
    )
}
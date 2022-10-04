import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/pagAdm";
import "./index.scss"
import "../../../common/common.scss"
import { useEffect, useState } from "react";
import { deletarProduto, ProdutosListados } from "../../../API/CadProduto";
import { toast } from "react-toastify";

export default function Index(){
    const[produto, setProduto] = useState([]);

    async function ListarProdutos(){
        const resposta= await ProdutosListados();
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
                <div>
                    <Link className="edit" to='/AddProduto'>Novo Produto</Link>
                </div>
                <div>
                    {produto.map(item =>
                    <div>
                        <p>{item.nome}</p>
                        <button onClick={() => DeletarProdutos(item.id)} ><img src="../../../images/lixeira.png"/></button>  
                        <button><img src="../../../images/editar.png"/></button>  
                        
                    </div>
                        
                     )}
                </div>
            </div>
            
        </main>
    )
}
import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/pagAdm";
import "./index.scss"
import "../../../common/common.scss"
import { useEffect, useState } from "react";
import { ProdutosListados } from "../../../API/CadProduto";

export default function Index(){
    const[produto, setProduto] = useState([]);

    async function ListarProdutos(){
        const resposta= await ProdutosListados();
        setProduto(resposta)
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
                        <button><img src="../../../images/lixeira.png"/></button>  
                        <button><img src="../../../images/editar.png"/></button>  
                        
                    </div>
                        
                     )}
                </div>
            </div>
            
        </main>
    )
}
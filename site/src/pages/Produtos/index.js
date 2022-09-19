import { Link } from "react-router-dom";
import MenuAdmin from "../../components/pagAdm.js";
import "./index.scss"

export default function Index(){
    return(
        <main className="Novo-Produto">
             <MenuAdmin logo='/images/logoAdmin.png'/>

             <div>
                 <Link className="edit" to='/AddProduto'>Novo Produto</Link>
             </div>

        </main>
    )
}
import { Link } from "react-router-dom";
import MenuAdmin from "../../components/pagAdm.js";

export default function Index(){
    return(
        <main>
             <MenuAdmin logo='/images/logoAdmin.png'/>

             <div>
                 <Link to='/AddProduto'>Novo Produto</Link>
             </div>

        </main>
    )
}
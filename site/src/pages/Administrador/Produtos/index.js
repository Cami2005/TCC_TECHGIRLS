import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/pagAdm";
import "./index.scss"
import "../../../common/common.scss"

export default function Index(){
    return(
        <main className="Novo-Produto">

             <MenuAdmin logo='../../../images/logoAdmin.png'/>

            <div className="fundo">
                <div>
                    <Link className="edit" to='/AddProduto'>Novo Produto</Link>
                </div>
            </div>
            
        </main>
    )
}
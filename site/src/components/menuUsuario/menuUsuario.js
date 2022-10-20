import { Link } from "react-router-dom";
import './menuUsuario.scss'

export default function MenuUsuario(){
    return(
        <main className="menu-user">
            <div className="links">
                <Link className="Link">Dados Pessoais</Link>
                <Link className="Link">Cartões</Link>
                <Link className="Link">Endereços</Link>
                <Link className="Link">Meus Pedidos</Link>
                <Link className="Link">Sair</Link>
                
                    
               
            </div>
            <hr className="hr"></hr>
        </main>
    )
}
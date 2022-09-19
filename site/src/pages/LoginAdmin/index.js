import { Link } from "react-router-dom";
import "./index.scss"
import Inputs from "../../components/Inputs.js";

export default function Index(){
    return(
        <main className="login">

            <div className="administracao">
                 <h1>ADMINISTRAÇÃO</h1>

            <div>
                <Inputs placeholder="Login" classe="componente-input" img="img" icon="/images/usuario1.png"/>
                <Inputs placeholder="Senha" classe="componente-input" img="img" icon="/images/senha1.png"/>
            </div>

            <div className="flex-column">
                <Link to='/PedidosRecentes' className="acessar">Acessar</Link>
                <Link to='/Menu' className="voltar" >Voltar</Link>
            </div>
            </div>

        </main>
    )

}
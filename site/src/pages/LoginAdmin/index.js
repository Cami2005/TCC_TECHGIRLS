import { Link } from "react-router-dom";
import Inputs from "../../components/Inputs.js";

export default function Index(){
    return(
        <main>
            <div>
                <h1>ADMINISTRAÇÃO</h1>
                <Inputs icon="/images/usuario1.png"/>
                <Inputs icon="/images/senha1.png"/>


                <Link to='/PedidosRecentes'>Acessar</Link>
                <Link to='/Menu'>voltar</Link>
            </div>
        </main>
    )

}
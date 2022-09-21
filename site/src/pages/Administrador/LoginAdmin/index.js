import { Link } from "react-router-dom";
import "../../../common/common.scss"
import "./index.scss"
import Inputs from "../../../components/Inputs.js";
import { useEffect, useState } from "react";

export default function Index(){
    const [username, setUserName] = useState('');
    const [senha, setSenha] = useState('');
        
    return(
        <main className="login">

            <div className="administracao">
                 <h1>ADMINISTRAÇÃO</h1>

            <div>
                <Inputs type='text' value={username} onChange={e => setUserName(e.target.value)} placeholder="Username" classe="componente-input" img="img" icon="../images/usuario1.png"/>
                <Inputs type='password' value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" classe="componente-input" img="img" icon="../images/senha1.png"/>
            </div>

            <div className="flex-column">
                <Link to='/PedidosRecentes' className="acessar">ACESSAR</Link>
                <Link to='/Menu' className="voltar" >Voltar</Link>
            </div>
            </div>

        </main>
    )

}
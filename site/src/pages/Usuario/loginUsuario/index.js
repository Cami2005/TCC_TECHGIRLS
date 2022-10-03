import { useState } from "react";
import { Link } from "react-router-dom";
import './index.scss';

export default function Index() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <main className="login">

            <div className="fundo">
                <h1> Entre Agora! </h1>

                <div>
                    <img src='./public/images/user.png' alt=""/>
                    <input placeholder="E-Mail" type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div>
                    <img src='' alt=''/>
                    <input placeholder="Senha" type='text' value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <button> Entrar </button>

                <p> Ainda não possui cadastro? <Link to='/usuario/cadastro'> Cadastre-se agora! </Link></p>

                <Link to='/'> Voltar</Link>

                <Link to='/loginAdmin'> <img src='' alt='' /> </Link>
            </div>

        </main>
    )
}
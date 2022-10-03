import './index.scss';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {

    const {nome, setNome} = useState('');
    const {sobrenome, setSobrenome} = useState('');
    const {telefone, setTelefone} = useState('');
    const {datadenasc, setDatadenasc} = useState('');
    const {rg, setRg} = useState('');
    const {cpf, setCpf} = useState('');
    const {cep, setCep} = useState('');
    const {email, setEmail} = useState('');
    const {senha, setSenha} = useState('');
    const {confSenha, setConfSenha} = useState('');

    return(
        <main className='cadastro'>

             <div className='fundo'>
                <h1> Cadastre-se </h1>

                <div className='flex-row'>

                    <div className='flex-column espacamento'>
                        <div>
                            <label> Nome </label>
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>

                        <div>
                            <label> Sobrenome </label>
                            <input type="text" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
                        </div>

                        <div>
                            <label> Telefone </label>
                            <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                        </div>

                        <div>
                            <label> Data de nascimento </label>
                            <input type="text" value={datadenasc} onChange={e => setDatadenasc(e.target.value)}/>
                        </div>

                        <div>
                            <label> RG </label>
                            <input type="text" value={rg} onChange={e => setRg(e.target.value)}/>
                        </div>
                    </div>

                    <div className='flex-column espacamento'>
                        <div>
                            <label> CPF </label>
                            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)}/>
                        </div>

                        <div>
                            <label> CEP </label>
                            <input type="text" value={cep} onChange={e => setCep(e => setCep(e.target.value))}/>
                        </div>

                        <div>
                            <label> Email </label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div>
                            <label> Senha </label>
                            <input type="text" value={senha} onChange={e => setSenha(e.target.value)}/>
                        </div>

                        <div>
                            <label> Confirmar senha </label>
                            <input type="text" value={confSenha} onChange={e => setConfSenha(e.target.value)}/>
                        </div>

                    </div>
                </div>

                <button className='prossiga'> Prossiga </button>

                <Link className='voltar' to='/'> Voltar </Link>
             </div>
        </main>
    );
}
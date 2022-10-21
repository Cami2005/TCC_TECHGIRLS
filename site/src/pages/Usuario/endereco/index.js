import './index.scss'

import Rodape from '../../../components/rodape.js';
import Tema from '../../../components/tema.js';
import CabecalhoPrincipal from '../../../components/cabecalhoPrinc.js';
import { ListarEnderecos } from '../../../API/usuario/enderecoApi';
import { useEffect, useState } from 'react';
import Storage from 'local-storage'

export default function Index(){

    const [enderecos, setEnderecos] = useState([]);

    async function carregarEnderecos(){
        const r= await ListarEnderecos(Storage('cliente-logado').data.id);
        setEnderecos(r);
    }

    useEffect(() =>{
        carregarEnderecos()
    }, [])


    return(
        <main>
            <CabecalhoPrincipal logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png'/>
            <Tema cor='cor-endereco' nome='Endereço'/>    
            
            <section>
                <div>
                {enderecos.map(item =>
                    <div className='boxend'> 
                        <h1> {item.referencia} </h1>
                        <p> {item.endereco}, {item.numero}</p>
                        <p> {item.bairro}, {item.cidade} </p>
                    </div>)}
                    
                </div>

            </section>

            <Rodape/>

        </main>

    )
}
import './index.scss'

import Rodape from '../../../components/rodape.js';
import Tema from '../../../components/tema.js';
import CabecalhoPrincipal from '../../../components/cabecalhoPrinc.js';
import Caixa from '../../../components/boxInfos';

export default function Index(){
    return(
        <main>
            <CabecalhoPrincipal logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png'/>
            <Tema cor='cor-endereco' nome='Dados Pessoais'></Tema>     
            <Caixa ajuste='ajuste-caixa'></Caixa>
                <Rodape></Rodape>

        </main>

    )
}
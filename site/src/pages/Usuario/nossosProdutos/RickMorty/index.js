import './index.scss'

import Cabecalho from '../../../../components/cabecalho.js'
import Rodape from '../../../../components/rodape'

export default function Index(){
    return(
        <main>
            <Cabecalho logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png' banner='../../../images/rickmorty.jpg'/>
                            <Rodape edit="edit-rodape8"></Rodape>


        </main>

    )
}
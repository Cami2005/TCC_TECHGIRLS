import './index.scss'

import Cabecalho from '../../../../components/cabecalho.js'
import Rodape from '../../../../components/rodape'

export default function Index(){
    return(
        <main className='main-stranger'>
            <Cabecalho logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png' banner='../../../images/stranger.jpeg'/>
            <div>
                <p>oo</p>
            </div>
            <Rodape edit="edit-rodape9"></Rodape>
        </main>

    )
}
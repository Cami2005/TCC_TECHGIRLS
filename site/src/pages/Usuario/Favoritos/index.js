import CabecalhoPrincipal from "../../../components/cabecalhoPrinc";
import Tema from "../../../components/tema";
import './index.scss'



export default function Index(){
    return(
        <main>
            <CabecalhoPrincipal  logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png'/>
            <Tema cor='cor-sub-cab' nome='Favoritos'/>
        </main>
    )
}
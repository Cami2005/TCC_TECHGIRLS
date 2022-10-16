import CabecalhoPrincipal from "../../../components/cabecalhoPrinc";
import Tema from "../../../components/tema";



export default function Index(){
    return(
        <main>
            <CabecalhoPrincipal  logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png'/>
            <Tema className='faixa' nome='iiii'/>
        </main>
    )
}
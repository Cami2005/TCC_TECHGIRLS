import MenuAdmin from "../../../components/pagAdm";
import './index.scss';
export default function Index(){
    return(
        <main className="pag1-adm">
            <MenuAdmin logo='../../../images/logoAdmin.png'/>
            
            <div className="PedRecentes">
            
            <div>
                <img></img>
                <h2 className="Bem-Vindo">Bem vindo a área de administração</h2>
            </div>
            <div>
                <h3>Pedidos Recentes</h3>
            </div>
            </div>

            
        </main>
    )
}
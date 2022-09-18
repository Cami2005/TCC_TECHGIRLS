import Admin from "../../components/pagAdm.js"
import './index.css'
export default function Index(){
    return(
        <main>
            <Admin logo='/images/logoAdmin.png'/>
            <div>
                <h1>Bem vindo a área de administração</h1>
            </div>
            <div>
                <h2>Pedidos Recentes</h2>
            </div>

            <h1 className="nome">Livia</h1>
        </main>
    )
}
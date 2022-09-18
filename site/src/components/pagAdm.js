import { Link } from "react-router-dom";

export default function Admin(props){
    return(
        <main>
            <div>
                <img src={props.logo}></img>
                <div>
                    <Link>Administrador</Link>
                </div>
                <div>
                  <Link>Catálogos</Link>
                </div>
                <div>
                    <Link>Pedidos</Link>
                </div>
                <div>
                <Link>Produtos</Link>
                </div>
                <div>
                <Link>Avaliações</Link>
                </div>


            </div>
        </main>
    )
}
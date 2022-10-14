import { Link } from "react-router-dom";
import "../../../common/common.scss"
import CabecalhoPrincipal from "../../../components/cabecalhoPrinc";
import "./index.scss"


export default function Index(){
    return(
        <main className="main">
                        <CabecalhoPrincipal logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png'/>

            
            <div className="banner">
                <img src='../../../images/Stranger things 1.png'></img>
            </div>
            <div className="faixa">
                <img className="icons-1" src="../../../images/image 69.png"></img>
                <p>Frete grátis nas compras acima de R$350</p>
                <hr className="linha-vertical"></hr>
                <img className="icons-2" src="../../../images/image 70.png"></img>
                <p>Parcele em até 10x sem juros nas compras acima de R$599</p>
                <hr className="linha-vertical"></hr>
                <img className="icons-3" src="../../../images/image 22.png"></img>
                <p>Troque ou devolva suas compras com facilidade no site</p>
            </div>
            <div className="buscados">
                <img className="degrade" src="../../../images/nuvem degrade.png"></img>
                <h1>Produtos mais buscados</h1>
                <div className="setas">
                    <img src="../../../images/Vector.png"></img>
                    <img className="seta2" src="../../../images/Vector2.png"></img>
                </div>
                <div>
                    <h2>Encontre produtos incríveis!</h2>
                    <div>
                        <img src="../../../images/card narutooo.png"></img>
                        <Link to='/Menu' className="Tema1" >Naruto</Link>
                        <img src="../../../images/card marvel.png"></img>
                        <Link to='/Menu' className="Tema2" >Marvel</Link>
                        <img src="../../../images/card harry potter.png"></img>
                        <Link to='/Menu' className="Tema3" >Harry Potter</Link>
                        <img src="../../../images/card queen.png"></img>
                        <Link to='/Menu' className="Tema4" >Queen</Link>
                    </div>
                    <div>
                        <img src="../../../images/cardBts.png"></img>
                        <Link to='/Menu' className="Tema3" >BTS</Link>
                        <img src="../../../images/card rick e morty.png"></img>
                        <Link to='/Menu' className="Tema5" >Rick e Morty</Link>
                        <img src="../../../images/card dragon ball.png"></img>
                        <Link to='/Menu' className="Tema1" >Dragon Ball</Link>
                        <img src="../../../images/card dc.png"></img>
                        <Link to='/Menu' className="Tema6" >DC</Link>
                    </div>
                </div>
            </div>
            <div className="Bem-vindo">
                <img className="galaxia" src="../../../images/galaxia.png"></img>
                <h3>Bem-vindo a GeekPlanet, a Maior Loja Geek do Brasil!</h3>
                <p className="texto">A ideia de criar uma loja virtual voltada para a cultura pop veio de um grupo de amigas nerds. Nosso objetivo é trazer produtos com qualidade, buscando valorizar as obras que os estampam.</p>
            </div>
            <img className="ondulação" src="../../../images/ondulação.png"></img>
            <div className="rodapé">
                <h4>Nos siga nas redes sociais</h4>
                <hr className="linha"></hr>
                <div className="icons">
                    <img src="../../../images/insta.png"></img>
                    <img src="../../../images/face.png"></img>
                    <img src="../../../images/whats.png"></img></div>
            </div>
        </main>
    )
}
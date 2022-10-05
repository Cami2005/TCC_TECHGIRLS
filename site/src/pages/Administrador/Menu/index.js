import { Link } from "react-router-dom";
import "../../../common/common.scss"
import "./index.scss"

export default function Index(){
    return(
        <main className="main">
            <div className="cabeçalho">
                <img className="logo" src='../../../images/logoAdmin.png'></img>
                <img className='icons' src='../../../images/menu.png'></img>
                <input className='busca' placeholder='encontre seu produto aqui' type='text'/>
                <img className='icons' src='../../../images/favoritos.png'></img>
                <img className='icons' src='../../../images/user.png'></img>
                <img className='icons' src='../../../images/sacola.png'></img>
            </div>
            <div className="banner">
                <img src='../../../images/Stranger things 1.png'></img>
            </div>
            <div className="faixa">
                <img className="icons-1" src="../../../images/image 69.png"></img>
                <p>Frete grátis nas <br/>compras <br/>acima de R$350</p>
                <hr className="linha-vertical"></hr>
                <img className="icons-1" src="../../../images/image 70.png"></img>
                <p>Parcele em até 10x sem juros <br/>nas compras acima de R$599</p>
                <hr className="linha-vertical"></hr>
                <img className="icons-1" src="../../../images/image 22.png"></img>
                <p>Troque ou devolva suas compras <br/>com facilidade no site</p>
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
                        <button>Naruto</button>
                        <img src="../../../images/card marvel.png"></img>
                        <button>Marvel</button>
                        <img src="../../../images/card harry potter.png"></img>
                        <button>Harry Potter</button>
                        <img src="../../../images/card queen.png"></img>
                        <button>Queen</button>
                    </div>
                    <div>
                        <img src="../../../images/cardBts.png"></img>
                        <button>BTS</button>
                        <img src="../../../images/card rick e morty.png"></img>
                        <button>Rick e Morty</button>
                        <img src="../../../images/card dragon ball.png"></img>
                        <button>Dragon Ball</button>
                        <img src="../../../images/card dc.png"></img>
                        <button>DC</button>
                    </div>
                </div>
            </div>
            <div className="Bem-vindo">
                <img src="../../../images/galaxia.png"></img>
                <h3>Bem-vindo a GeekPlanet, a Maior Loja Geek do Brasil!</h3>
                <p className="texto">A ideia de criar uma loja virtual voltada para a cultura pop veio de um grupo de amigas nerds. Nosso objetivo é trazer produtos com qualidade, buscando valorizar as obras que os estampam.</p>
            </div>
            <img className="ondulação" src="../../../images/ondulação.png"></img>
            <div className="rodapé">
                <h4>Nos siga nas redes sociais</h4>
                <hr></hr>
                <img src="../../../images/insta.png"></img>
                <img src="../../../images/face.png"></img>
                <img src="../../../images/whats.png"></img>
            </div>
        </main>
    )
}
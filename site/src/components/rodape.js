import './rodape.scss';

export default function Rodape(){
    return(
        <main>
            <img className="ondulacao" src="../../../images/ondulação.png"></img>
            <div className="rodapé">
                <h4>Nos siga nas <span className='cor'>redes sociais</span></h4>
                <hr className="line"></hr>
                <div className="icons-rodape">
                    <img  className='icon-rodape' src="../../../images/insta.png"></img>
                    <img  className='icon-rodape' src="../../../images/face.png"></img>
                    <img  className='icon-rodape' src="../../../images/whats.png"></img>
                </div>
            </div>
        </main>
    )
}
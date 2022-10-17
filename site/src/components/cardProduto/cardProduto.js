import './cardProduto.scss'

export default function CardProduto(props){
    return(
        <div className="cardprd">

            <img src="" alt=""/>
            <h6> {props.nome} Nome </h6>
            <h6> {props.preco} Preço </h6>
        
        </div>
    )
}
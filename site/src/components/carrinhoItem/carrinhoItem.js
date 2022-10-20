import './carrinhoItem.scss'


export default function CarrinhoItem(props){
    
    return(
        <div>
            <div>
                <p>{props.item.produto.info.tema}</p>
            </div>

            <div>
                <p>{props.item.produto.info.nome}</p>
            </div>
            <div>
                <p>R${props.item.produto.info.preco}</p>
            </div>
            <div>
                <p>categoria</p>
            </div>

        </div>
    )
} 
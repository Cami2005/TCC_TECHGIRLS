import "./boxProduto.scss"

export default function BoxProduto(props){
    return (
        <div className="boxproduto">
            
            <img className="imgbox" src={props.img} alt=''/>
            
            <h1> {props.nome} </h1>
            <h1> {props.preco} </h1>

            <div>
                <button onClick={props.clickdelete}> 
                    <img src="./images/lixeira.png" alt=""/>
                </button>  
            
                <button onClick={props.clickedit}> 
                    <img src="./images/editar.png" alt=""/>
                </button>  
            </div>   

        </div>
    )
}
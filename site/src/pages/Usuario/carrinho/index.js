import { useEffect, useState } from "react"
import Storage from 'local-storage'
import { buscarPorId } from "../../../API/Usuario";
import CarrinhoItem from "../../../components/carrinhoItem/carrinhoItem";

export default function Index(){
    const[itens, setItens] = useState([]);
    
    async function CarregarCarrinho(){
        let carrinho= Storage('carrinho')
        if(carrinho){
            let temp= [];
            for(let produto of carrinho){
               let p = await buscarPorId(produto.id);
                temp.push({
                    produto: p,
                    qtd: produto.qtd,

                })
            }
            console.log(temp)
            setItens(temp)
        }
    }

    useEffect(() => {
        CarregarCarrinho();
    }, [])
    return(
        <main>
            <h1>Sacola</h1>

            <div className="sacola">

                <div className="itens">
                    {itens.map(item =>
                        <CarrinhoItem item={item}/>
                        )}
                </div>

            </div>
        </main>
    )
}
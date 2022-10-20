
import { useEffect, useState } from "react"
import Storage from 'local-storage'
import { buscarPorId } from "../../../API/Usuario";
import CarrinhoItem from "../../../components/carrinhoItem/carrinhoItem.js";

export default function Index(){
    const[itens, setItens] = useState([]);

    function removerItem(id) {
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        CarregarCarrinho();
    }
    
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
                        <CarrinhoItem item={item} removerItem={removerItem}/>
                        )}
                </div>

            </div>
        </main>
    )
}
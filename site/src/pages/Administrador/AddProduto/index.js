import MenuAdmin from "../../../components/pagAdm.js";
import "./index.scss";
import "../../../common/common.scss";

export default function Index() {
    return (
        <main className="inserirProduto">

                <MenuAdmin logo='../../../images/logoAdmin.png'/>

                <div className="informacoes-produto">

                    <h1> Adicionar Produto </h1>

                    <div className="inserir">

                        <div className="div1">
                            <div className="flex-column">
                                <label> Código do Produto </label>
                                <input  className="input"/>
                            </div>

                            <div className="flex-column">
                                <label> Nome do Produto </label>
                                <input  className="input"/>
                            </div>

                            <div className="flex-column">
                                <label> Descrição do Produto </label>
                                <textarea  maxLength={100} className="textarea"/>
                            </div>

                            

                            <div className="flex-row space-between">
                                <div className="select-tamanho">
                                    <label> Categoria:</label>
                                    <select className="select">
                                        <option> Vestimenta </option>
                                    </select>
                                </div>

                                <div className="select-tamanho">
                                    <label> Tema: </label>
                                    <select className="select">
                                        <option> Harry Potter </option>
                                    </select>
                                </div>
                            </div>

                            

                            <div className="div-array">
                                <label> Cor </label>
                                <div className="flex-row">
                                    <input className="input"/> <button className="button-ok"> OK </button>
                                </div>
                            </div>

                            <div className="div-array">
                                <label> Tamanhos </label>
                                <div className="flex-row">
                                    <input className="input"/> <button className="button-ok"> OK </button>
                                </div>  
                            </div>

                            <div className="flex-column"> 
                                <label > Valor </label>
                                <input className="input"/>
                            </div>

                            <div>
                                    <div> <label >Disponível ?</label> <input type='checkbox'/> </div>
                            </div> 
                        </div>

                        <div className="div2">
                            <div>
                                <label> Foto de destaque</label>
                                <input/>
                            </div>

                            <div> 
                                <label> Fotos extras </label>
                                <input/>
                            </div>
                        </div>


                    </div>

                    <button  className="button centralizar"> Adicionar </button>

                </div>

                
        </main>

    )
}
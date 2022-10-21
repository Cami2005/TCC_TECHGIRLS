import MenuAdmin from "../../../components/pagAdm";
import DeletarItem from "../../../components/delete";
import BoxProduto from "../../../components/boxProduto";
import { API_URL } from "../../../API/config.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

export default function Index() {

    return (
        <main className="catalogo">

            <div className="banners">
                <h2> EDIÇÃO DE CATÁLOGO </h2>

                <h1> ALTERE OS BANNERS </h1>
                <button> Novo banner </button>

                <div className="ban-container"> 
                    <img className="ban-img" src=""> </img>

                </div>
            </div>

            <div className="destaq"> 
              <h1> ALTERE OS PRODUTOS EM DESTAQUE </h1>
              <button> Selecionar destaque </button>

              <div className="produto-destaq" >
                <img className="img-destaq" src=""> </img>
                <h1> NOME DO PRODUTO</h1>
                <img className="vetor-des" src=""> </img>
              </div>

            </div>
        </main>
    )
}
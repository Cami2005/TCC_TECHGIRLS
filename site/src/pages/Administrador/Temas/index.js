import MenuAdmin from "../../../components/pagAdm";
import Delete from "../../../components/delete";
import { API_URL } from "../../../API/config.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

export default function Index() {

    return (
        <main className="temas">
            <MenuAdmin logo='../../../images/logoAdmin.png'/>
            <h2> TEMAS </h2>
            <div className="tema-container">
                <img className="tema-img" src=""> </img>


            </div>
        </main>


    )
}
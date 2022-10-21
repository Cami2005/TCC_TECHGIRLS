import MenuAdmin from "../../../components/pagAdm.js";
import "./index.scss";
import {  useEffect, useState } from "react";
import DeletarItem from "../../../components/delete.js";
import { API_URL } from "../../../API/config.js";

export default function Index() {
    return (
        <main>
            <MenuAdmin> </MenuAdmin>
            <h2> ADICONAR TEMA </h2>
        </main>
    )
}

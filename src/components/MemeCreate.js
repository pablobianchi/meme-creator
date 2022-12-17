import React from "react";
import { useParams } from "react-router-dom";

//TODO: mostrar imagen
//TODO: cargar texto
//TODO: exportar
const MemeCreate = () => {

    let { id } = useParams();

    return (
    <h1>Edici&oacute;n del Meme {id}</h1>
    )
}

export default MemeCreate;
import { useParams } from "react-router-dom";
import React, {useState} from 'react';
import html2canvas from 'html2canvas';

//TODO: cargar texto
//TODO: exportar
//TODO: texto color, font, etc


/**
 * la api que estoy usando no me provee un método para consultar por ID por lo cual como lo único que por 
 * ahora necesito es la imagen saco el nombre y me mamenejo con eso
 */
const MemeCreate = (  ) => {

    let { id } = useParams();
    
    const [texto, setTexto] = useState();

    const ingresaTexto = (e) => {
        setTexto(e.target.value);
    }

    const Descargar = (e) => {
        html2canvas(document.querySelector("#memeUsuario"), {
            allowTaint: true,
            useCORS: true,
          }).then(function(canvas) {
          
            let img = canvas.toDataURL("image/jpg");
            let link = document.createElement("a");
            link.download = "memepropio.jpg";
            link.href = img;
            link.click();
        });

    }


    return (
        <div>
            <h1>Edici&oacute;n del Meme {id}</h1>
            <div id="memeUsuario" >
            <p >{texto} </p>
                <figure>
                    <img src={`https://i.imgflip.com/${id}`} width="300" height="300"/>
                </figure>
            </div>
            <br/>
            <input type="text" onChange={ingresaTexto}></input>
            <br/>
            <button onClick={Descargar} type="button" className='btn btn-primary mt-4 mb-4'>Descargar meme</button>
        </div>
    )
}

export default MemeCreate;
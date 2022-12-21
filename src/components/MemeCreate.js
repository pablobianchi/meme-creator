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
    const [textoColor, setTextoColor] = useState('black');
    const [textoTamanio, setTextoTamanio] = useState('20px');
    const [textoPosicion, setTextoPosicion] = useState('20px');

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

    const seleccionarColor = ( e ) => {
        setTextoColor(e.target.value);
    }

    const seleccionarTamanio = ( e ) => {
        setTextoTamanio(e.target.value);
    }

    const seleccionarPosicion = ( e ) => {
        setTextoPosicion(e.target.value);
    }

    const textoStyle= {
        color: textoColor,
        fontSize: textoTamanio,
        position: 'absolute',
        marginTop: textoPosicion
      };




    return (
        <div>
            <h1>Edici&oacute;n del Meme {id}</h1>
            <div id="memeUsuario" >
            <p style={textoStyle}>{texto} </p>
                <figure>
                    <img src={`https://i.imgflip.com/${id}`} width="300" height="300"/>
                </figure>
            </div>
            <br/>
            <input type="text" onChange={ingresaTexto}></input>
            <br/>
            Color : <select onChange={seleccionarColor}>
                <option value="black">Negro</option>
                <option value="red">Rojo</option>
                <option value="blue">Azul</option>
                <option value="green">Verde</option>
                <option value="yellow">Amarillo</option>
            </select>
            <br/>
            Tama&ntilde;o : <select onChange={seleccionarTamanio}>
                <option value="20px">20 px</option>
                <option value="40px">40 px</option>
                <option value="60px">60 px</option>
                <option value="80px">80 px</option>
                <option value="100px">100 px</option>
            </select>
            <br/>
            Posici&oacute;n : <select onChange={seleccionarPosicion}>
                <option value="10px">Arriba</option>
                <option value="120px">Centro</option>
                <option value="270px">Abajo</option>
            </select>
            <br/>
            <button onClick={Descargar} type="button" className='btn btn-primary mt-4 mb-4'>Descargar meme</button>
        </div>
    )
}

export default MemeCreate;
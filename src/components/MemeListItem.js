import {Link} from 'react-router-dom';

//TODO: ver de mostrar alguna otra data sobre el meme

/**
 * la api que estoy usando no me provee un método para consultar por ID por lo cual como lo único que por 
 * ahora necesito es la imagen saco el nombre y me mamenejo con eso
 */
const MemeListItem = ({imagen, titulo, id}) => {    

    let nombre_imagen = imagen.substring(imagen.lastIndexOf('/')+1);


    return (
        <div>
            <Link to={`crear-meme/${nombre_imagen}`}>
                <img src={imagen} width="300" height="300"/>
                <span>{titulo}</span>
            </Link>
        </div>

    )
}

export default MemeListItem;
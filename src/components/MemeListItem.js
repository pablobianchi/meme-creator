import {Link} from 'react-router-dom';

//TODO: ver de mostrar alguna otra data sobre el meme

/**
 * la api que estoy usando no me provee un método para consultar por ID por lo cual como lo único que por 
 * ahora necesito es la imagen saco el nombre y me mamenejo con eso
 */
const MemeListItem = ({imagen, titulo, id}) => {    

    let nombre_imagen = imagen.substring(imagen.lastIndexOf('/')+1);

    return (
        <>
        <Link to={`crear-meme/${nombre_imagen}`}>
        <div className="col">
            <div className="card shadow-sm">
                <img src={imagen} className="img-fluid" style={{maxHeight:'250px'}} alt={`IMAGEN${nombre_imagen}`}/>
                <div className="card-body">
                    <p className="card-text">{titulo}</p>
                    
                </div>
            </div>
        </div>
           </Link>
       
        </>

    )
}

export default MemeListItem;
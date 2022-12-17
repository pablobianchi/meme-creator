import {NavLink} from 'react-router-dom';
import MemeListItem from './MemeListItem';

//TODO: armar una grilla responsive y prolija
//TODO : invocar a la API para traer dinamicamente un listado de Memes
const MemeList = () => {    

    return (
        <div>
            <h1>Listado de Memes</h1>
            <MemeListItem imagen="https://i.imgflip.com/1bgw.jpg" id="1" />
            <MemeListItem imagen="https://i.imgflip.com/4acd7j.png" id="2" />
            <MemeListItem imagen="https://i.imgflip.com/2wifvo.jpg" id="3" />
            <MemeListItem imagen="https://i.imgflip.com/4t0m5.jpg" id="4" />
            <MemeListItem imagen="https://i.imgflip.com/hmt3v.jpg" id="5" />
        
            <NavLink to={'/crear-meme'} className="navbar-brand" >Crear Meme</NavLink>
        </div>

    )
}

export default MemeList;
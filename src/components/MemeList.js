import {NavLink} from 'react-router-dom';
import MemeListItem from './MemeListItem';
import React, {useState, useEffect} from 'react';


//TODO: armar una grilla responsive y prolija
//TODO: pasar el PATH de la API al .env
const MemeList = () => {    

    const [memes, setMemes] = useState([]);
    
    useEffect(() => {

        if( memes.length === 0 ){
            fetch("https://api.imgflip.com/get_memes")
                .then(data => data.json())
                .then(json => setMemes(json.data.memes))
                .catch(err => console.log('Solicitud fallida', err));    
        } 
    }, []);


    return (
        <div>

            <h1>Listado de Memes</h1>
            {memes.map(meme =>(
                <MemeListItem imagen={meme.url} titulo={meme.name} key={meme.id} id={meme.id} />
            ))}
            <NavLink to={'/crear-meme'} className="navbar-brand" >Crear Meme</NavLink>
        </div>

    )
}

export default MemeList;
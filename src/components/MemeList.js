import {NavLink} from 'react-router-dom';
import MemeListItem from './MemeListItem';
import React, {useState, useEffect} from 'react';


//TODO: armar una grilla responsive y prolija
//TODO: pasar el PATH de la API al .env
const MemeList = () => {    

    const [memes, setMemes] = useState([]);
    
    useEffect(() => {

            fetch("https://api.imgflip.com/get_memes")
                .then(data => data.json())
                .then(json => setMemes(json.data.memes))
                .catch(err => console.log('Solicitud fallida', err));    
    }, []);


    return (
        <>

<main>

  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Listado de Memes</h1>
      </div>
    </div>
  </section>

    <div className="album py-5 bg-light">
        <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                


                    {memes.map(meme =>(
                        <MemeListItem imagen={meme.url} titulo={meme.name} key={meme.id} id={meme.id} />
                    ))}


            </div>
        </div>
    </div>


           
        

            </main>
        </>

    )
}

export default MemeList;
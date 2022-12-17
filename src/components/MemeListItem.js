import {Link} from 'react-router-dom';

//TODO: ver de mostrar alguna otra data sobre el meme
const MemeListItem = ({imagen, id}) => {    

    return (
        <div>
            <Link to={`crear-meme/${id}`}>
                <img src={imagen} width="300" height="300"/>
            </Link>
        </div>

    )
}

export default MemeListItem;
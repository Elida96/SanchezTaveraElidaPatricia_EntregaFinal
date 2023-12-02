import React,{ useContext } from "react";
import { Link } from 'react-router-dom'
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContext(ContextGlobal);
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "ADD_TO_FAVORITES", payload: { id, name, username } });
    return;
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link className ="card-content" to = {`/dentist/${id}`}>
          <img src="../../public/images/doctor.jpg"/>
          <p> {name}</p>
          <p><strong>User: </strong>{username}</p>
        </Link>
      

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton"><img className="fav" src="../../public/images/favorites.png"></img></button>
    </div>
  );
};

export default Card;

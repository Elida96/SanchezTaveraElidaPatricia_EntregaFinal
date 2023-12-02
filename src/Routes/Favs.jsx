import { useEffect } from "react";
import React,{ useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state,dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    dispatch({ type: "GET_FAVORITES_FROM_STORAGE" });
  }, []); // Este efecto se ejecuta una vez al montar el componente

  return (
    <div className="favorites"style={{ background: state.theme === "dark" ? "#333333" : "#ffffff", color: state.theme === "dark" ? "#ffffff" : "#333333" }}>
      <h1>Dentists Favs</h1>
      <div className="card-fav">
      {Array.isArray(state.favorites) && state.favorites.length === 0 ? (
      <p>No tienes dentistas destacados.</p>
    ) : (
        state.favorites.map((dentist) => (
          <Card 
          key={dentist.id} 
          name ={dentist.name} 
          username={dentist.username} 
          id ={dentist.id} />
        ))
      )}
      </div>
    </div>
  );
};

export default Favs;

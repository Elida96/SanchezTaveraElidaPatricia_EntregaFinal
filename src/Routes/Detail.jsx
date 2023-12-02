import React, { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const { state } = useContext(ContextGlobal);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlAPI= `https://jsonplaceholder.typicode.com/users/${params.id}`
        const response = await fetch(urlAPI);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    fetchData();
  }, []);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className="detail" style={{ background: state.theme === "dark" ? "#333333" : "#ffffff", color: state.theme === "dark" ? "#ffffff" : "#333333" }}>
       

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {data ? (
          <div className="detail-item">
            <img src="../../public/images/doctor.jpg"/>
            <p><strong>Nombre: </strong>{data.name}</p>
            <p><strong>Email: </strong>{data.email}</p>
            <p><strong>Telefono: </strong>{data.phone}</p>
            <p><strong>Sitio Web: </strong>{data.website}</p>
          </div>
       
      ) : (
        <p>Cargando....</p>
      )}
    </div>
  )
}

export default Detail
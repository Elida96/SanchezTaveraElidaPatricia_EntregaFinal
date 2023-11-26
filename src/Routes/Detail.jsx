import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState(null);
 
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
    <div className="detail">
       

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

import Card from '../Components/Card'
import React, { useEffect, useState,useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [data, setData] = useState(null);
  const { state } = useContext(ContextGlobal);
  const urlAPI= 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlAPI);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    fetchData();
  }, []);





  return (
    <main className="" style={{ background: state.theme === "dark" ? "#333333" : "#ffffff", color: state.theme === "dark" ? "#ffffff" : "#333333" }} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data && data.map((odontologo)=>{
          return (
            <Card
               key={odontologo.id}
              name ={odontologo.name} 
              username={odontologo.username} 
              id ={odontologo.id}
              />
          )
        }
          
        
        )}
        
      </div>
    </main>
  )
}

export default Home
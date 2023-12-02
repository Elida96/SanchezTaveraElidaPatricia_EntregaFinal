import React,{  useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div className='contact' style={{ background: state.theme === "dark" ? "#333333" : "#ffffff", color: state.theme === "dark" ? "#ffffff" : "#333333" }}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus dudas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact
import React, { useState } from "react";

const Form = () => {
  // Aquí deberán implementar el formulario completo con sus validaciones
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [validEmail, setIsValidEmail] = useState(true);
    const [validNombre, setIsValidNombre] = useState(true);
    const [validForm, setIsValidForm] = useState(null); // Cambiado a null
    const [formSubmitted, setFormSubmitted] = useState(false); // Cambiado a false

    
    const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar nombre
    const isNombreValid = nombre.trim().length >= 5;
    setIsValidNombre(isNombreValid);


    // Validar email (formato de email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email.trim());
    setIsValidEmail(isEmailValid);

    // Validar si los campos del formulario son válidos
    if (isNombreValid && isEmailValid) {
      setIsValidForm(true);
      // Marcar que el formulario se ha enviado solo si es válido
      setFormSubmitted(true);
    } else {
      setIsValidForm(false);
      // Marcar que el formulario no se ha enviado correctamente si no es válido
      setFormSubmitted(false);
    }
    
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit} autoComplete="off">
        
        <div className="form-group">
          <label htmlFor='nombre'>Nombre </label>
          <input
          type='text'
          placeholder="Ingresar Nombre"
          id='nombre'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          />
          {!validNombre && <p className="error-message">El nombre debe tener al menos 5 caracteres</p>}
        </div>
       
        <div className="form-group">
          <label htmlFor='email'>Correo </label>
          <input
            type='text'
            placeholder='Ingresar Email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {!validEmail && <p className="error-message">Ingrese un correo electrónico válido</p>}
        </div>
        
        <input className="button" type="submit" value="Enviar datos" />
      </form>
      {formSubmitted && validForm === true && (
        <h3 className="success-message">Gracias {nombre}, te contactaremos cuanto antes via Email</h3>
      )}
      {formSubmitted && validForm === false && (
        <div className="error-message">Por favor, corrija los errores en el formulario.</div>
      )}

    </div>
    
  );
};

export default Form;

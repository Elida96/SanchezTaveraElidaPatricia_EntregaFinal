import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const { theme, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'CHANGE_THEME', payload: newTheme });
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar
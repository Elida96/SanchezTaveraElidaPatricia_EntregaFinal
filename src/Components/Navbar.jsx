import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav  style={{ background: state.theme === "dark" ? "#333333" : "#ffffff", color: state.theme === "dark" ? "#ffffff" : "#333333" }}>
      <Link to='/home'><img src='../../public/DH.ico'/></Link>
      <ul>

        <li>
            <Link to='/home' >Home</Link>
        </li>

        <li>
            <Link to='/contacto' >Contact</Link>
        </li>

        <li>
            <Link to='/favs' >Favorites</Link>
        </li>

      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar
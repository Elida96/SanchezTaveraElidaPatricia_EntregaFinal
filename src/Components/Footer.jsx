// import React from 'react'
import '../index.css'
import {useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
const Footer = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <footer style={{ background: state.theme === "dark" ? "#333333" : "#ffffff", color: state.theme === "dark" ? "#ffffff" : "#333333" }}>
      <div className='footer-top'>
        <p>Powered by</p>
        <img className="logo" src="../../public/images/DH.png" alt='DH-logo' />
      </div>       
        <div>
          <a href='https://web.facebook.com/'>
            <img className='redes' src="../../public/images/ico-facebook.png" alt="" />
          </a>
          <a href='https://www.instagram.com/'>
            <img className='redes' src="../../public/images/ico-instagram.png" alt="" />
          </a>
          <a href='https://www.tiktok.com/'>
            <img className='redes' src="../../public/images/ico-tiktok.png" alt="" />
          </a>
          <a href='https://www.whatsapp.com/'>
            <img className='redes' src="../../public/images/ico-whatsapp.png" alt="" />
          </a>
        </div>
    </footer>
  )
}

export default Footer

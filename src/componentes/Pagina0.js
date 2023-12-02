import React from 'react'
import '../../src/styles.css';
import logo from '../../src/img/logo.png'
import App from '../../src/App.js'

export default function Pagina0() {
    return (
      <div>
       
        <div className='main-principal'>
        <img height="90%" src={logo} alt="logo"></img> <br></br>

        <code>RESTAURANTE EXFOMEADOS</code> <br></br>

        <button href="" id="acesso-cardapio">ACESSAR CARDÁPIO</button> 
       </div>
     </div>
   

      
    );
}
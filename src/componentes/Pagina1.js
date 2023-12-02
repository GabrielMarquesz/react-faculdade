import React from 'react'
import logo from '../../src/img/logo.png'
import coxinha from '../../src/img/coxinha.jpeg'
import coxinha1 from '../../src/img/coxinhaum.jpeg'
import coxinha2 from '../../src/img/coxinhadois.jpeg'
import icone from '../../src/img/img-menu.png'

import '../../src/styles.css';




export default function Pagina1() {
    return (
      <div>
        <h3 id="titulo"> Cardapio - EXFOMEADOS</h3>

        <div className='container-cardapio'>
        
        <div className='img-adicionar'>
            <img height="260vh" id="salgados" src={coxinha2} alt="logo"></img>
            <img height="35rem" width="35rem" id="" src={icone} alt="logo"></img>
            <b color='white'>Adicionar</b>
        </div>
        <br></br>
        
        <div className='img-adicionar'>
            <img height="260vh" id="salgados" src={coxinha} alt="logo"></img>
            <img height="35rem" width="35rem" id="" src={icone} alt="logo"></img>
            <b>Adicionar</b>
        </div>
        <br></br>
        
        <div className='img-adicionar'>
            <img height= "260vh" id="salgados" src={coxinha1} alt="logo"></img>
            <img height="35rem" width="35rem" id="" src={icone} alt="logo"></img>
            <b>Adicionar</b>
        </div>
         <br></br>

        </div>

      </div>
    );
}

import logo from './img/logo.png'
/*import { useOutsideClick } from './useOutsideClick'*/
import './styles.css';
import React,{useState,useEffect} from 'react'

import Pagina0 from './componentes/Pagina0'
import Pagina1 from './componentes/Pagina1'
import Pagina2 from './componentes/Pagina2'

export default function App() {

    //links e rota//
    const [pagina,setpagina] = useState(0)

    useEffect(
      ()=>{
        const url= window.location.href
        const res= url.split('?')
        setpagina(res[1])
      }
    )

  const LinksPaginas=(p)=>{
    if(p==1) {
     window.open('http://localhost:3000?1','_self')

     } else if(p==2){
      window.open('http://localhost:3000?2','_self')
     } 
    }
  
  const retornarPagina=()=>{
    if(pagina==0){
      return <Pagina0/>
    }else if(pagina==1){
     return <Pagina1/>
    }else if(pagina==2){
      return <Pagina2/>
    }else{
      return  <div>
                 <button onClick={()=>LinksPaginas(0)} id="botoes"> pag0 </button>
                 <button onClick={()=>LinksPaginas(1)} id="botoes"> pag1 </button>
                 <button onClick={()=>LinksPaginas(2)} id="botoes"> pag2 </button>
              </div>
    }
  }
 
  

  return (
    
    <div>
    {retornarPagina()}

    <div className='main-principal'>
    <img height="90%" src={logo} alt="logo"></img> <br></br>

    <code>RESTAURANTE EXFOMEADOS</code> <br></br>

    <button onClick={()=>LinksPaginas(1)} id="acesso-cardapio"> ACESSAR CARDÁPIO </button> 
   </div>
       
       
  </div>

   


 
  );

}



























/*
<div className="container">
     <div className="menu-container">
       
        <a className="menu-button">
          <span></span>
          <img width="50px" height="50px" src={logo} alt="menu"></img>
        </a>

        <nav 
          ref={dropDownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
        <ul>
          <li>
            <div>
            <button onClick={()=>LinksPaginas(1)}>cadastrar</button>
          
            <button onClick={()=>LinksPaginas(2)}>entrar</button>
            </div>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
         </ul>
         </nav>
      </div>
   
   <div className='main-principal'>
     <img height="90%" src={logo} alt="logo"></img> <br></br>

     <code>RESTAURANTE EXFOMEADOS</code> <br></br>

    <a id='acesso-cardapio' href="index.html">ACESSAR CARDÁPIO</a> <br></br>
   </div>
   </div>
       
*/
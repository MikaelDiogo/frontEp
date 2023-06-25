import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkLogos } from "../DarkLogos";

import { InputField } from "../NavBar/InputField";
import { RiContrastFill } from "react-icons/ri";

import "./styles.css";

export function NavNews() {
 
  return (
    <div className="navNews">

<div className="accessibilityField1">
         
         
       <div className="lineGreenDiv" style={{ background: 'linear-gradient(90deg, #204D37 0%, #00853B 40%)', width: '100%', height: '2.2rem', position: 'absolute', top: '0',right: '0',  }}>
         <div className="accessibilityField2">
           
           <div className='identity'>
             <span>EEEP MANOEL MANO - CRATEÚS</span>
           </div>

           <div className="iconsAccessibility">
             <RiContrastFill />
           </div>
         </div>
       </div>
       </div>

      
      <DarkLogos  />
  {/*     <div className="inputOptions">
        

     
          <div className="linksNews">
            <Link className="lines" to="">
              PRINCIPAL
            </Link>
            <Link className="lines" to="">
              SAIBA MAIS
            </Link>
            <Link className="lines" to="">
              CONTEÚDOS
            </Link>
            <Link id="adm" to="">
              FILTRAGEM
            </Link>
          </div>
        
      </div> */}
    </div>
  );
}

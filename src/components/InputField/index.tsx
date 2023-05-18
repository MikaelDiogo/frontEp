import React from "react";
import { BiSearch } from "react-icons/bi";

import './styles.css'

export function InputField(){
  return(
    <div className="inputField">
      <div className="inputGap">
      <p className="oi">O que você precisa?</p>
      </div>  
   <div className="nogap"> <input type="search" placeholder="Ex: Filtragem"/>
   <button className="buttonInput"><BiSearch  color="#fff"/></button>
    
   </div>
   
   
   
  </div>

  )
}
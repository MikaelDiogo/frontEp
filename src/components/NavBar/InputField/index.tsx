import { BiSearch } from "react-icons/bi";

import './styles.css'

export function InputField(){
  return(
    <div className="inputField">
      <div className="inputGap">
      <p className="oi">O que você precisa?</p>
      </div>  
   <div className="nogap"> <input type="search" placeholder="Ex: Filtragem"/>
   </div>
   
    <button><BiSearch size={23} color="#fff"/></button>
    
   
  </div>

  )
}
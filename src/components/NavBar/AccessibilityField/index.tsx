import { RiContrastFill } from 'react-icons/ri'
import { InputField } from '../InputField';
import '../AccessibilityField'
import './styles.css';
import "../../NavBar/AccessibilityField/toggleMenu"
import { useState } from 'react';
import{BiMenu} from "react-icons/bi";

interface AccessibilityFieldProps {
  color: 'transparentWhite' | 'green';
}

export function AccessibilityField({ color }: AccessibilityFieldProps) {
  const [btnOpen , setBtnOpen] = useState(false)
  
  return (
    <>

    
     <button className='btn-mobile' id='btn-mobile' onClick={() =>{
      setBtnOpen(!btnOpen)      
     }}>
     <BiMenu size={35} color={'#fff'}/>
      
           
     {/* <span id='sandw'></span>*/}
     </button>
     {btnOpen && (
       <div id="sorumbatico" className="sorumbatico">
      
         <a href="">PRINCIPAL</a>
         <a href="#StayContainer">SAIBA MAIS</a>
         <a href="#ApprovedCont">CONTEÚDOS</a>
         <a id="p4" href="">FILTRAGEM</a>
   
         </div>
    
         
     )}
      {color == 'transparentWhite' ?
        <div className="accessibilityField">
         
          <div className='identity'>
          
            <span>EEEP MANOEL MANO - CRATEÚS</span>
          </div>

          <div className="iconsAccessibility">
            
            <RiContrastFill/>
          </div>
        </div>
        :
        <div style={{ background: 'linear-gradient(90deg, #204D37 0%, #00853B 40%)', width: '100%', height: '2.2rem', position: 'absolute', top: '0',left: '0', padding: '0 12.18rem'}}>
          <div className="accessibilityField">
            
            <div className='identity'>
              <span>EEEP MANOEL MANO - CRATEÚS</span>
            </div>

            <div className="iconsAccessibility">
              <RiContrastFill style={{ transform: 'rotate(45deg)' }} />
            </div>
          </div>
        </div>
      }
    </>
  )
}
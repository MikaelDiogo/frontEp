import LogoEstadoDark from "../../assets/logo-estado-dark.svg"
import LogoEscolaDark from "../../assets/logo-escola-dark.svg"

import { Link } from "react-router-dom"

import './styles.css'

interface DarkLogoProps {
  size: 'sizeOne' | 'sizeTwo';
}

export function DarkLogos() {
  return (
    <>
      
        <Link to="/" className="navLogoDark">
          <img id="schoolLogoDark" src={LogoEscolaDark} alt="Logo da EEEP" style={{ height: '4.5rem' }} />
          
          
        </Link>
       
      
    </>
  )
}
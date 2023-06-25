import LogoEstadoLight from "../../assets/logo-estado-light.svg";
import LogoEscolaLight from "../../assets/logo-escola-light.svg";

import { Link } from "react-router-dom"

import './styles.css'



export function LightLogos() {
  return (
    <> 
      {
        <><Link to="/" className="navLogos">
          <img id="school" src={LogoEscolaLight} alt="Logo da EEEP" />
        </Link><Link to="/" id="logoSmall" className="navLogos">
          </Link></>
      }
    </>
  )
}
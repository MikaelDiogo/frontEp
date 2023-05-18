import LogoEstadoLight from "../../assets/logo-estado-light.svg";
import LogoEscolaLight from "../../assets/logo-escola-light.svg";

import { Link } from "react-router-dom"

import './styles.css'
import { CSSProperties } from "react";

interface LightLogoProps {
  size: 'normalLogo' | 'smallLogo';
  schoolStyle: CSSProperties;
  stateStyle: CSSProperties;
}

export function LightLogos({ size, schoolStyle, stateStyle }: LightLogoProps) {
  return (
    <> 
      {size == 'normalLogo' ?
        <Link to="/" className="navLogos">
          <img id="school" src={LogoEscolaLight} alt="Logo da EEEP" />
          <div className="dividingLineLightLogos"></div>
          <img id="state" src={LogoEstadoLight} alt="Logo do Governo do Estado do Ceará" style={{height: '6.6rem'}}/>
        </Link>
        : 
        <Link to="/" id="logoSmall" className="navLogos">
          <img id="schoolSmall" src={LogoEscolaLight} alt="Logo da EEEP" style={schoolStyle}/>
          <div className="dividingLineLightLogos"
          style={{height: '3rem'}}
          ></div>
          <img id="stateSmall" src={LogoEstadoLight} alt="Logo do Governo do Estado do Ceará" style={stateStyle}/>
        </Link>
      }
    </>
  )
}
import LogoEstadoDark from "../../assets/logo-estado-dark.svg"
import LogoEscolaDark from "../../assets/logo-escola-dark.svg"

import { Link } from "react-router-dom"

import './styles.css'

interface DarkLogoProps {
  size: 'sizeOne' | 'sizeTwo';
}

export function DarkLogos({ size }: DarkLogoProps) {
  return (
    <>
      {size == 'sizeOne' ?
        <Link to="/" className="navLogoDark">
          <img id="schoolLogoDark" src={LogoEscolaDark} alt="Logo da EEEP" style={{ height: '4.5rem' }} />
          <div className="dividingLineDarkLogos"></div>
          <img id="stateLogoDark" src={LogoEstadoDark} alt="Logo do Governo do Estado do Ceará" />
        </Link>
        :
        <Link to="/" className="navLogoDark">
          <img id="schoolLogoDark" src={LogoEscolaDark} alt="Logo da EEEP" style={{}} />
          <div className="dividingLineDarkLogos"></div>
          <img id="schoolLogoDark" src={LogoEstadoDark} alt="Logo do Governo do Estado do Ceará" style={{}} />
        </Link>
      }
    </>
  )
}
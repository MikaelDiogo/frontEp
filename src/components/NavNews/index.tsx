import { Link } from "react-router-dom";
import { DarkLogos } from "../DarkLogos";
import { AccessibilityField } from "../NavBar/AccessibilityField";
import { InputField } from "../NavBar/InputField";

import './styles.css';

export function NavNews() {
  return (
    <div className="navNews">
      <AccessibilityField color="green" />
      <DarkLogos size="sizeOne" />
      <div className='inputOptions'>
        <InputField model="navNews" />
        <div className="linksNews">
          <Link className="lines" to='/curso/informatica'>Informática</Link>
          <Link className="lines" to='/curso/enfermagem'>Enfermagem</Link>
          <Link className="lines" to='/curso/comercio'>Comércio</Link>
          <Link id="adm" to='/curso/administracao'>Administração</Link>
        </div>
      </div>
    </div>
  )
}
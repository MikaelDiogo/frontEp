import { AccessibilityField } from "./AccessibilityField";
import { LightLogos } from "../LightLogos";
import { NavActions } from './NavActions';


import './styles.css'
import '../NavBar/AccessibilityField'


export function NavBar(){
  return(
    <div className="container" id="#navBarHome">
      <AccessibilityField color="transparentWhite" />
      <div className="navBar">
        <LightLogos /> 
      <div className="actions">
        
        <NavActions />
      </div>
    </div>  
  </div>
  )
}
import { useState } from "react";

import { SlMenu } from "react-icons/sl";

import { MenuOptions } from "../MenuOptions";
import { InputField } from "../NavBar/InputField";
import { NavActions } from "../NavBar/NavActions";
import "./styles.css"
import "../NavBar/AccessibilityField/index"
import { Link } from "react-router-dom";
import { Approved } from "../Approveds";


export function SecondNav() {
 

  return (
    <div id="secondNav" className="secondNav">
      <div className="inputFieldC">
      <InputField  />
      </div>
      <div id="sorum" className="sorumbatico">
      
     <a href="">PRINCIPAL</a>
      <a href="#StayContainer">SAIBA MAIS</a>
      <a href="#ApprovedCont">CONTEÚDOS</a>
      <a id="p4" href="">FILTRAGEM</a>

      </div>
      
    </div>
  );
}

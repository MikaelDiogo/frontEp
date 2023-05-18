import { useState } from "react";

import { SlMenu } from "react-icons/sl";

import { MenuOptions } from "../MenuOptions";
import { InputField } from "../NavBar/InputField";
import { NavActions } from "../NavBar/NavActions";
import "./styles.css"
import "../NavBar/AccessibilityField/index"




export function SecondNav() {
 

  return (
    <div id="secondNav" className="secondNav">
      <div className="inputFieldC">
      <InputField  />
      </div>
      <div  className="sorumbatico">
      
      <a href="">PROJETO 1</a>
      <a href="">PROJETO 2</a>
      <a href="">PROJETO 3</a>
      <a id="p4" href="">PROJETO 4</a>

      </div>
      
    </div>
  );
}

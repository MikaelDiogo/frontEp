import { LightLogos } from "../LightLogos";

import "./style.css";
import "./FilterF"
import Descript from "../DescriptionUbs";
import { changeMap, changeMap10, changeMap11, changeMap12, changeMap15, changeMap16, changeMap2, changeMap3, changeMap4, changeMap5, changeMap6, changeMap7, changeMap8, changeMap9, CheckTrueC, CheckTrueH, CheckTrueLab, CheckTruePS, cleanFilter } from "./FilterF";
import { Channel } from "diagnostics_channel";

export function FilterMain() {
  
 

  return (


      <div className="globalFilter">
    <div className="filterMain">
      
        {/* <div className="functionFilter">
          <h2>Explicação do Sistema de Filtragem</h2>
        </div> */}
      
      <div className="FilterSpace">
        <div className="FilterGreen">
        <p>Filtragem</p>
      <h2 >Busque por serviços de saúde em Crateús</h2>
          
         
      </div>
      
      <div className="map"><iframe  className="iframef" id="iFrameMap" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15894.160369445819!2d-40.664522243817196!3d-5.177408138612646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20de%20saude%20em%20crateus!5e0!3m2!1spt-BR!2sbr!4v1684020415493!5m2!1spt-BR!2sbr" width="800" height="600"  loading="lazy"></iframe></div>
    
      </div>
        <div className="RightFilter">
        
        <h2 className="whatServ">Qual Serviço de saúde você está buscando?</h2>
        <div className="FilterGap">
        <div className="serviceFilterGlobal">
        <h1 className="whatserv2">Qual Serviço de saúde você está buscando?</h1>
        <div className="ServicesFilter">

        
        <input type="checkbox" name="" className="checkBox" id="checkBox" onClick={CheckTruePS} />
        <p id="pdS">Postos de saúde</p>
        <input type="checkbox" className="checkBox2" name="Hospitais" id="checkBox2" onClick={CheckTrueH}/>
        <p>Hospitais</p>
        
       

        </div>
        <div className="ServicesFilter2">
        <input className="checkBox3" type="checkbox" name="" id="checkBox3" onClick={CheckTrueLab} />
        <p>Laboratórios</p>
        <input className="checkBox4" type="checkbox" name="" id="checkBox4"  onClick={CheckTrueC}/>
        <p>Clínicas</p>
        
        </div>
        
        </div>
        <div className="ubsCenter">
        <h2 className="servdisp">Serviços disponíveis</h2>
            <div id="Units" className="units">
                <button onClick={changeMap}  id="PostoS" className="PostoS" ><div className="units00">
                <h4>UBS-Venâncios</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                <button onClick={changeMap2} id="PostoS2" className="PostoS"><div className="units00">
                <h4>PSF-Centro\São Vicente</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                <button onClick={changeMap3} id="PostoS3" className="PostoS"><div className="units00">
                <h4>PSF Fátima I</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                <button onClick={changeMap4} id="Hospital" className="Hospital"><div className="units00">
                <h4>UPA-Cratéus</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                <button onClick={changeMap5} id="PostoS4" className="PostoS"><div className="units00">
                <h4>PSF Maratõan</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                <button onClick={changeMap8} id="ClinicaM" className="ClinicaM"><div className="units00">
                <h4>Polimédica-Crateús</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
               {/*  <button onClick={changeMap7} id="upaDrOlavo"><div className="units00">
                <h4>UPA Dr.Olavo Cavalcante</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button> */}
               {/*  <button onClick={changeMap8} id="quinze"><div className="units00">
                <h4>15a CRES</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button> */}
                <button onClick={changeMap9} id="ClinicaM2" className="ClinicaM"><div className="units00">
                <h4>Policlínica Regional de Cratéus</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                {/* <button onClick={changeMap10} id="imlcrat"><div className="units00">
                <h4>IML-Cratéus</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button> */}
                <button onClick={changeMap11} id="Hospital2" className="Hospital"><div className="units00">
                <h4>Unimed Crateús</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                <button onClick={changeMap12} id="Hospital3" className="Hospital"><div className="units00">
                <h4>Hospital São Lucas</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                <button onClick={changeMap15} id="Laboratorio1" className="Hospital"><div className="units00">
                <h4>Laboratório ITA</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                <button onClick={changeMap16} id="Laboratorio2" className="Hospital"><div className="units00">
                <h4>Laboratório Crateús</h4> 
                <p> Aberto de 07:30 às 17:30</p>
                </div>
                </button>
                
                
            </div>
            <div className="filterActions">
                
                <button onClick={changeMap9} id="clean" className="clean">LIMPAR</button>
            </div>
            </div>
            </div>
        </div>
        
          
      </div>
            <Descript/>
      </div>
  );
}

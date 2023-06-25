import ImgSamu from "../../assets/imgs/Samu.png"
import ImgEnf2 from "../../assets/imgs/78.png" 
import ImgEnf3 from "../../assets/imgs/77.png"
import ImgEnf4 from "../../assets/imgs/79.png"
import ImgEnf5 from "../../assets/imgs/81.png"
import ImgEnf6 from "../../assets/imgs/80.png"

import "./styles.css";

export const SpecialContent = () => {
  return (
    <div id="ApprovedCont" className="approvedContainer">
      <p className="ContSpecial">Conteúdos Especiais</p>
      <div className="sixblock">
        <div className="Block">
        <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/samu-192"> <div className="magazinecont"  ><img  className="ImgEnf1" src={ImgSamu} alt="" /><a>Samu 192</a></div></a>
        <a href="https://www.hemoce.ce.gov.br/"> <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf2} alt="" /><a>Hemoce Ceará</a></div></a>
        </div> <div className="Block2">
        <a href="https://instagram.com/enfermagemeeepmm?igshid=MzRlODBiNWFlZA=="> <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf3} alt="" /><a>Enfermagem EEEP Manoel Mano</a></div></a>
        <a href="https://www.cpsmcrateus.ce.gov.br/"> <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf4} alt="" /><a>Consórcio de Saúde de Crateús</a></div></a>
        </div> <div className="Block3">
        <a href="https://www.gov.br/saude/pt-br/campanhas-da-saude/2023/vacinacao ">  <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf5} alt="" /><a>Movimento Nacional pela Vacinação</a></div></a>
        <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sus">  <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf6} alt="" /><a>SUS-Sistema Único de Saúde</a></div></a>
        </div>
      </div>
      <div className="sixblock2">
        <div className="Block4">
        <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/samu-192"> <div className="magazinecont"  ><img  className="ImgEnf1" src={ImgSamu} alt="" /><a>Samu 192</a></div></a>
        <a href="https://www.hemoce.ce.gov.br/"> <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf2} alt="" /><a>Hemoce Ceará</a></div></a>
        </div> <div className="Block5">
        <a href="https://instagram.com/enfermagemeeepmm?igshid=MzRlODBiNWFlZA=="> <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf3} alt="" /><a>Enfermagem EEEP Manoel Mano</a></div></a>
        <a href="https://www.cpsmcrateus.ce.gov.br/"> <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf4} alt="" /><a>Consórcio de Saúde de Crateús</a></div></a>
        </div> <div className="Block6">
        <a href="https://www.gov.br/saude/pt-br/campanhas-da-saude/2023/vacinacao ">  <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf5} alt="" /><a>Movimento Nacional pela Vacinação</a></div></a>
        <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sus">  <div className="magazinecont"><img className="ImgEnf1" src={ImgEnf6} alt="" /><a>SUS-Sistema Único de Saúde</a></div></a>
        </div>
      </div>
    </div>
  );
};

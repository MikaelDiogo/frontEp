import { LightLogos } from "../LightLogos";

import "./style.css";
import "../FilterMain/FilterF"

import { changeMap, changeMap10, changeMap11, changeMap12, changeMap15, changeMap16, changeMap2, changeMap3, changeMap4, changeMap5, changeMap6, changeMap7, changeMap8, changeMap9, CheckTrueC, CheckTrueH, CheckTrueLab, CheckTruePS, cleanFilter } from "../FilterMain/FilterF";
import { Channel } from "diagnostics_channel";

export function FilterMain() {
  
 

  return (

      <div className="filterFaq">
        <div className="funcFilt"></div>
        <div className="filterServs2">
              <p>O sistema de filtragem pois pensado em você que precisa de orientação quanto a localização das Unidade Básicas de Saúde em Crateús e seus respectivos serviços. Abaixo temos uma listagem dos serviços prestados pelos principais serviços de saúde</p>
            </div>
        <p className="functionFilter">O sistema de filtragem pois pensado em você que precisa de orientação quanto a localização das Unidade Básicas de Saúde em Crateús e seus respectivos serviços. Abaixo temos uma listagem dos serviços prestados pelos principais serviços de saúde</p>
          <div className="filterServs1"><p>Postos de Saúde</p> 
          
            <h4 className="PsFilter">Os principais serviços oferecidos pelas UBS são consultas médicas, inalações, injeções, curativos, vacinas, coleta de exames laboratoriais, tratamento odontológico, encaminhamentos para especialidades e fornecimento de medicação básica.</h4>
          </div>
          <div className="filterServs1"><p>Hospitais</p> 
            <h4 className="PsFilter">Os hospitais prestam uma ampla variedade de serviços relacionados à saúde. Alguns dos serviços mais comuns oferecidos pelos hospitais incluem:

Atendimento de emergência: Os hospitais geralmente têm departamentos de emergência que estão abertos 24 horas por dia para tratar casos urgentes e graves.

Internação hospitalar: Os hospitais fornecem instalações para a internação de pacientes que precisam de cuidados médicos intensivos ou cirúrgicos.

Cirurgias: Os hospitais realizam uma variedade de procedimentos cirúrgicos, desde cirurgias de rotina até cirurgias complexas e especializadas.

Consultas médicas: Os hospitais têm médicos e especialistas em diferentes áreas que oferecem consultas para diagnóstico, tratamento e acompanhamento de pacientes.

Exames diagnósticos: Os hospitais geralmente possuem equipamentos e laboratórios para realizar uma variedade de exames diagnósticos, como exames de sangue, radiografias, ressonâncias magnéticas, tomografias computadorizadas, ultrassonografias, entre outros.

Tratamentos especializados: Os hospitais podem oferecer tratamentos especializados em áreas como oncologia, cardiologia, neurologia, ortopedia, ginecologia, entre outras.

Reabilitação: Muitos hospitais possuem serviços de reabilitação, como fisioterapia, terapia ocupacional e fonoaudiologia, para ajudar pacientes a se recuperarem após lesões ou doenças.

Cuidados paliativos: Alguns hospitais têm equipes especializadas em cuidados paliativos, fornecendo suporte e conforto a pacientes em estágio terminal e seus familiares.

Saúde mental: Alguns hospitais possuem unidades de saúde mental que oferecem tratamento e suporte a pacientes com transtornos mentais.

Educação e pesquisa: Muitos hospitais também desempenham um papel importante na educação médica e na realização de pesquisas clínicas.</h4>
          
</div> <div className="filterServs1"><p>Laboratórios</p> 
            <h4 className="PsFilter">Os laboratórios desempenham um papel crucial na área da saúde, fornecendo uma variedade de serviços de diagnóstico, pesquisa e monitoramento. Alguns dos serviços comuns prestados pelos laboratórios são:

Análises clínicas: Os laboratórios clínicos realizam uma ampla gama de testes laboratoriais em amostras biológicas, como sangue, urina, fezes e fluidos corporais. Esses testes podem auxiliar no diagnóstico e monitoramento de doenças, bem como na avaliação de parâmetros de saúde.

Patologia: Laboratórios de patologia examinam amostras de tecidos e células para ajudar no diagnóstico de doenças, como câncer. Isso pode incluir exames histopatológicos, citologia e testes genéticos.

Microbiologia: Laboratórios de microbiologia analisam amostras para identificar e caracterizar microorganismos, como bactérias, vírus, fungos e parasitas. Esses testes ajudam no diagnóstico de infecções e na seleção de tratamentos apropriados.

Biologia molecular: Os laboratórios de biologia molecular realizam testes que investigam o material genético (DNA e RNA) para detectar doenças genéticas, identificar agentes infecciosos e auxiliar no desenvolvimento de terapias direcionadas.

Toxicologia: Laboratórios de toxicologia analisam amostras biológicas para identificar e quantificar substâncias tóxicas, como drogas ilícitas, medicamentos em excesso ou venenos, que possam estar presentes no organismo.

Pesquisa e desenvolvimento: Laboratórios também desempenham um papel fundamental na pesquisa científica, desenvolvimento de novos medicamentos, estudos clínicos, validação de métodos diagnósticos e investigação de novas tecnologias laboratoriais.

Testes de qualidade de alimentos e água: Alguns laboratórios realizam análises para verificar a segurança e qualidade de alimentos, bebidas e água, incluindo a detecção de contaminantes, como bactérias patogênicas, pesticidas ou metais pesados.

Banco de sangue: Laboratórios de bancos de sangue são responsáveis pela coleta, testagem e armazenamento de sangue e seus componentes para uso em transfusões e tratamentos médicos.</h4>
          </div>
          <div className="filterServs1"><p>Clínicas</p> 
            <h4 className="PsFilter">Uma clínica de saúde é uma empresa voltada a prestação de serviços e atividades relacionadas a saúde, que podem ser: odontologia, medicina, fisioterapia, nutrição, psicologia, fonoaudiologia, exames etc, ou uma integração entre elas.</h4>
          </div>

            <div className="filterServs2">
              <p>Agora que você sabe pra que servem os principais serviços de saúde, desfrute do nosso sistema de filtragem</p>
            </div>


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
          
      </div></div>
  );
}

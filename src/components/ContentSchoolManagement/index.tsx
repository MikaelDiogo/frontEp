import Avatar from "../../assets/Avata.png";
import { BackBar } from "../BackBar";
import { Footer } from "../Footer";

import { ManagementCard } from "../ManagementCard";

import "./styles.css";

const card = [
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },
  {
    img: Avatar,
    name: 'Adeilson',
    responsability: 'Professor'
  },

]

export function ContentSchoolManagement() {
  return (
    <div>
      <div id="topOfPage" style={{ position:"absolute", top:'0'}}></div>
      <div className="contentSchoolManagement">
        <h1>Grupo de Gestores e Professores</h1>
        <div className="schoolManagementCards">
          {card.map(item => {
             return <ManagementCard img={item.img} 
             name={item.name} 
             responsability={item.responsability}
          />
          })}
        </div>
      </div>
      <BackBar />
      <Footer />
    </div>
  );
}

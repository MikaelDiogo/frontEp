import './styles.css'
import iconsVacina from '../../assets/Icon-Vacinas.png'
import labsSaude from '../../assets/labs.svg'
export default function Descript(){
    return(
        <div className="descriptGlobal">
            <h2>Serviços Disponíveis</h2>
            <div className='servicesCont'>
                <div><img src={iconsVacina} alt="Postos de Saúde" /></div>
                <div><img src={labsSaude} alt="Laboratorios" /></div>
                <div><img src={iconsVacina} alt="Postos de Saúde" /></div>
                <div><img src={labsSaude} alt="Laboratorios" /></div>
            </div>
        </div> 
    );
}
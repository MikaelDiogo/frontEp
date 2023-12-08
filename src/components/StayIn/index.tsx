
import '../StayIn/styles.css'
import { Link } from 'react-router-dom'

export function StayIn (){
    return(
        <div id='StayContainer' className="StayContainer">


            <h1 className='StayH'>Saiba Mais</h1>
            <div className='space'>
            <h2 className='Stay2'>Saiba Mais</h2>
                <div className='btnLinks'><Link className='btnLink' to={'./filter'}>Filtragem</Link></div>
                <div className='btnLinks'><Link className='btnLink' to={'./descricao'}>Redes de Saúde</Link></div>
               
            </div>
           
            
        </div>
    )
}
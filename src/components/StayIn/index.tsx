
import '../StayIn/styles.css'
import { Link } from 'react-router-dom'
import { Login } from '../../pages/Login'
import { LoginHeader } from '../LoginHeader'

export function StayIn(){
    return(
        <div className="StayContainer">
            <strong>Fique por dentro</strong>
            <div className='space'>
            <div className="box1">{ <Link className='Linkclass' to={'/login'}>Filtragem</Link> }</div>
            </div>
            <div className='space2'>
            <div className="box2">Redes de Saúde em Crateús</div>
            <div className='box3'>Redes de Saúde em Crateús</div>
            
            </div>
           
            
        </div>
    )
}
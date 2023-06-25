//import { ColContent } from "./ColContent";
import { RiInstagramFill } from 'react-icons/ri'
import { FaYoutube } from 'react-icons/fa'

import './styles.css'

export function ContentFooter() {
  return (
    <div className="contentFooter">
      <div className="contentCols">
        <div className="blocksContent">
   
        </div>
        <div className="blocksContent">
          
        
        </div>
      </div>
      
      <div className="copyright">
      <div className='localFooter'>
            <h2>EEEP Manoel Mano</h2>
            <p>Av.Professora Machadinha Lima</p>
            <p>Cratéus-CE</p>
            <p>CEP:63700-000</p>
          </div>
        <div className='columFooter'>
          
      <h1 className='sitemain'>ENFERMAGEM.EEEPMANOELMANO.COM.BR</h1>
        <div className='aligncopy'>
          </div>
          <p className='copyc'>© 2023 EEEP MANOEL MANO - CRATEÚS
          TODOS OS DIREITOS RESERVADOS DA
          TURMA 3ºB 2023</p></div>
         
          <div className='weChannel'>
          <p className='Channel' >NOSSOS CANAIS</p>
            <div className='weChannel2'>
          <a className='Inst' href=""><RiInstagramFill/></a>
          <a className='Youtube' href=""><FaYoutube/></a>
          </div>
          </div>
          
      </div>
    </div>

  )
}
import { DarkLogos } from '../DarkLogos'
import './style.css'
  
export function LoginHeader(){
  return(
    <div className="loginHeader">
      <DarkLogos size="sizeOne" />
  
      <div className='newNav'>
      
      <div className='projectsNew'>
      <a href="">PROJETO 1</a>
      <a href="">PROJETO 2</a>
      <a href="">PROJETO 3</a>
      <a id="p4" href="">PROJETO 4</a>

      </div>
      
    </div>
    </div>
  )
}
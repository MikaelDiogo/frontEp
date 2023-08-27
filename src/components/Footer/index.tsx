import LogoEscolaVertical from '../../assets/logo-escola-vertical-dark.svg'

import { CommunicationField } from './CommunicationField'
import { ContentFooter } from './ContentFooter'
import './styles.css'

export function Footer() {
  return (
    <div className='footer' >
      <div className='groupContent'>
        <div className='imgFooter'>
          <img src={LogoEscolaVertical} alt="Logo EEEP vertical" />
        </div>
        <ContentFooter />
      </div>
      <div className='accessNetworks'>
        <CommunicationField />
      </div>
    </div>
  )
}
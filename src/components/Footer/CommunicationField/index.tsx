import { SlLocationPin } from 'react-icons/sl'
import { MdOutlineSpeakerNotes } from 'react-icons/md'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { SlSocialInstagram } from 'react-icons/sl'
import { RiInstagramFill } from 'react-icons/ri'
import { FaYoutube } from 'react-icons/fa'

import { FooterActions } from './FooterActions'

import './styles.css'

export function CommunicationField() {

  return (
    <div className="communicationField">
      <h2>COMO SE COMUNICAR CONOSCO?</h2>

      <div className='communication'>
        <FooterActions href={''} id={'talk'} icon={<MdOutlineSpeakerNotes size={50} />} text="FALE COM NOSSA OUVIDORIA" />
        <FooterActions href={'mailto:eeepmmano@escola.ce.gov.br'} id={'sendMail'} icon={<SlEnvolopeLetter size={45} />} text="ENVIAR EMAIL" />
        <FooterActions href={'https://www.instagram.com/eeepmanoelmano/'} id={'instaField'} icon={<SlSocialInstagram size={50} />} text="FALE COM NOSSA OUVIDORIA" />
        <FooterActions href={'https://goo.gl/maps/NUzoaCsL2mCxCV7B6'} id={'location'} icon={<SlLocationPin size={80}/>} text="NOSSA LOCALIZAÇÃO" />
      </div>

      <div className='dividingLineFooter'></div>

      <div className='ourChannels'>
        <h2>NOSSOS CANAIS</h2>
        <div className='chanels'>
          <div className='instagram'>
            <FooterActions href={'https://www.instagram.com/eeepmanoelmano/'} icon={<RiInstagramFill stroke='#00A84A' fill='#fff' size={20} />} />
          </div>
          <div className='youtube'>
            <FooterActions href={'https://www.youtube.com/@eeepmanoelmanocrateus-ce8055'} icon={<FaYoutube fill='#fff' size={20} />} />
          </div>
        </div>
      </div>
    </div>
  )
}
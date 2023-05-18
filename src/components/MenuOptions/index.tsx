import { FiLogIn } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import './styles.css'

export const MenuOptions = ({ active }: any) => {
  const closeMenuOptions = () => {
    active(false)
  }

  return (
    <div className='optionsMenu'>
      <AiOutlineClose className='svg' size={32} onClick={closeMenuOptions}/>
      <div className='option'>
        <Link id="login" to="/login">Login <FiLogIn size={22}/></Link>
      </div>
    </div>

  )
}
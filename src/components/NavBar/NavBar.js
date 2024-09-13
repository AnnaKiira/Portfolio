import React from 'react'
import './NavBar.css'
import AnnaLogo from '../../assets/AnnaLogo.png'
import contact from '../../assets/contact.png'
import {Link} from 'react-scroll'

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <img src={AnnaLogo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Projects</Link>
        </div>

        <button className='desktopMenuBtn'>Contact
            <img src={contact} alt='Contact' className='desktopMenuImg'/>
        </button>

    </nav>
  )
}

export default NavBar
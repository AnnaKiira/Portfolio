import React, { useState } from 'react'
import './NavBar.css'
import AnnaLogo from '../../assets/AnnaLogo.png'
import menu from '../../assets/menu.png'
import {Link} from 'react-scroll'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='NavBar'>
        <div className='navContent'>
        <img src={AnnaLogo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
        </div>

        <button className='desktopMenuBtn' onClick={() =>{
            document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>Contact
            </button>
        </div>
        <img src={menu} alt='Navigation' className='mobileNav' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>

    </nav>
  )
}

export default NavBar
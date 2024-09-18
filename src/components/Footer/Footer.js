import React from 'react'
import AnnaLogo from '../../assets/AnnaLogo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='footer-content'>
        <img src={AnnaLogo} alt='Anna Logo' className='footerLogo'/>
        <div className='footer-text'>
            <p>&copy; 2024 Anna Kira Thomsen. All rights reserved.</p>
        </div>
    </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll'
import background from '../../assets/AnnaImage.png'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Anna</span> <br /> Junior Software Developer</span>
            <p className='introParagraph'>I am passionate about projects where I can use my creativity <br /> and see my work directly impact and shape the end product.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={background} alt='Profile' className='background'/>
    </section>
  )
}

export default Intro
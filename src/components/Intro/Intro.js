import React from 'react'
import './Intro.css'
import background from '../../assets/AnnaImage.png'
import Github from '../../assets/github.png'
import LinkedIn from '../../assets/linkedin.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>

        <span className='hello'>Welcome to my portfolio!</span>
          <span className='myTitle'>
            I’m <span className='introName'>Anna Kira</span> 
            <br /> 
            Junior Software Developer
          </span>

        <p className='introParagraph'>I’m drawn to work that blends creativity with problem-solving <br /> and lets me see the impact I have on the project as it evolves.</p>

        <div className='introLinks'>

          <button className='btn' onClick={() => {
            document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
          }}>Contact</button>

          <a href="https://www.linkedin.com/in/anna-kira-thomsen" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt='LinkedIn' className='linkIntro' />
          </a>

          <a href="https://github.com/AnnaKiira" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt='Github' className='linkIntro' />
          </a>
        </div>

      </div>
      <img src={background} alt='Profile' className='background' />
    </section >
  )
}

export default Intro
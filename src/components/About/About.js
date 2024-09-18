import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>About Me</span>
        
        
        <p className='aboutDesc'>I'm a Lisbon-based Junior Developer with a unique blend of software engineering skills and nursing experience. I recently completed a Software Engineering Bootcamp where I developed a strong foundation in full-stack web development.</p>
        <br />
        <p className='aboutDesc'>What excites me most about Software Development is the opportunity to bring ideas to life through code. I'm passionate about projects where I can use my creativity and see my work directly impact and shape the end product. This natural fit with my interests and skills has driven my career transition from Healthcare to Software Development.</p>
        <br />
        <p className='aboutDesc'>I'm committed to continuous learning and growth, and I'm excited for new opportunities where I can apply and expand my technical skills.</p>
        <br />
        <span className='interest'>Painting - Enjoy expressing my creativity through painting.</span>
        <span className='interest'>Staying Active - Maintain an active lifestyle with regular fitness and daily walks.</span>
        <span className='interest'>Continuous Learning - Reading and listening to podcasts from experts on various topics.</span>
        
    </section>
  )
}

export default About
import React from 'react'
import './About.css'
import Fitness from '../../assets/fitness.png'
import Painting from '../../assets/painting.png'
import Knowledge from '../../assets/knowledge.png'

const About = () => {
  return (
    <section id='about'>
     <h2 className='aboutTitle'>About Me</h2>
    <div className='aboutContent'>
        <p className='aboutDesc'>Originally from Denmark and now based in Lisbon, Portugal. I am a Junior Software Developer with a unique blend of software engineering skills and nursing experience. I recently completed a Software Engineering Bootcamp where I developed a strong foundation in full-stack web development.</p>
        < br/>
        <p className='aboutDesc'>What excites me most about Software Development is the opportunity to bring ideas to life through code. I'm passionate about projects where I can use my creativity and see my work directly impact and shape the end product. This natural fit with my interests and skills has driven my career transition from Healthcare to Software Development.</p>
        < br/>
        <p className='aboutDesc'>I'm committed to continuous learning and growth, and I'm excited for new opportunities where I can apply and expand my technical skills.</p>
    </div>
    
    <div className='interests'>
        <h3>Interests</h3>

        <div className='interestItem'>
            <img src={Painting} alt='Painting' className='interestImage' />
            <p className='interestDesc'>Enjoy expressing my creativity through painting</p>
        </div>

        <div className='interestItem'>
            <img src={Fitness} alt='Fitness' className='interestImage' />
            <p className='interestDesc'>Maintain an active lifestyle with regular fitness and daily walks</p>
        </div>

        <div className='interestItem'>
            <img src={Knowledge} alt='Knowledge' className='interestImage' />
            <p className='interestDesc'>Reading and listening to podcasts from experts on various topics</p>
        </div>
    </div>
        
    </section>
  )
}

export default About
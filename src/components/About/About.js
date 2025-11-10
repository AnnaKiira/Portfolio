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
        <p className='aboutDesc'>Copenhagen-based Junior Software Developer with hands-on full-stack experience from a completed software engineering bootcamp, professional QA testing experience writing automated tests, and a unique background in nursing.</p>
        < br/>
        <p className='aboutDesc'>What excites me most about software development is the chance to bring ideas to life through code. I’m passionate about projects that stretch and challenge my problem-solving skills and let me see my work directly shape the end product.</p>
        < br/>
        <p className='aboutDesc'>This natural fit with my interests and skills has driven my career transition from healthcare to software development. I’m committed to continuous learning and growth, and I’m excited for new opportunities where I can apply and expand my technical skills.</p>
    </div>
    
    <div className='interests'>
        <h3>Interests</h3>

        <div className='interestItem'>
            <img src={Painting} alt='Painting' className='interestImage' />
            <p className='interestDesc'>Enjoy expressing my creativity through painting.</p>
        </div>

        <div className='interestItem'>
            <img src={Fitness} alt='Fitness' className='interestImage' />
            <p className='interestDesc'>Maintain an active lifestyle with regular fitness and daily walks.</p>
        </div>

        <div className='interestItem'>
            <img src={Knowledge} alt='Knowledge' className='interestImage' />
            <p className='interestDesc'>Reading and listening to podcasts on various topics.</p>
        </div>
    </div>
        
    </section>
  )
}

export default About
import React from 'react'
import './Projects.css'
import Project1 from '../../assets/mastermind.png'
import Project2 from '../../assets/frolicflavours.png'
import Project3 from '../../assets/localgem.png'
import Project4 from '../../assets/flourish.png'

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectsTitle'>My Projects</h2>
            <span className='projectsDesc'>Here is a preview of my current projects. Some text and some more text. Information and some more information.</span>
            <div className='myProjects'>
                <div className='project'>
                    <div className='projectContent'>
                        <h2>Mastermind</h2>
                        <p className='projectParagraph'>One week solo project - Introduction to front-end basics</p>
                        <p className='projectParagraph'>Developed Mastermind, a browser-based game, using JavaScript, HTML, and CSS.</p>
                    </div>
                    <img src={Project1} alt='Project1' className='projectImg' />
                </div>

                <div className='project'>
                    <div className='projectContent'>
                        <h2>Frolic Flavours</h2>
                        <p className='projectParagraph'>One week solo project - Gained experience in full-stack development</p>
                        <p className='projectParagraph'>Built a MEN (MongoDB, Express, Node.js) Stack CRUD application with RESTful routing and EJS templating.</p>
                    </div>
                    <img src={Project2} alt='Project2' className='projectImg' />
                </div>

                <div className='project'>
                    <div className='projectContent'>
                        <h2>Local Gem</h2>
                        <p className='projectParagraph'>One week group project - building a MERN Stack CRUD application</p>
                        <p className='projectParagraph'>My key responsibilities included: authentication setup (auth forms, auth service, unprotected route paths), creating the landing page, and implementing the image upload functionality.</p>
                        <p className='projectParagraph'>We collaborated on back-end development and styling together.</p>
                    </div>
                    <img src={Project3} alt='Project3' className='projectImg' />
                </div>

                <div className='project'>
                    <div className='projectContent'>
                        <h2>Flourish</h2>
                        <p className='projectParagraph'>1.5 week solo project - Learned new programming language, Python</p>
                        <p className='projectParagraph'>Developed a full-stack CRUD application using Django REST API, PostgreSQL, and React.</p>
                    </div>
                    <img src={Project4} alt='Project4' className='projectImg' />
                </div>
            </div>
        </section>
    )
}

export default Projects
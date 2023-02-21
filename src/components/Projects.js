import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faMdb, faBootstrap, faGithub, faReact, faPython, faNode } from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faBuilding, faDog } from '@fortawesome/free-solid-svg-icons'
import { faL } from '@fortawesome/free-solid-svg-icons'
import ProjectImages from './shared/ProjectImages'


const Projects = () => {
    
    return (
        <>

            <h2>
                Recent Project Highlights
            </h2>
            <Card className='projects' >
                <Card.Img className='project-image' src={ProjectImages['Project4']} alt='A preview of the Pawsitter app' />
                <Card.Body>
                    <h2>
                        Pawsitters
                    </h2>
                    <p>
                        An App to help pet owners find pet sitters.
                    </p>
                    <div className='html5'>
                        <FontAwesomeIcon className='icon' icon={ faHtml5 } size='lg' /> 
                        <p className='hide'>HTML5</p>
                    </div> 
                    <div className='css3'>
                        <FontAwesomeIcon className='icon' icon={ faCss3 } size='lg' /> 
                        <p className='hide'>CSS3</p>
                    </div>
                    <div className='javascript'>
                        <FontAwesomeIcon className='icon' icon={ faJs } size='lg' /> 
                        <p className='hide'>JavaScript</p>
                    </div>
                    <div className='python'>
                        <FontAwesomeIcon className='icon' icon={ faPython } size='lg' />
                        <p className='hide'>Python</p>
                    </div>
                    <div className='react'>
                        <FontAwesomeIcon className='icon' icon={ faReact } size='lg' /> 
                        <p className='hide'>React</p>
                    </div>
                    <div className='bootstrap'>
                        <FontAwesomeIcon className='icon' icon={ faBootstrap } size='lg' />
                        <p className='hide'>Bootstrap</p>
                    </div> 
                    <div className='django'>
                        <i class="devicon-django-plain"></i>
                        <p className='hide'>django</p>
                    </div>
                    <div className='psql'>
                        <i class="devicon-postgresql-plain"></i>
                        <p className='hide'>PostgreSQL</p>
                    </div>
                    <br/>
                    
                    <a href='https://github.com/amishizaki/django-pawsitters' className='icon-link' target="_blank" >
                        BackEnd
                        <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href='https://github.com/amishizaki/react-pawsitters' className='icon-link' target="_blank" >
                        FrontEnd
                        <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href='https://pawsitters.netlify.app/' className='icon-link' target="_blank" >
                        Live Demo
                        <FontAwesomeIcon icon={ faDog } />
                    </a>
                    <br/>
                </Card.Body>
                
            </Card>
            
            <Card className='projects' >
                <Card.Img className='project-image' src={ProjectImages['Project3']} alt='A preview of the The Good Avocado App' />
                <Card.Body>
                    <h2>
                        The Good Avocado
                    </h2>
                    <p>
                        A restaurant review App.
                    </p>
                    <div className='javascript'>
                        <FontAwesomeIcon className='icon' icon={ faJs } size='lg' /> 
                        <p className='hide'>JavaScript</p>
                    </div>
                    <div className='html5'>
                        <FontAwesomeIcon className='icon' icon={ faHtml5 } size='lg' /> 
                        <p className='hide'>HTML5</p>
                    </div>
                    <div className='css3'>
                        <FontAwesomeIcon className='icon' icon={ faCss3 } size='lg' /> 
                        <p className='hide'>CSS3</p>
                    </div>
                    <div className='python'>
                        <FontAwesomeIcon className='icon' icon={ faPython } size='lg' />
                        <p className='hide'>Python</p>
                    </div>
                    <div className='react'>
                        <FontAwesomeIcon className='icon' icon={ faReact } size='lg' /> 
                        <p className='hide'>React</p>
                    </div>
                    <div className='mongodb'>
                        <i class="devicon-mongodb-plain"></i>
                        <p className='hide'>MongoDB</p>
                    </div>
                    <div className='bootstrap'>
                        <FontAwesomeIcon className='icon' icon={ faBootstrap } size='lg' />
                        <p className='hide'>Bootstrap</p>
                    </div> 
                    <br/>
                    <a href='https://github.com/amishizaki/Api-theGoodAvocado' className='icon-link' target="_blank" >
                        BackEnd <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href='https://github.com/amishizaki/Client-theGoodAvocado' className='icon-link' target="_blank" >
                        FrontEnd <FontAwesomeIcon icon={ faGithub } />
                        
                    </a>
                    <a href='https://thegoodavocado.netlify.app/' className='icon-link' target="_blank" >
                        Live Demo <FontAwesomeIcon icon={ faBuilding } />
                    </a>
                </Card.Body>
            </Card>
            <Card className='projects' >
                <Card.Img className='project-image' src={ProjectImages['Project2']} alt='A preview of the iGarden App' />
                <Card.Body>
                    <h2>
                        iGarden
                    </h2>
                    <p>
                        An App to help Gardners - Experts and Beginners.
                    </p>
                    <div className='javascript'>
                        <FontAwesomeIcon className='icon' icon={ faJs } size='lg' /> 
                        <p className='hide'>JavaScript</p>
                    </div>
                    <div className='html5'>
                        <FontAwesomeIcon className='icon' icon={ faHtml5 } size='lg' /> 
                        <p className='hide'>HTML5</p>
                    </div>
                    <div className='css3'>
                        <FontAwesomeIcon className='icon' icon={ faCss3 } size='lg' /> 
                        <p className='hide'>CSS3</p>
                    </div>
                    <div className='mongodb'>
                        <i class="devicon-mongodb-plain"></i>
                        <p className='hide'>MongoDB</p>
                    </div>
                    <div className='bootstrap'>
                        <FontAwesomeIcon className='icon' icon={ faBootstrap } size='lg' />
                        <p className='hide'>Bootstrap</p>
                    </div> 
                    <div className='node'>
                        <FontAwesomeIcon className='icon' icon={ faNode } size='lg' />
                        <p className='hide'>Node</p>
                    </div>
                    <div className='liquidjs'>
                        <FontAwesomeIcon className='icon' icon={ faL } size='lg' />
                        <p className='hide'>LiquidJS</p>
                    </div>
                    <br/>
                    <a href='https://github.com/amishizaki/i-garden' className='icon-link' target="_blank" >
                        Code <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href='https://polished-wind-3193.fly.dev/' className='icon-link' target="_blank" >
                        Live Demo<FontAwesomeIcon icon={ faLeaf } />
                    </a>
                </Card.Body>
            </Card>

        </>
        
    )


}

export default Projects


// NOTES
// Escape Game
// deployed: https://amishizaki.github.io/Escape-Game/
// gitHub: https://github.com/amishizaki/Escape-Game
// technologies: 
                // HTML
                // CSS
                // JS

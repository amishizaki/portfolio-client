import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faMdb, faBootstrap, faGithub, faReact, faPython, faNode } from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faBuilding, faDog } from '@fortawesome/free-solid-svg-icons'
import ProjectImages from './shared/ProjectImages'


const Projects = () => {
    
    return (
        <>

            <h2>
                Recent Project Highlights
            </h2>
            <Card className='projects' >
                <Card.Img className='project-image' src={ProjectImages['Project4']} alt='A preview of the iGarden App' />
                <Card.Header>
                    <h2>
                        Pawsitters
                    </h2>
                </Card.Header>
                <Card.Body>
                    <p>
                        An App to help pet owners find pet sitters.
                    </p>
                </Card.Body>
                <Card.Footer>
                    <FontAwesomeIcon className='icon' icon={ faHtml5 } /> 
                    <FontAwesomeIcon className='icon' icon={ faCss3 } /> 
                    <FontAwesomeIcon className='icon' icon={ faJs } /> 
                    <FontAwesomeIcon className='icon' icon={ faPython } />
                    <FontAwesomeIcon className='icon' icon={ faReact } /> 
                    <FontAwesomeIcon className='icon' icon={ faBootstrap } />
                    <br/>
                    
                    <a href='https://github.com/amishizaki/django-pawsitters' className='icon-link'>
                        BackEnd
                        <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href='https://github.com/amishizaki/react-pawsitters' className='icon-link'>
                        FrontEnd
                        <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href='https://pawsitters.netlify.app/' className='icon-link'>
                        Live Demo
                        <FontAwesomeIcon icon={ faDog } />
                    </a>
                    <br/>
                </Card.Footer>
            </Card>
            
            <Card className='projects' >
                <Card.Img className='project-image' src={ProjectImages['Project3']} alt='A preview of the The Good Avocado App' />
                <Card.Header>
                    <h2>
                        The Good Avocado
                    </h2>
                </Card.Header>
                <Card.Body>
                    <p>
                        A restaurant review App.
                    </p>
                </Card.Body>
                <Card.Footer>
                    <FontAwesomeIcon className='icon' icon={ faHtml5 } /> 
                    <FontAwesomeIcon className='icon' icon={ faCss3 } /> 
                    <FontAwesomeIcon className='icon' icon={ faJs } /> 
                    <FontAwesomeIcon className='icon' icon={ faPython } />
                    <FontAwesomeIcon className='icon' icon={ faReact } />
                    <FontAwesomeIcon className='icon' icon={ faMdb } />
                    <FontAwesomeIcon className='icon' icon={ faBootstrap } />
                    <br/>
                    <a href='https://github.com/amishizaki/Api-theGoodAvocado' className='icon-link'>
                        BackEnd <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href='https://github.com/amishizaki/Client-theGoodAvocado' className='icon-link'>
                        FrontEnd <FontAwesomeIcon icon={ faGithub } />
                        
                    </a>
                    <a href='https://thegoodavocado.netlify.app/' className='icon-link'>
                        Live Demo <FontAwesomeIcon icon={ faBuilding } />
                    </a>
                </Card.Footer>
            </Card>
            <Card className='projects' >
                <Card.Img className='project-image' src={ProjectImages['Project2']} alt='A preview of the iGarden App' />
                <Card.Header>
                    <h2>
                        iGarden
                    </h2>
                </Card.Header>
                <Card.Body>
                <p>
                    An App to help Gardners - Experts and Beginners.
                </p>
                </Card.Body>
                <Card.Footer>
                    <FontAwesomeIcon className='icon'  icon={ faHtml5 } /> 
                    <FontAwesomeIcon className='icon' icon={ faCss3 } /> 
                    <FontAwesomeIcon className='icon' icon={ faJs } /> 
                    <FontAwesomeIcon className='icon' icon={ faMdb } /> 
                    <FontAwesomeIcon className='icon' icon={ faNode } />
                    <FontAwesomeIcon className='icon' icon={ faBootstrap } />
                    <br/>
                    <a href='https://github.com/amishizaki/i-garden' className='icon-link'>
                        Code <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href='https://polished-wind-3193.fly.dev/' className='icon-link'>
                        Live Demo<FontAwesomeIcon icon={ faLeaf } />
                    </a>
                </Card.Footer>
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

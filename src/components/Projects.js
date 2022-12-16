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
                <Card.Img className='project-image' src={ProjectImages['Project2']} alt='A preview of the iGarden App' />
                <Card.Header>
                    <h2>
                        iGarden
                    </h2>
                </Card.Header>
                <Card.Body>
                <p>
                    Ever wondered how to grow stuff? Me too! This Application will help us both accomplish that. This Application is designed to allow users to explore many different plants and the conditions they need to thrive. Plants include herbs, flowers, vegetables, and fruits! Each plant has a page that users can add comments to. Users can also add a plant to their own list of favorites. If a plant is missing from the list, a user can add that new plant. The intended audience is for anyone who is curious about Gardening or is already a professional Gardner.
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
            <Card className='projects' >
                <Card.Img className='project-image' src={ProjectImages['Project3']} alt='A preview of the The Good Avocado App' />
                <Card.Header>
                    <h2>
                        The Good Avocado
                    </h2>
                </Card.Header>
                <Card.Body>
                    <p>
                        This Application is designed to allow users to interact with various restaurants. Users can share their favorite restaurants to help users have better experiences when dining out. Users will be able to share their experiences and leave reviews. The intended audience is for anyone who enjoys trying new restaurants and sharing their love of food. People all over the world are always looking for insight before spending their hard earned money on a lousy meal. Food is something everyone enjoys and we hope to share a great platform to help users have great meals.
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
                <Card.Img className='project-image' src={ProjectImages['Project4']} alt='A preview of the iGarden App' />
                <Card.Header>
                    <h2>
                        Pawsitters
                    </h2>
                </Card.Header>
                <Card.Body>
                    <p>
                        The application is designed to allow pet pawrents to easily and conveniently find pet sitting and dog walking services for their beloved furry (or scaly) friends. Additionally, users can also sign up to be a pet sitter or dog walker on the app, set their own schedule, rates, and preferences to make their experience as smooth and delightful as possible. Users are able to leave reviews for the sitters they hire on the platform to help other users find their perfect sitter!
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
                    <a href='' className='icon-link'>
                        (Demo coming soon)
                        <FontAwesomeIcon icon={ faDog } />
                    </a>
                    <br/>
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

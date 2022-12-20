import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faMdb, faBootstrap, faReact, faPython, faNode } from '@fortawesome/free-brands-svg-icons'
import { faL } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <div>
            <h2>
                Skills
            </h2>
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
            <div className='node'>
                <FontAwesomeIcon className='icon' icon={ faNode } size='lg' />
                <p className='hide'>Node</p>
            </div>
            <div className='liquidjs'>
                <FontAwesomeIcon className='icon' icon={ faL } size='lg' />
                <p className='hide'>LiquidJS</p>
            </div>
            <div className='django'>
                <i class="devicon-django-plain"></i>
                <p className='hide'>django</p>
            </div>
            <div className='psql'>
                <i class="devicon-postgresql-plain"></i>
                <p className='hide'>PostgreSQL</p>
            </div>


            
          
        </div>
    )

}

export default Skills
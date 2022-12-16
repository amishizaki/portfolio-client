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
            <FontAwesomeIcon className='icon' icon={ faJs } size='lg' /> 
            <FontAwesomeIcon className='icon' icon={ faHtml5 } size='lg' /> 
            <FontAwesomeIcon className='icon' icon={ faCss3 } size='lg' /> 
            <FontAwesomeIcon className='icon' icon={ faMdb } size='lg' />
            <FontAwesomeIcon className='icon' icon={ faPython } size='lg' />
            <FontAwesomeIcon className='icon' icon={ faReact } size='lg' /> 
            <FontAwesomeIcon className='icon' icon={ faBootstrap } size='lg' />
            <FontAwesomeIcon className='icon' icon={ faNode } size='lg' />
            <FontAwesomeIcon className='icon' icon={ faL } size='lg' />
        </div>
    )

}

export default Skills
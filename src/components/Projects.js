

// Escape Game
// deployed: https://amishizaki.github.io/Escape-Game/
// gitHub: https://github.com/amishizaki/Escape-Game
// technologies: 
                // HTML
                // CSS
                // JS

// iGarden
// deployed: https://polished-wind-3193.fly.dev/ 
// gitHub: https://github.com/amishizaki/i-garden
// technologies: 
                // HTML
                // CSS
                // JS
                // MongoDB
                // Mongoose
                // Liquid
                // Bootstrap

// The Good Avocado
// deployed: https://thegoodavocado.netlify.app/
// gitHub - BackEnd: https://github.com/amishizaki/Api-theGoodAvocado
// gitHub - FrontEnd https://github.com/amishizaki/Client-theGoodAvocado
// technologies:
                // React
                // Mongoose
                // Express
                // Node.js
                // MongoDB
                // Bootstrap


// Pawsitters
// deployed: (pending)
// gitHub - BackEnd: https://github.com/amishizaki/django-pawsitters
// gitHub - FrontEnd: https://github.com/amishizaki/react-pawsitters
// technologies: 
                // React
                // Django
                // Python
                // PostgreSQL
                // CSS
                // JavaScript
                // HTML5
                // Bootstrap


import React from 'react'
import { Card } from 'react-bootstrap'



const Projects = () => {
    
    return (
        <Card className='projects' >
            <Card.Img src='favicon.ico' style={{ height: '300px', width: 'auto' }} alt='A preview of the App' />
            <Card.Header>
                Project Name
            </Card.Header>
            <Card.Body>
                Project Description
            </Card.Body>
            <Card.Footer>
                Technologies as icons <br/>
                GitHub Link, Deployed Link
            </Card.Footer>
        </Card>
    )


}

export default Projects
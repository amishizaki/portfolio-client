import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

const linkStyle = {
    color: '#232323',
    textDecoration: 'none',
	opacity: '.85',
	marginLeft: '15px',
	position: 'relative',
}

const alwaysOptions = (
	<>
		<Nav.Item className='container m-2 github'>

				<a href='https://github.com/amishizaki' target="_blank" >
					<FontAwesomeIcon icon={ faSquareGithub } alt='GitHub icon' size='lg' className='nav-icon'/>

				</a>
				<p className='hide'>GitHub</p>
		</Nav.Item>
		<Nav.Item className='m-2 linkedin'>

				<a href='https://www.linkedin.com/in/alina-ishizaki/' target="_blank" >
					<FontAwesomeIcon icon={ faLinkedin } alt='LinkedIn icon' size='lg' className='nav-icon'/>

				</a>
				<p className='hide'>LinkedIn</p>
		</Nav.Item>
		<Nav.Item className='m-2 resumeicon'>

				<a href='https://docs.google.com/document/d/e/2PACX-1vQVuIbsm5-qUKNRsam4n9dkPUFlEpyXngtjXKVj_d9QcsqMjzRQrK-gyoNjpPqz_uID9dCf258TTOrE/pub' target="_blank" >
					<FontAwesomeIcon icon={ faFileLines } alt='A file icon' size='lg' className='nav-icon'/>

				</a>
				<p className='hide'>Resume</p>
		</Nav.Item>
		{/* <Nav.Item className='m-2'>
				<Link to='#projects' style={linkStyle} >
					Projects
				</Link>
		</Nav.Item> */}
	</>
)

const Header = () => (
	<Navbar className='container m-2' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/jones-the-cat' style={linkStyle}>
                <img
					src='favicon.ico'
					width="75"
					height="auto"
					marginTop="0"
					alt={"A black cat silhouette sitting with an upturned tail, facing right towards the navbar"}
				/>
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle className='navtoggle' aria-controls='basic-navbar-nav' />
		<Navbar.Collapse className='burger' bg='dark' id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				
				<span className='navbar-text mr-2'></span>

				{alwaysOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header

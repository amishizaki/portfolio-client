import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDigitalTachograph } from '@fortawesome/free-solid-svg-icons'


const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

const alwaysOptions = (
	<>
		
		<Nav.Item className='m-2'>
				<a class='link' href='https://docs.google.com/document/d/e/2PACX-1vQVuIbsm5-qUKNRsam4n9dkPUFlEpyXngtjXKVj_d9QcsqMjzRQrK-gyoNjpPqz_uID9dCf258TTOrE/pub' style={linkStyle} >
					Resume
				</a>
		</Nav.Item>
	</>
)

const Header = () => (
	<Navbar className='container m-2' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                <img
					src='favicon.ico'
					width="50"
					height="auto"
					alt={"A black cat silhouette in profile."}
				/>
            </Link>
        </Navbar.Brand>
		{/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				
				<span className='navbar-text mr-2'></span>

				{alwaysOptions}
			</Nav>
		</Navbar.Collapse> */}
	</Navbar>
)

export default Header

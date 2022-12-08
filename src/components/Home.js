import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
	console.log('props in home', props)

const linkStyle = {
	color: 'white',
	textDecoration: 'none'
}

	return (
		<div class='container'>
			<div class='image'>
				<img class='face' src="my-face.png" alt="Alina's smiling face in a rounded frame. She has shoulder length brown hair"/>
			</div>

			<div class='text'>
				<h1 class='name'>Alina Ishizaki</h1>
				<a class='link' href='https://github.com/amishizaki' style={linkStyle}>
					<FontAwesomeIcon icon={ faGithub } />
				</a>
				<a class='link' href='https://www.linkedin.com/in/alina-ishizaki/' style={linkStyle} >
					<FontAwesomeIcon icon={ faLinkedin } />
				</a>
				<a class='link' href='https://docs.google.com/document/d/e/2PACX-1vQVuIbsm5-qUKNRsam4n9dkPUFlEpyXngtjXKVj_d9QcsqMjzRQrK-gyoNjpPqz_uID9dCf258TTOrE/pub' style={linkStyle} >
					<FontAwesomeIcon icon={ faFileLines } />
				</a>
				<p>I am a Full Stack Engineer looking to help the world with thoughtful and intentional coding design.</p>
			</div>
			
			{/* <div class='resContainer'>
				{/* REFUSES TO CENTER */}
				{/* <iframe 
					class='resume'
					title='resume'
					src='https://docs.google.com/document/d/e/2PACX-1vQVuIbsm5-qUKNRsam4n9dkPUFlEpyXngtjXKVj_d9QcsqMjzRQrK-gyoNjpPqz_uID9dCf258TTOrE/pub?embedded=true' 
					frameBorder='0' 
					border='0' 
					cellSpacing='0'
				>
				</iframe>
			</div> */}
		</div>
	)
}

export default Home

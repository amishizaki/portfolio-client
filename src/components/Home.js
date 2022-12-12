import Projects from './Projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
	console.log('props in home', props)

const linkStyle = {
	color: 'black',
	textDecoration: 'none',
	width: 50
}

	return (
		<div className='container'>
			<div className='image'>
				<img class='face' src="my-face.png" alt="Alina's smiling face in a rounded frame. She has shoulder length brown hair"/>
			</div>

			<div class='text'>
				<h1 class='name'>Alina Ishizaki</h1>
				<a class='link' href='https://github.com/amishizaki' style={linkStyle}>
					<FontAwesomeIcon icon={ faGithub } alt='GitHub icon' />
				</a>
				<a class='link' href='https://www.linkedin.com/in/alina-ishizaki/' style={linkStyle} >
					<FontAwesomeIcon icon={ faLinkedin } alt='LinkedIn icon' />
				</a>
				<a class='link' href='https://docs.google.com/document/d/e/2PACX-1vQVuIbsm5-qUKNRsam4n9dkPUFlEpyXngtjXKVj_d9QcsqMjzRQrK-gyoNjpPqz_uID9dCf258TTOrE/pub' style={linkStyle} >
					<FontAwesomeIcon icon={ faFileLines } alt='A file icon' />
				</a>
				<p>I am a Full Stack Engineer looking to help the world with thoughtful and intentional coding design.</p>
			</div>

			<Projects />
			
			
		</div>
	)
}

export default Home

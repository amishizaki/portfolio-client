import Projects from './Projects'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faFileLines } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
	console.log('props in home', props)

const linkStyle = {
	color: 'rgb(52, 52, 52)',
	textDecoration: 'none',
	width: '50em',
}

	return (
		<div>
			<div className='intro'>
				<div className='image'>
					<img class='face' src="my-face.png" alt="Alina's smiling face in a round frame. She has shoulder length brown hair"/>
				</div>

				<div class='text'>
					<h1 class='name'>Alina Ishizaki</h1>
					{/* <a class='link' href='https://github.com/amishizaki' style={linkStyle}> */}
						{/* <FontAwesomeIcon icon={ faGithub } alt='GitHub icon' /> */}
					{/* </a> */}
					{/* <a class='link' href='https://www.linkedin.com/in/alina-ishizaki/' style={linkStyle} > */}
						{/* <FontAwesomeIcon icon={ faLinkedin } alt='LinkedIn icon' /> */}
					{/* </a> */}
					{/* <a class='link' href='https://docs.google.com/document/d/e/2PACX-1vQVuIbsm5-qUKNRsam4n9dkPUFlEpyXngtjXKVj_d9QcsqMjzRQrK-gyoNjpPqz_uID9dCf258TTOrE/pub' style={linkStyle} > */}
						{/* <FontAwesomeIcon icon={ faFileLines } alt='A file icon' /> */}
					{/* </a> */}
					<p>Hello, I am a Boston based Full Stack Engineer looking to help the world with thoughtful and intentional coding design. 
					
					</p>
				</div>
			</div>
		
			
			<Projects />
			
			
		</div>
	)
}

export default Home

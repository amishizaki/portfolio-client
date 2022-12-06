const Home = (props) => {
	console.log('props in home', props)

const linkStyle = {
	color: 'white',
	textDecoration: 'none'
}

	return (
		<div className='center'>
			<h1 className='name'>Alina Ishizaki</h1>
			<img class='face' src="my-face.png" alt="Alina's smiling face in a rounded frame. She has shoulder length brown hair"/>
			<p>I am a Full Stack Engineer looking to help the world with thoughtful and intentional coding design.</p>
			<h6>
				<a class='link' href='https://github.com/amishizaki' style={linkStyle} >
					GitHub
				</a>
				<a class='link' href='https://www.linkedin.com/in/alina-ishizaki/' style={linkStyle} >
					LinkedIn
				</a>
				<a class='link' href='https://docs.google.com/document/d/1pvhul8bYS2ro06FOMOzjJSbdX4SgnaQ2iQOgWCZWN-o/edit?usp=sharing' style={linkStyle} >
					Resume
				</a>
				
			</h6>
		</div>
	)
}

export default Home

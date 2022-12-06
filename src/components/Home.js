const Home = (props) => {
	console.log('props in home', props)

const linkStyle = {
	color: 'white',
	textDecoration: 'none'
}

	return (
		<div>
			<h1 class='name'>Alina Ishizaki</h1>
			<img class='face' src="my-face.png" alt="Alina's smiling face in a rounded frame. She has shoulder length brown hair"/>
			<p>I am a Full Stack Engineer looking to help the world with thoughtful and intentional coding design.</p>
			<h6>
				<a class='link' href='https://github.com/amishizaki' style={linkStyle} >
					GitHub
				</a>
				<a class='link' href='https://www.linkedin.com/in/alina-ishizaki/' style={linkStyle} >
					LinkedIn
				</a>
				<a class='link' href='https://docs.google.com/document/d/e/2PACX-1vQVuIbsm5-qUKNRsam4n9dkPUFlEpyXngtjXKVj_d9QcsqMjzRQrK-gyoNjpPqz_uID9dCf258TTOrE/pub' style={linkStyle} >
					Resume
				</a>

				
			</h6>

			<div class='resContainer'>
				{/* REFUSES TO CENTER */}
				<iframe 
					class='resume'
					src='https://docs.google.com/document/d/e/2PACX-1vQVuIbsm5-qUKNRsam4n9dkPUFlEpyXngtjXKVj_d9QcsqMjzRQrK-gyoNjpPqz_uID9dCf258TTOrE/pub?embedded=true' 
					frameBorder='0' 
					border='0' 
					cellspacing='0'
				>
				</iframe>
			</div>
		</div>
	)
}

export default Home

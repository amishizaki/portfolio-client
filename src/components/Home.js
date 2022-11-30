const Home = (props) => {
	console.log('props in home', props)

	return (
		<div className="center">
			<h2>Alina Ishizaki</h2>
			<img class="face" src="my-face.png" alt="Alina's smiling face in a rounded frame. She has shoulder length brown hair"/>
			<p>I am a Full Stack Engineer looking to help the world with thoughtful and intentional coding design.</p>
			<h6>
				Resume<br/>
				Stuff
			</h6>
		</div>
	)
}

export default Home

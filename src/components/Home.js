import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'

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

				<div className='text'>
					<h1 class='name'>Alina Ishizaki</h1>
					
					<p className='desc'>
						Hello, I am a Boston based Full Stack Engineer looking to help the world with thoughtful and intentional coding design. 
					
					</p>
				</div>
			</div>
		
			<hr />
			<Skills />
			<hr />
			<Projects />
			<hr/>
			<Contact/>
			
		</div>
	)
}

export default Home

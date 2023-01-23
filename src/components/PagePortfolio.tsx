import { linkSM } from '../helpers/linker';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

// Portfolio page showing all of my web applications
const PagePortfolio = () => {
// Due to the amount of nesting Bootstrap.React uses, Indentation starts on first child elements
	return (
<Card className='rounded-bottom rounded-0 offWhiteBack'>
	<Card.Body>
		{/* Resume Sections
			- Hexitaire
			- Food-Groups
			- This Site
		*/}
		{/* Hexitaire.com */}
		<Card className='mb-5'>
			<a href='https://Hexitaire.com/' className='whiteText'>
				<Card.Header className='cardHeader'><h3>Hexitaire.com</h3></Card.Header>
			</a>
			{/* Carousel of Images, not linked */}
			<Carousel >
				<Carousel.Item>
					<img className="d-block w-100" src="images/portfolio/hex_start_ref.jpg" alt="Hexitaire game just starting out" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="images/portfolio/hex_dedication_ref.jpg" alt="The dedication page of Hexitaire.com" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="images/portfolio/hex_win_ref.jpg" alt="A winning game of Hexitaire!" />
				</Carousel.Item>
			</Carousel>
			<Card.Body>
				<p>&emsp;&emsp;Hexitaire is my favorite project to have worked on so far. From the jump using React and Typescript, I built a fully functional card game from scratch. The idea was simply to build a solitaire game; since my wife highly enjoys those types of games, but to give it a bit of a twist.</p>
				<p>&emsp;&emsp;I highly suggest you have a round or two to see it in action. Like a normal solitaire game, it's about putting the cards away in their ending piles. There are a few differences you'll want to check the "rules" button and the bottom for.</p>
				<p>&emsp;&emsp;I did learn a lot with this project, and although I have a few ideas for features in the future (ie. LocalStorage Stats, Online Leader board, Next Move suggestion, etc), I am very happy with how this app both looks and performs.</p>
				<Card className="mb-3">
					<Card.Header className='offWhiteBack'>Technologies Used:</Card.Header>
					<Card.Body className='text-center'>
						<p>[{linkSM('react')}], [{linkSM('type')}], [{linkSM('html')}], [{linkSM('css')}]</p>
					</Card.Body>
				</Card>
				<Card className="mb-3">
					<Card.Header className='offWhiteBack'>Skills Used:</Card.Header>
					<Card.Body className='text-center'>
						<p>[{linkSM('front')}], [{linkSM('gui')}], [{linkSM('resp')}], [{linkSM('comp')}], [{linkSM('strict')}], [{linkSM('ux')}]</p>
					</Card.Body>
				</Card>
			</Card.Body>
			<Card.Footer className='cardHeader'>
					Public github link:
					&nbsp;<a className='whiteText' href='https://github.com/RWACU/hexitaire'>Client</a>
			</Card.Footer>
		</Card>
		{/* Food-Groups.com */}
		<Card className='mb-5'>
			<a href='https://food-groups.com/' className='whiteText'>
				<Card.Header className='cardHeader'><h3>Food-Groups.com</h3></Card.Header>
			</a>
			{/* Carousel of Images, not linked */}
			<Carousel >
				<Carousel.Item>
					<img className="d-block w-100" src="images/portfolio/ui_ref.jpg" alt="A close up of Food-Groups.com UI" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="images/portfolio/dinner_ref.jpg" alt="Food-Groups.com Setting recipes for dinner" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="images/portfolio/allGroups_ref.jpg" alt="Food-Groups.com main page" />
				</Carousel.Item>
			</Carousel>
			<Card.Body>
				<p>&emsp;&emsp;My first big React project. Food-Groups is a recipe sharing site with user curated recipes. Although it does have a group that everyone automatically joins; it's main purpose is for families/friends to share recipes with each other.</p>
				<p>&emsp;&emsp;I learned a lot while making this site. I was focussed more on the back end functions rather than the design; as it needed to function well.</p>
				<p>&emsp;&emsp;I would have changed a few things from the start, such as making it more mobile friendly, and simplifying the recipe creation process. (Although as there are no recipe "standards", it is hard to implement a format to be able to upload a recipe without putting each part manually)</p>
				<Card className="mb-3">
					<Card.Header className='offWhiteBack'>Technologies Used:</Card.Header>
					<Card.Body className='text-center'>
						<p>[{linkSM('react')}], [{linkSM('js')}], [{linkSM('html')}], [{linkSM('css')}], [{linkSM('node')}], [{linkSM('sql')}]</p>
					</Card.Body>
				</Card>
				<Card className="mb-3">
					<Card.Header className='offWhiteBack'>Skills Used:</Card.Header>
					<Card.Body className='text-center'>
						<p>[{linkSM('fs')}], [{linkSM('db')}], [{linkSM('sec')}], [{linkSM('sess')}], [{linkSM('comp')}]</p>
					</Card.Body>
				</Card>
			</Card.Body>
			<Card.Footer className='cardHeader'>
				Public github links:
				&nbsp;<a className='whiteText' href='https://github.com/RWACU/FoodGroups'>Client</a>,
				&nbsp;<a className='whiteText' href='https://github.com/RWACU/FoodGroupsServer'>Server</a>
			</Card.Footer>
		</Card>
		{/* RyanUlch.com */}
		<Card>
			<Card.Header className='cardHeader'><h3>This Site!</h3></Card.Header>
			<Card.Body>
				<p>&emsp;&emsp;This site is simply to showcase the projects I have worked on, as well as show that I can implement CSS to properly create dynamic, responsive designs for multiple device sizes. As well as saying hi, to any potential employers. Hi!</p>
				<p>&emsp;&emsp;I've learned having a clear understanding of how the responsiveness of a site should be front and center when first creating mock-ups of a site.</p>
				<p>&emsp;&emsp;I had started creating the site with media queries trying to handle the switching between different designs; using React to dynamically send different classes to components. This proved inefficient, as it created a complicated, hardly readable codebase just to handle CSS classes.</p>
				<p>&emsp;&emsp;I threw out the media query handling of responsive design model I was using; opting to use CSS features such as clamp(), calc(), rem/em units, ect. to make sure that the site looked and preformed well on all platforms.</p>
				<p>&emsp;&emsp;This is also the first project I used Typescript in. As I originally learned development through C++, I am used to strongly typed languages; and although Typescript does have some quirks with the Javascript compilation, it was fairly easy to pick up.</p>
				<Card className="mb-3">
					<Card.Header className='offWhiteBack'>Technologies Used:</Card.Header>
					<Card.Body className='text-center'>
						<p>[{linkSM('react')}], [{linkSM('type')}], [{linkSM('js')}], [{linkSM('boot')}], [{linkSM('html')}], [{linkSM('css')}]</p>
					</Card.Body>
				</Card>
				<Card className="mb-3">
					<Card.Header className='offWhiteBack'>Skills Used:</Card.Header>
					<Card.Body className='text-center'>
						<p>[{linkSM('front')}], [{linkSM('resp')}], [{linkSM('strict')}]</p>
					</Card.Body>
				</Card>
			</Card.Body>
			<Card.Footer className='cardHeader'>
				Public github link: 
				&nbsp;<a className='whiteText' href='https://github.com/RWACU/ryanulchsite'>Client</a>
			</Card.Footer>
		</Card>
	</Card.Body>
</Card>
	);
}

export default PagePortfolio;
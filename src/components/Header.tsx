import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// Header sits on top of page and is fixed to scroll with user.
	// Clicking on the header brings you to the top of the page
const Header = () => {
	// Adding images semi-automatically without having to create a new Carousel.Item Manually
		// Need to add Alt text to array to get images from Public folder,
		// For every Alt Text entry, {carouselItemCreator} will look for a Header#.jpg file
	const imageAlts = [
		"Me in a suit looking, suave.",
		"Me and our little black kitten: Soy Sauce",
		"Me with our kitten again. This time both of us being lazy",
		"Me and my wife Lucy on my first day as an American immigrant",
		"My Cat looking into the camera on my lap."
	]

	// Create an image for carousel for every alt provided
	const carouselItemCreator = () => {
		const items: JSX.Element[] = [];
		for (let i = 0; i < imageAlts.length; ++i) {
			items.push(
				<Carousel.Item key={`headerImg${i}`}>
					<img
						className="d-block w-100 rounded-bottom"
						src={`images/header/header${i}.jpg`}
						alt={imageAlts[i]}
					/>
				</Carousel.Item>
			)
		}
		return items;
	}

	// When clicked, return to top of page
	const returnToTop = (event: any) => {
		event.preventDefault();
		window.scrollTo(0, 0);
	}

	return (
		<header>
			<div className='fixedHeader' onClick={returnToTop}>
				<Image className='fixedLogo' src='images/header/logo.png' alt='' />
				<h1 className='headerText'>Ryan Ulch</h1>
				<h1 className='headerText' style={{overflow: 'hidden'}}>&nbsp;~ Web Developer</h1>
			</div>
			{/* Carousel of Images, not linked */}
			<Carousel className='imageCarousel rounded-bottom'>
				{carouselItemCreator()}
			</Carousel>
		</header>
	);
}

export default Header;
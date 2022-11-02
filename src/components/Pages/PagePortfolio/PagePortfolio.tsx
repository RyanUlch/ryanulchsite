// CSS Import
import classes from './PagePortfolio.module.css';

import PageBreaker from '../../PageBreaker/PageBreaker';
import Expander from '../../Expander/Expander';

import { linker, linkSM } from '../../../helpers/linker';

const PagePortfolio = () => {
	const siteLinkHandler = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		alert(`This is a link for this site... What did you expect to happen?`);
	}

	return (
		<section id='portfolio'>
			<PageBreaker value='Portfolio' />
			<div className='background'>
				<article id='foodGroups'>
					<Expander anchor='foodGroups'>
						<h3>{linker('Food-Groups.com','https://food-groups.com/', true)}</h3>
						<p>&emsp;&emsp;My first big React project. Food-Groups is a recipe sharing site with user curated recipes. Although it does have a group that everyone automatically joins; it's main purpose is for families/friends to share recipes with each other.</p>
						<p>&emsp;&emsp;I learned a lot while making this site. I was focussed more on the back end functions rather than the design; as it needed to function well.</p>
						<p>&emsp;&emsp;I would have changed a few things from the start, such as making it more mobile friendly, and simplifying the recipe creation process. (Although as there are no recipe "standards", it is hard to impliment a format to be able to upload a recipe without putting each part manually)</p>
						<p>Technologies Used:</p>
						<p className={classes.skillList}>[{linkSM('react')}] [{linkSM('js')}] [{linkSM('html')}] [{linkSM('css')}] [{linkSM('node')}] [{linkSM('sql')}]</p>
						<p>Skills Used:</p>
						<p className={classes.skillList}>[{linkSM('fs')}] [{linkSM('db')}] [{linkSM('sec')}] [{linkSM('sess')}] [{linkSM('comp')}]</p>
						<p  className={classes.skillList}>Public github links: {linker('Client', 'https://github.com/RWACU/FoodGroups')}, {linker('Server', 'https://github.com/RWACU/FoodGroupsServer')}</p>
						<img src='#' alt=''/>
					</Expander>
				</article>
				<article id='ryanUlch'>
					<Expander anchor='ryanUlch'>
						<h3><a href='#ryanUlch' onClick={siteLinkHandler}>This Site!</a></h3>
						<p>&emsp;&emsp;This site is simply to showcase the projects I have worked on, as well as show that I can implement CSS to properly create dynamic, responsive designs for multiple device sizes. As well as saying hi, to any potential employers. Hi!</p>
						<p>&emsp;&emsp;I've learned having a clear understanding of how the responsiveness of a site should be front and center when first creating mock-ups of a site.</p>
						<p>&emsp;&emsp;I had started creating the site with media queries trying to handle the switching between different designs; using React to dynamically send different classes to components. This proved inefficient, as it created a complicated, hardly readable codebase just to handle CSS classes.</p>
						<p>&emsp;&emsp;I threw out the media query handling of responsive design model I was using; opting to use CSS features such as clamp(), calc(), rem/em units, ect. to make sure that the site looked and preformed well on all platforms.</p>
						<p>&emsp;&emsp;This is also the first project I used Typescript in. As I originally learned development through C++, I am used to strongly typed languages; and although Typescript does have some quirks with the Javascript compilation, it was fairly easy to pick up.</p>
						<em className='note'>To anyone who goes back through my Github Commits, I did use the 'any' keyword when first starting the project while learning Typescript, but strive to have no uses of 'any', unless absolutely necessary in the finished site</em>
						<p>Technologies Used:</p>
						<p className={classes.skillList}>[{linkSM('react')}] [{linkSM('type')}] [{linkSM('js')}] [{linkSM('html')}] [{linkSM('css')}]</p>
						<p>Skills Used:</p>
						<p className={classes.skillList}>[{linkSM('front')}] [{linkSM('resp')}] [{linkSM('strict')}]</p>
						<p className={classes.skillList}>Public github link: {linker('Client', 'https://github.com/RWACU/ryanulchsite')}</p>
						<div className='imageContainer'>
							<img className='displayImage' src='images/ryanulch1.jpg' alt='This site, in dark mode'/>
							<img className='displayImage' src='images/thumbsUp.jpg' title='Source: https://unsplash.com/photos/uYmF6ncEgLY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink' alt='A thumbs up, denoting the success of this beautiful site.' />
							<img className='displayImage' src='images/ryanulch2.jpg' alt='A recursive image of this site with this picture in it.'/>
						</div>
					</Expander>
				</article>
			</div>
		</section>
	);
}

export default PagePortfolio;
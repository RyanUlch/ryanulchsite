// CSS Import
import classes from './PagePortfolio.module.css';

import { useEffect } from 'react';

import PageBreaker from '../../PageBreaker/PageBreaker';
import Expander from '../../Expander/Expander';

import { linker, linkSM } from '../../../helpers/linker';
import { setTransitionHeight } from '../../../helpers/transition';


const PagePortfolio = () => {
	const siteLinkHandler = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		alert(`This is a link for this site... What did you expect to happen?`);
	}

	useEffect(() => {
		setTransitionHeight('#hexitaire', '--hexMax');
		setTransitionHeight('#foodGroups', '--foodMax');
		setTransitionHeight('#ryanUlch', '--siteMax');
	}, []);

	return (
		<section id='portfolio'>
			<PageBreaker value='Portfolio' />
			<div className='background'>
				<article id='hexitaire'>
					<Expander nodeName='hex' anchor='hexitaire'>
						<h3>{linker('Hexitaire.com','https://Hexitaire.com/', true)}</h3>
						<div className='imageContainer'>
							<img className='displayImage' src='images/hex_start_ref.jpg' alt='Hexitaire game just starting out'/>
							<img className='displayImage' src='images/hex_dedication_ref.jpg' alt='The dedication page of Hexitaire.com' />
							<img className='displayImage' src='images/hex_win_ref.jpg' alt='A winning game of Hexitaire!'/>
						</div>
						<p>&emsp;&emsp;Hexitaire is my favorite project to have worked on so far. From the jump using React and Typescript, I built a fully functional card game from scratch. The idea was simply to build a solitaire game; since my wife highly enjoys those types of games, but to give it a bit of a twist.</p>
						<p>&emsp;&emsp;I highly suggest you have a round or two to see it in action. Like a normal solitaire game, it's about putting the cards away in their ending piles. There are a few differences you'll want to check the "rules" button and the bottom for.</p>
						<p>&emsp;&emsp;I did learn a lot with this project, and although I have a few ideas for features in the future (ie. LocalStorage Stats, Online Leader board, Next Move suggestion, etc), I am very happy with how this app both looks and performs.</p>
						<p>Technologies Used:</p>
						<p className={classes.skillList}>[{linkSM('react')}] [{linkSM('type')}] [{linkSM('html')}] [{linkSM('css')}]</p>
						<p>Skills Used:</p>
						<p className={classes.skillList}>[{linkSM('front')}] [{linkSM('gui')}] [{linkSM('resp')}] [{linkSM('comp')}] [{linkSM('strict')}] [{linkSM('ux')}]</p>
						<p  className={classes.skillList}>Public github link: {linker('Client', 'https://github.com/RWACU/hexitaire')}</p>
						{/* <img src='#' alt=''/> */}
					</Expander>
				</article>
				<article id='foodGroups'>
					<Expander nodeName='food' anchor='foodGroups'>
						<h3>{linker('Food-Groups.com','https://food-groups.com/', true)}</h3>
						<div className='imageContainer'>
							<img className='displayImage' src='images/ui_ref.jpg' alt='A close up of Food-Groups.com UI'/>
							<img className='displayImage' src='images/dinner_ref.jpg' alt='Food-Groups.com Setting recipes for dinner' />
							<img className='displayImage' src='images/allGroups_ref.jpg' alt='Food-Groups.com main page'/>
						</div>
						<p>&emsp;&emsp;My first big React project. Food-Groups is a recipe sharing site with user curated recipes. Although it does have a group that everyone automatically joins; it's main purpose is for families/friends to share recipes with each other.</p>
						<p>&emsp;&emsp;I learned a lot while making this site. I was focussed more on the back end functions rather than the design; as it needed to function well.</p>
						<p>&emsp;&emsp;I would have changed a few things from the start, such as making it more mobile friendly, and simplifying the recipe creation process. (Although as there are no recipe "standards", it is hard to implement a format to be able to upload a recipe without putting each part manually)</p>
						<p>Technologies Used:</p>
						<p className={classes.skillList}>[{linkSM('react')}] [{linkSM('js')}] [{linkSM('html')}] [{linkSM('css')}] [{linkSM('node')}] [{linkSM('sql')}]</p>
						<p>Skills Used:</p>
						<p className={classes.skillList}>[{linkSM('fs')}] [{linkSM('db')}] [{linkSM('sec')}] [{linkSM('sess')}] [{linkSM('comp')}]</p>
						<p  className={classes.skillList}>Public github links: {linker('Client', 'https://github.com/RWACU/FoodGroups')}, {linker('Server', 'https://github.com/RWACU/FoodGroupsServer')}</p>
						{/* <img src='#' alt=''/> */}
					</Expander>
				</article>
				<article id='ryanUlch'>
					<Expander nodeName='site' anchor='ryanUlch'>
						<h3><a href='#ryanUlch' onClick={siteLinkHandler}>This Site!</a></h3>
						<div className='imageContainer'>
							<img className='displayImage' src='images/ryanulch1.jpg' alt='This site, in dark mode'/>
							<img className='displayImage' src='images/thumbsUp.jpg' title='Source: https://unsplash.com/photos/uYmF6ncEgLY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink' alt='A thumbs up, denoting the success of this beautiful site.' />
							<img className='displayImage' src='images/ryanulch2.jpg' alt='A recursive shot of this site, at this position.'/>
						</div>
						<p>&emsp;&emsp;This site is simply to showcase the projects I have worked on, as well as show that I can implement CSS to properly create dynamic, responsive designs for multiple device sizes. As well as saying hi, to any potential employers. Hi!</p>
						<p>&emsp;&emsp;I've learned having a clear understanding of how the responsiveness of a site should be front and center when first creating mock-ups of a site.</p>
						<p>&emsp;&emsp;I had started creating the site with media queries trying to handle the switching between different designs; using React to dynamically send different classes to components. This proved inefficient, as it created a complicated, hardly readable codebase just to handle CSS classes.</p>
						<p>&emsp;&emsp;I threw out the media query handling of responsive design model I was using; opting to use CSS features such as clamp(), calc(), rem/em units, ect. to make sure that the site looked and preformed well on all platforms.</p>
						<p>&emsp;&emsp;This is also the first project I used Typescript in. As I originally learned development through C++, I am used to strongly typed languages; and although Typescript does have some quirks with the Javascript compilation, it was fairly easy to pick up.</p>
						<p>Technologies Used:</p>
						<p className={classes.skillList}>[{linkSM('react')}] [{linkSM('type')}] [{linkSM('js')}] [{linkSM('html')}] [{linkSM('css')}]</p>
						<p>Skills Used:</p>
						<p className={classes.skillList}>[{linkSM('front')}] [{linkSM('resp')}] [{linkSM('strict')}]</p>
						<p className={classes.skillList}>Public github link: {linker('Client', 'https://github.com/RWACU/ryanulchsite')}</p>
					</Expander>
				</article>
			</div>
		</section>
	);
}

export default PagePortfolio;
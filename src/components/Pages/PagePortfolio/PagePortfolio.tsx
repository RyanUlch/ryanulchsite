// CSS Import
import classes from './PagePortfolio.module.css';

const PagePortfolio = (props: unknown) => {
	return (
		<section>
			<h2>Portfolio</h2>
			<article>
				<h3>Food-Groups.com</h3>
				<p>My first big React project. Food-Groups is a recipe sharing site with user curated recipes. Although it does have a group that everyone automatically joins; it's main purpose is for families/friends to share recipes with each other.</p>
				<p>I learned a lot while making this site. I was focussed more on the back end functions rather than the design as it needed to function well.</p>
				<p>I would have changed a few things from the start, such as making it more mobile friendly, and simplifying the recipe creation process. (although as there are no recipe "standards", it is hard to impliment a format to be able to upload a recipe without putting each part manually)</p>
				<p>Technologies Used: [React] [Javascript] [CSS] [HTML] [Node.js] [MySQL]</p>
				<p>Skills Used: [Full-Stack Development] [Database Management] [Security (password hashing)] [User Content Management] [Session Storage] [Component Based-Libraries]</p>
				<p>Public github links: <a href='https://github.com/RWACU/FoodGroups'>Client</a> <a href='https://github.com/RWACU/FoodGroupsServer'>Server</a></p>
				<img src='#' alt=''/>
			</article>
			<article>
				<h3>This Site!</h3>
				<p>This site is simply to showcase the projects I have worked on, as well as show that I can impliment CSS to properly create dynamic, responsive designs for multiple device sizes. As well as saying hi, to any potential employers. Hi!</p>
				<p>I've learned having a clear understanding of how the responsiveness of a site should be front and center when first creating mock-ups of a site.</p>
				<p>I had started creating the site with media queries trying to handle the switching between different designs; using React to dynamically send different classes to components. This proved inefficient, as it created a complicated, hardly readable codebase just to handle CSS classes.</p>
				<p>I throughout the media query handling of responsive design model I was using; opting to use CSS features such as clamp(), calc(), rem/em units, ect. to make sure that the site looked and preformed well on all platforms.</p>
				<p>This is also the first project I used Typescript in. As I originally learned development through C++, I am used to strongly typed languages; and although Typescript does have some quirks with the Javascript compilation, it was fairly easy to pick up</p>
				<p>(Please note to anyone who goes back through my Github Commits, I did use the 'any' keyword when first starting the project while learning Typescript, but strive to have no uses of 'any', unless absolutely necessary in the finished site.</p>
				<p>Technologies Used: [React] [Typescript] [Javascript] [CSS] [HTML]</p>
				<p>Skills Used: [Front-End] [Responsive Design] [Type Handling]</p>
				<p>Public github link: <a href='https://github.com/RWACU/FoodGroups'>Client</a></p>
				<img src='#' alt=''/>
			</article>
		</section>
	);
}

export default PagePortfolio;
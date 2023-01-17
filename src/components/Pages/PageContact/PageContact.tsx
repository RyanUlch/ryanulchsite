// CSS Import
import classes from './PageContact.module.css';

import PageBreaker from '../../PageBreaker/PageBreaker';

const PageContact = () => {
	return (
		<section id='contact'>
			<PageBreaker value='Contact Me' />
			<div className='background'>
				<article id='contact'>
					<h3>How to get in contact</h3>
					<p className={classes.p}>The best way to contact me is at my professional email address:</p>
					<a className={classes.emailLink} href='mailto: RyanUlchDev@gmail.com'>RyanUlchDev@Gmail.com</a>
					<em className='note'>I am currently available for freelance work.</em>
					<img src='#' alt=''/>
				</article>
				<article id='location'>
					<h3>Where I am</h3>
					<iframe
						title='MapFrame'
						className={classes.map}
						loading="lazy"
						allowFullScreen
						referrerPolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA72Tg4Xp4O92XC-9ilIGfgyVlVQpS59_Y&q=43220&zoom=11"
					/>
					<em className='note'>I reside in Columbus, Ohio. I can only accept jobs that are either local to the area, or are 100% work-from-home currently</em>
				</article>
			</div>
		</section>
	);
}

export default PageContact;
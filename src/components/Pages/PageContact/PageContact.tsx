// CSS Import
import classes from './PageContact.module.css';

import PageBreaker from '../../PageBreaker/PageBreaker';
import Expander from '../../Expander/Expander';


const PageContact = (props: unknown) => {
	return (
		<section id='contact'>
			<PageBreaker value='Contact Me' />
			<div className='background'>
				<article id='location'>
					<Expander anchor='location'>
						<p>I reside in Columbus, Ohio. I can only accept jobs that are either local to the area, or are 100% work-from-home currently</p>
						<p>This may change in the future</p>
						<img src='#' alt=''/>
					</Expander>
				</article>
				<article id='contact'>
					<Expander anchor='contact'>
						<p>The best way to contact me is at my professional email: <a href='mailto: RyanUlchDev@gmail.com'>RyanUlchDev@Gmail.com</a></p>
						<p>Please note, I am currently available for freelance work.</p>
						<img src='#' alt=''/>
					</Expander>
				</article>
			</div>
		</section>
	);
}

export default PageContact;
// CSS Import
import classes from './ContactContent.module.css';

const ContactContent = (props: any) => {
	return (
		<>
			<h2>Contact Me</h2>
			<article>
				<p>I reside in Columbus, Ohio. I can only accept jobs that are either local to the area, or are 100% work-from-home currently</p>
				<p>This may change in the future</p>
				<img src='#' alt=''/>
			</article>
			<article>
				<p>The best way to contact me is at my professional email: <a href='mailto: RyanUlchDev@gmail.com'>RyanUlchDev@Gmail.com</a></p>
				<p>Please note, I am currently available for freelance work.</p>
				<img src='#' alt=''/>
			</article>
		</>
	);
}

export default ContactContent;
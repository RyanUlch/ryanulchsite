// CSS Import
import classes from './Footer.module.css';

const Footer = (props: unknown) => {
	return (
		<>
			<div className={classes.footerBackground}></div>
			<footer className={classes.footer}>
				<h6 className={classes.h6}>A Ryan Ulch Website</h6>
			</footer>
		</>
	);
}

export default Footer;
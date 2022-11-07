// CSS Import
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<>
			<div className={classes.footerBackground}></div>
			<footer className={classes.footer}>
				<h6 className={classes.h6}>A <span className={classes.name}>Ryan Ulch</span> Website</h6>
			</footer>
		</>
	);
}

export default Footer;
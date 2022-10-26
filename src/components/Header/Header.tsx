// CSS Import
import classes from './Header.module.css';

const Header = (props: unknown) => {
	return (
		<header className={classes.header}>
			<h1 className={classes.h1}>Ryan Ulch <span className={classes.span}>Web Developer</span></h1>
		</header>
	);
}

export default Header;
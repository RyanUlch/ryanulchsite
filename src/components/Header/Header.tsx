// CSS Import
import classes from './Header.module.css';

const Header = (props: any) => {
	const themeChangeHandler = (event: any) => {
		event.preventDefault();
		props.onThemeChange((state: any) => !state);
	}

	return (
		<header>
			<div className={classes.headerBackground}></div>
			<div className={classes.header}><h1 className={classes.h1}>Ryan Ulch <span className={classes.span}>Web Developer</span></h1></div>
			<div className={classes.subHeader}>
				<a className={classes.btn} href='#root'>Resumé</a>
				<a className={classes.btn} href='#port'>Portfolio</a>
				<a className={classes.btn} href='#cont'>Contact Me</a>
				<a className={classes.btn} href='#' onClick={themeChangeHandler}>Change Theme</a>
			</div>
		</header>
	);
}

export default Header;
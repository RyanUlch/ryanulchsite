// CSS Import
import classes from './PageSelector.module.css';

import { useState, useEffect, useRef } from 'react';
import PageResume from './PageResume/PageResume';
import PagePortfolio from './PagePortfolio/PagePortfolio';
import PageContact from './PageContact/PageContact';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../../../App.css";

const PageSelector = (props: unknown) => {
// 	// Not all pages are shown at once in desktop mode.
// 	// Each page is assigned a numerical value to represent the page (see below)
// 	// Page is the JSX, pageNum is the # id

// 	// 0 = Resume Page		// 1 = Portfolio Page
// 	// 2 = Contact Page		// 3 > Left open for expansion
// 	// default = Loading message
	const [pageNum, setPageNum] = useState({num:0});
	const resRef = useRef(null);
	const porRef = useRef(null);
	const conRef = useRef(null);
	const nodeRef = pageNum.num === 0 ? resRef : pageNum.num === 1 ? porRef : conRef;
	return (
		<div className="main">
			<nav className={classes.nav}>
				<button className={classes.btn} onClick={() => { setPageNum({num:0}) }}>Resume</button>
				<button className={classes.btn} onClick={() => { setPageNum({num:1}) }}>Portfolio</button>
				<button className={classes.btn} onClick={() => { setPageNum({num:2}) }}>Contact</button>
			</nav>
			<SwitchTransition mode="out-in">
				<CSSTransition
					key={pageNum.num}
					nodeRef={nodeRef}
					addEndListener={(done: () => void) => {
						// @ts-ignore: Object is possibly 'null'.
						nodeRef.current?.addEventListener("transitionend", done, false);
					}}
					classNames="page">
					<div ref={nodeRef} className={classes.container}>
						<div className='all'>
							{pageNum.num === 0 ? <PageResume /> : pageNum.num === 1 ? <PagePortfolio /> : <PageContact />}
						</div>
					</div>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
}

export default PageSelector;
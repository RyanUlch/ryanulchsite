import './App.css';

import { useContext, useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Context } from './context/context';
import PageContainer from './components/PageContainer/PageContainer';
import PageResume from './components/Pages/PageResume/PageResume';
import PagePortfolio from './components/Pages/PagePortfolio/PagePortfolio';
import PageContact from './components/Pages/PageContact/PageContact';
import PageBreaker from './components/PageBreaker/PageBreaker';

import {CSSTransition} from 'react-transition-group';
import {useRef} from 'react';

function App() {
	const ctx = useContext(Context);
	// A note on displayMode //
		// display mode is calculated using the clients browsers height,
		// width and if it's in landscape/portrait. The client will view one
		// of 3 modes(views). The view meant for Desktop, Mobile, and Mobile in
		// landscape mode. You can acheive all views on a desktop browser by
		// resizing the browser, this is intentional as the content will look
		// nicer in mobile view if the page is too thin.
		
		// displaymode: 0 = Landscape Mobile mode, 1 = Portrait Mobile mode, 2 = Desktop Mode
		const [display, setDisplay] = useState({ mode: -1 });

		// Sets the display mode based on clients window, should be updated for anychange in height/width/orientation
	useEffect(() => {
		if (!ctx.isHigh && ctx.isLand) {	// Side Scroll Mode
			setDisplay({ mode: 0 });
		} else if (!ctx.isWide) {			// Mobile Mode
			setDisplay({ mode: 1 });
		} else {							// Desktop Mode
			setDisplay({ mode: 2 });
		}

	}, [ctx.isHigh, ctx.isWide, ctx.isLand]);

	const [isLightTheme, setIsLightTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

	useEffect(() => {
		if (isLightTheme) {
			document.documentElement.setAttribute("data-theme", "light");
		} else {
			document.documentElement.setAttribute("data-theme", "dark");
		}
	}, [isLightTheme]);

	return (
		<div className='page' >
			<Header onThemeChange={setIsLightTheme}/>
			<main id='resume'>
				<PageResume />
				<div id='port' className='anchor'></div>
				<PagePortfolio />
				<div id='cont' className='anchor'></div>
				<PageContact />
			</main>
			<Footer />
		</div>
	);
}

export default App; 



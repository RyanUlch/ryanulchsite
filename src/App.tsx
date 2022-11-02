import './App.css';

import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageResume from './components/Pages/PageResume/PageResume';
import PagePortfolio from './components/Pages/PagePortfolio/PagePortfolio';
import PageContact from './components/Pages/PageContact/PageContact';

function App() {
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



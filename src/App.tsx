import logo from './logo.svg';
import './App.css';

import { useContext, useEffect, useState } from 'react';

import LittleHeader from './components/LittleHeader/LittleHeader';
import SideHeader from './components/SideHeader/SideHeader';
import LittleFooter from './components/LittleFooter/LittleFooter';
import SideFooter from './components/SideFooter/SideFooter';

import { Context } from './context/context';
import PageContainer from './components/PageContainer/PageContainer';

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


	return (
		<div className='page'>
			{display.mode > 0 && <><LittleHeader /><PageContainer {...display}/><LittleFooter /></>}
			{display.mode === 0 && <><SideHeader /><PageContainer {...display}/><SideFooter /></>}
		</div>
	);
}

export default App; 
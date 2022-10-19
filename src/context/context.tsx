/* Context is used to store browsers settings */

// React Imports
import { createContext, useState, useEffect } from 'react';

const Provider = (props: any) => {
	// The height/width at which site switches from wide more to slim mode
	const wideWidth		= '400px';
	const highHeight	= '400px';

	// Use matchMedia.matches to query client
	const match = (query: string) => window.matchMedia(`(${query})`).matches;

	// The initial state of the clients window when first opened
	const initialState = {
		// Is Wide enough for desktop view
		isWide:		match(`min-Width:				${wideWidth}`),
		// Is High enough for desktop view
		isHigh:		match(`min-height:				${highHeight}`),
		// Can click smaller Links/Buttons
		hasPointer:	match(`pointer:					fine`),
		// Is set to Fullscreen (easter egg)
		isFull:		match(`display-mode:			fullscreen`),
		// If also not wide, use horizontal scroll
		isLand:		match(`orientation:				landscape`),
		// Make theme dark
		isDark:		match(`prefers-color-scheme:	dark`),
		// Do not use animations
		isReduced:	match(`prefers-reduced-motion:	reduce`),
	}

	// client contains all Context Data accessed through provider in rest of application
	const [client, setClient] = useState(initialState);

	// Use addEventListener to watch for client changes
	const listen = (query: string, prop: string) => {
		// Create Query Match
		window.matchMedia(`(${query})`)
		// Attatch listener to change 'client'
		.addEventListener('change', (event:any)=>{
			setClient((state: any)=>{
				return{...state, [prop]: event.matches}
			});
		});
	}

	// Only add listeners when first loaded
	useEffect(() => {
		listen(`min-Width:${wideWidth}`,		'isWide');
		listen(`min-height:${highHeight}`,		'isHigh');
		listen('pointer:fine',					'hasPointer');
		listen('display-mode:fullscreen',		'isFull');
		listen('orientation:landscape',			'isLand');
		listen('prefers-color-scheme:dark',		'isDark');
		listen('prefers-reduced-motion:reduce',	'isReduced');
	}, []);

	// Provider that just supplies the ability to call context for all children
    return (
		<Context.Provider value={client}>
			{props.children}
		</Context.Provider>
	);
};

// Exports
export default Provider;
export const Context = createContext<any>({});
export const setTransitionHeight = (selector: string, cssVar: string) => {
	const element = document.querySelector(selector) as HTMLElement | null;
	const root = document.querySelector(':root') as HTMLElement | null;
	const btn = document.querySelector('.expandBtn') as HTMLElement | null;

	if (root && element && btn) {
		const elementStyles = getComputedStyle(element);
		root.style.setProperty(cssVar,
			`${
				// Height of 'Show Less' button
				// (x3 - to display all of element since they overlap)
				(5*btn.offsetHeight)	
				// Element Height without margins
				+element.offsetHeight
				// Margins from the element
				+parseFloat(elementStyles['marginTop'])
				+parseFloat(elementStyles['marginBottom'])	
				// Set final sum in pixels
			}px`
		);
	}
}


export const setGradientHeight = () => {
	const root = document.querySelector(':root') as HTMLElement | null;
	const btn = document.querySelector('.expandBtn') as HTMLElement | null;

	if (root && btn) {
		root.style.setProperty('--expandButtonHeight',
			`${
				// Height of 'Show Less' button
				(btn.offsetHeight)
				// offset of page/button margins
				+20
			}px`
		);
	}
}
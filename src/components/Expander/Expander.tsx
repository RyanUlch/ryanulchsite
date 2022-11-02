// CSS Import
import classes from './Expander.module.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Expander = (props: any) => {
	const [inProp, setInProp] = useState(true);

	const handleExpand = (event: any) => {
		event.preventDefault();
		if (!inProp) {
			const ele = document.getElementById(props.anchor);
			const rect = ele?.getBoundingClientRect();
			if (rect) {
				window.scrollTo(0, window.scrollY+rect.y-200);
			}
		}
		setInProp((state) => !state);
	}

	return (
		<>
			<CSSTransition appear={true} in={inProp} timeout={1000} classNames="my-node">
				<div className={classes.container}>
					{props.children}
				</div>
			</CSSTransition>
			
			<button className={`${classes.btn} ${inProp ? classes.opened : classes.closed}`} type="button" onClick={handleExpand}>
				{inProp ? 'Show More' : 'Show Less'}
			</button>
		</>
	);
}

export default Expander;
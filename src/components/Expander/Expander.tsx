// CSS Import
import classes from './Expander.module.css';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { setGradientHeight } from '../../helpers/transition';

type props = {
	anchor: string,
	children?: React.ReactNode,
};

const Expander = (props: {nodeName: string, anchor: string, children?: React.ReactNode}) => {
	const [inProp, setInProp] = useState(true);

	useEffect(() => {
		setGradientHeight();
	}, []);

	const handleExpand = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		if (!inProp) {
			const ele = document.getElementById(props.anchor);
			const rect = ele?.getBoundingClientRect();
			if (rect) {
				window.scrollTo(0, window.scrollY+rect.y);
			}
		}
		setInProp((state) => !state);
	}

	return (
		<>
			<CSSTransition appear={true} in={inProp} timeout={1000} classNames={props.nodeName}>
				<div className={classes.container}>
					{props.children}
				</div>
			</CSSTransition>
			{inProp ? <div className={classes.overlay}></div> : '' }
			<button className={`expandBtn ${classes.btn} ${inProp ? classes.opened : classes.closed}`} type="button" onClick={handleExpand}>
				{inProp ? 'Show More' : 'Show Less'}
			</button>
		</>
	);
}

export default Expander;
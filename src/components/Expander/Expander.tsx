// CSS Import
import classes from './Expander.module.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Expander = (props: any) => {
	const [inProp, setInProp] = useState(true);
	return (
		<>
			<CSSTransition appear={true} in={inProp} timeout={1000} classNames="my-node">
				<div className={classes.conatiner}>
					{props.children}
				</div>
			</CSSTransition>
			
			<button className={classes.btn} type="button" onClick={() => setInProp((state) => !state)}>
				{inProp ? 'Show More' : 'Show Less'}
			</button>
		</>
	);
}

export default Expander;

//className={`${isExpanded ? classes.expandedArea : classes.collapsedArea} canExpand`
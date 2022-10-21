// CSS Import
import classes from './LittleFooter.module.css';
import { useState } from 'react';
import FooterContent from '../../Content/FooterContent/FooterContent';

const LittleFooter = (props: unknown) => {
	const [cssClasses] = useState({
		footerTitle: classes.footerTitle,
	})

	return (<footer><FooterContent {...cssClasses}/></footer>);
}

export default LittleFooter;
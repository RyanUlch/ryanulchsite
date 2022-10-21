// CSS Import
import classes from './SideFooter.module.css';
import { useState } from 'react';
import FooterContent from '../../Content/FooterContent/FooterContent';

const SideFooter = (props: unknown) => {
	const [cssClasses] = useState({
		footerTitle: classes.footerTitle,
	})
	return (<footer><FooterContent {...cssClasses}/></footer>);
}

export default SideFooter;
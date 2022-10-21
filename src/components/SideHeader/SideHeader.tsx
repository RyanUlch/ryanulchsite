// CSS Import
import classes from './SideHeader.module.css';
import HeaderContent from '../../Content/HeaderContent/HeaderContent';
import { useState } from 'react';

const SideHeader = (props: unknown) => {
	const [cssClasses] = useState({
		headerTitle: classes.headerTitle,
	});
	return (<header><HeaderContent {...cssClasses}/></header>);
}

export default SideHeader;
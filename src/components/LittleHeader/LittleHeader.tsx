// CSS Import
import classes from './LittleHeader.module.css';

import { useState } from 'react';

import HeaderContent from '../../Content/HeaderContent/HeaderContent';

const LittleHeader = (props: unknown) => {

	const [cssClasses] = useState({
		headerTitle: classes.headerTitle,
	})

	return (<header><HeaderContent {...cssClasses}/></header>);
}

export default LittleHeader;
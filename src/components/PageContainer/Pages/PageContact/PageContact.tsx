// CSS Import
import classes from './PageContact.module.css';

import { useState } from 'react';

import ContactContent from '../../../../Content/ContactContent/ContactContent';

const PageContact = (props: unknown) => {
	const [cssClasses] = useState({
		article_contact:	classes.article_contact,
		h2_contact:			classes.h2_contact,
		p_contact:			classes.p_contact,
		img_contact:		classes.img_contact,
	});

	return (<section><ContactContent {...cssClasses} /></section>);
}

export default PageContact;
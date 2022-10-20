// CSS Import
import classes from './PageResume.module.css';

import { useState } from 'react';

import ResumeContent from '../../../../Content/ResumeContent/ResumeContent';

const PageResume = (props: unknown) => {
	const [cssClasses] = useState({
		article_resume: classes.article_resume,
		h2_resume:		classes.h2_resume,
		p_resume:		classes.p_resume,
		img_resume:		classes.img_resume,
	});

	return (<section><ResumeContent {...cssClasses} /></section>);
}

export default PageResume;
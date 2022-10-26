// CSS Import
import classes from './PageResume.module.css';

import { useState } from 'react';

import ResumeContent from '../../../../Content/ResumeContent/ResumeContent';



const PageResume = (props: any) => {
	return (<section className={props.page}><ResumeContent/></section>);
}

export default PageResume;
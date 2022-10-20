// CSS Import
import classes from './PageSelector.module.css';

import { useState, useEffect } from 'react';
import PageResume from './PageResume/PageResume';
import PagePortfolio from './PagePortfolio/PagePortfolio';
import PageContact from './PageContact/PageContact';

const PageSelector = (props: unknown) => {
	// Not all pages are shown at once in desktop mode.
	// Each page is assigned a numerical value to represent the page (see below)
	// Page is the JSX, pageNum is the # id

	// 0 = Resume Page		// 1 = Portfolio Page
	// 2 = Contact Page		// 3 > Left open for expansion
	// default = Loading message
	const [page, setPage] 		= useState(<></>);
	const [pageNum, setPageNum] = useState(0);

	useEffect(() => {
		switch(pageNum) {
			case 0: setPage(<PageResume />); break;
			case 1: setPage(<PagePortfolio />); break;
			case 2: setPage(<PageContact />); break;
			default: setPage(<p>Loading...</p>);
		}
	}, [pageNum])
	
	return (<>{page}</>);
}

export default PageSelector;
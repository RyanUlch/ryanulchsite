// CSS Import
import classes from './PagePortfolio.module.css';

import { useState } from 'react';

import PortfolioContent from '../../../../Content/PortfolioContent/PortfolioContent';

const PagePortfolio = (props: unknown) => {
	const [cssClasses] = useState({
		article_portfolio:	classes.article_portfolio,
		h2_portfolio:		classes.h2_portfolio,
		p_portfolio:		classes.p_portfolio,
		img_portfolio:		classes.img_portfolio,
	});

	return (<section><PortfolioContent {...cssClasses}  /></section>);
}

export default PagePortfolio;
// CSS Import
import PageBreaker from '../PageBreaker/PageBreaker';
import classes from './PageContainer.module.css';

import PageContact from '../Pages/PageContact/PageContact';
import PagePortfolio from '../Pages/PagePortfolio/PagePortfolio';
import PageResume from '../Pages/PageResume/PageResume';

import PageSelector from '../Pages/PageSelector';

const PageContainer = (props: { mode: Number }) => {

	return (
		<main>
			{props.mode === 2 
				? <PageSelector />
				: <div className={classes.content}><PageResume /><PageBreaker /><PagePortfolio /><PageBreaker /><PageContact /></div>
			}
		</main>
	)
}

export default PageContainer;
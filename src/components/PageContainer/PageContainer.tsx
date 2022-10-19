// CSS Import
import PageBreaker from './PageBreaker/PageBreaker';
import classes from './PageContainer.module.css';

import PageContact from './Pages/PageContact/PageContact';
import PagePortfolio from './Pages/PagePortfolio/PagePortfolio';
import PageResume from './Pages/PageResume/PageResume';

import PageSelector from './Pages/PageSelector';

const PageContainer = (props: { mode: Number }) => {

	return (
		<>
		<p>Page Container</p>
			{props.mode === 2 
				? <PageSelector />
				: <><PageResume /><PageBreaker /><PagePortfolio /><PageBreaker /><PageContact /></>
			}
		</>
	)
}

export default PageContainer;
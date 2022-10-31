// CSS Import
import classes from './PageBreaker.module.css';

const PageBreaker = (props: any) => {
	return (<div className={classes.pageBreaker}><h2>{props.value}</h2></div>);
}

export default PageBreaker;
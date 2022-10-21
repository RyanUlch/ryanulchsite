// CSS Import
import classes from './HeaderContent.module.css';

const HeaderContent = (props: any) => {
	return (
		<h1 className={`${props.headerTitle}`}>Header Content</h1>
	)
}

export default HeaderContent;
// CSS Import
import classes from './PortfolioContent.module.css';

const PortfolioContent = (props: any) => {
	return (
		<article	className={`${props.article_portfolio}`}>
			<h2		className={`${props.h2_portfolio}`}>Portfolio Content</h2>
			<p		className={`${props.p_portfolio}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper magna eu diam consequat, et condimentum orci rutrum. Curabitur fringilla vitae ligula id lacinia. Phasellus imperdiet vehicula mi ac egestas. Ut vestibulum auctor arcu vitae iaculis. Integer sodales arcu sit amet elit hendrerit iaculis. Phasellus augue quam, lacinia at nisi id, tristique suscipit nibh. Vivamus scelerisque tempus neque in semper. Nam et nisl ut ante ullamcorper aliquet. Curabitur consequat lectus aliquet ligula vestibulum blandit et eget purus. Phasellus mollis lectus a purus finibus, id consectetur ligula auctor.</p>
			<p		className={`${props.p_portfolio}`}>Integer gravida nulla eu nisi lobortis, eu sodales elit sagittis. Donec vitae lacinia nisi. Fusce elementum posuere diam, non malesuada neque aliquet vitae. Nullam a aliquam lorem. Nunc luctus condimentum suscipit. Pellentesque nulla turpis, fermentum in porta mattis, pellentesque ac odio. Maecenas vehicula mi nec lectus dictum dictum. Duis in facilisis leo. Sed fringilla laoreet pretium. Vivamus sit amet commodo ligula. Duis commodo fermentum vulputate. Aenean at purus et lacus maximus venenatis. Sed congue, metus a fermentum luctus, elit velit dapibus lacus, ut tempus enim dolor eu orci. Proin et nulla pulvinar, facilisis nibh ut, dapibus dolor.</p>
			<img	className={`${props.img_portfolio}`}src='#' alt=''/>
		</article>
	);
}

export default PortfolioContent;
import classes from "./ImageBox.module.css";

function HouseBox(props: { src: string }) {
	console.log(`../../../public/images/header/${props.src}`);

	return (
		<div className={classes.imageBorder}>
			<img className={classes.image} src={`/images/header/${props.src}`} />
		</div>
	);
}

export default HouseBox;

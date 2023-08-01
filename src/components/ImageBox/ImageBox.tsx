import classes from "./ImageBox.module.css";

function HouseBox(Props: { src: string; alt: string; label?: string; href?: string }) {
	return (
		<div className={`${classes.imageAndLabel} ${Props.href ? classes.grow : ""}`}>
			<div className={`${classes.imageBorder} ${Props.href ? classes.linked : ""}`}>
				{Props.href ? (
					<a className={classes.link} href={Props.href} target="_blank" rel="noreferrer">
						<img
							className={classes.image}
							src={`/images/pictures/${Props.src}`}
							alt={Props.alt}
						/>
					</a>
				) : (
					<img
						className={classes.image}
						src={`/images/pictures/${Props.src}`}
						alt={Props.alt}
					/>
				)}
			</div>
			{Props.label ? <label className={classes.label}>{Props.label}</label> : <></>}
		</div>
	);
}

export default HouseBox;

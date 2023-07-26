import classes from "./StartStopGif.module.css";
import { useState } from "react";

function StartStopGif(props: { src: string }) {
	const [gifRunning, setGifRunning] = useState(true);

	return (
		<picture
			onClick={() =>
				setGifRunning((prev) => {
					return !prev;
				})
			}
		>
			<source
				srcSet={`/images/PixelArt/${props.src}_pause.png`}
				media="(prefers-reduced-motion)"
			/>
			{gifRunning ? (
				<img className={classes.gif} src={`/images/PixelArt/${props.src}_start.gif`} />
			) : (
				<img className={classes.gif} src={`/images/PixelArt/${props.src}_end.gif`} />
			)}
		</picture>
	);
}

export default StartStopGif;

import classes from "./FenceBox.module.css";
import type { ReactNode } from "react";

function FenceBox(props: { children: ReactNode; heading?: string }) {
	return (
		<article className={classes.fenceArticle}>
			{props.heading ? (
				<div className={`${classes.fenceHeader}`}>
					<h3 className={classes.fenceHeaderText}>{props.heading}</h3>
				</div>
			) : (
				<></>
			)}
			<div className={classes.fenceBody}>{props.children}</div>
		</article>
	);
}

export default FenceBox;

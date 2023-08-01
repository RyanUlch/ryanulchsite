import classes from "./FenceBox.module.css";
import type { ReactNode } from "react";

function FenceBox(props: { children: ReactNode; heading?: string }) {
	return (
		<article className={classes.fenceArticle}>
			{props.heading ? (
				<div className={`${classes.fenceHeader}`}>
					<div className={classes.fenceGround}>
						<h3 className={classes.fenceHeaderText}>{props.heading}</h3>
					</div>
				</div>
			) : (
				<></>
			)}
			<div className={classes.fenceBody}>
				<div className={classes.fenceGround}>{props.children}</div>
			</div>
		</article>
	);
}

export default FenceBox;

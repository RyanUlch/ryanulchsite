import classes from "./HouseBox.module.css";
import type { ReactNode } from "react";

function HouseBox(Props: { children: ReactNode; title?: string; isBlue?: boolean }) {
	return (
		<>
			<div className={`${classes.houseBody} ${Props.isBlue ? classes.blue : classes.red}`}>
				{Props.title ? <h3 className={classes.title}>{Props.title}</h3> : <></>}
				{Props.children}
			</div>
		</>
	);
}

export default HouseBox;

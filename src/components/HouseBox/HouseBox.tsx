import classes from "./HouseBox.module.css";
import type { ReactNode } from "react";

function HouseBox(props: { children: ReactNode; isBlue?: boolean }) {
	return (
		<div className={`${classes.houseBody} ${props.isBlue ? classes.blue : classes.red}`}>
			{props.children}
		</div>
	);
}

export default HouseBox;

import classes from "./SectionGroup.module.css";
import type { ReactNode } from "react";

function SectionGroup(Props: { children: ReactNode; isOdd?: boolean }) {
	return (
		<section
			className={`${classes.sectionBody} ${Props.isOdd ? classes.isOdd : classes.isEven}`}
		>
			{Props.children}
		</section>
	);
}

export default SectionGroup;

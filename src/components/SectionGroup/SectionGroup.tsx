import classes from "./SectionGroup.module.css";
import type { ReactNode } from "react";

function SectionGroup(props: { children: ReactNode }) {
	return <section className={classes.sectionBody}>{props.children}</section>;
}

export default SectionGroup;

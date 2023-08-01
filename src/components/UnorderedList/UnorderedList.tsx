import classes from "./UnorderedList.module.css";

const UnorderedList = (Props: { children: string[]; title: string }) => {
	const generateList = () => {
		const listItems: JSX.Element[] = [];
		for (let i = 0; i < Props.children.length; ++i) {
			listItems.push(
				<li
					key={i}
					className={`${classes.li} ${
						i % 2 === 0 ? classes.noBackground : classes.background
					}`}
				>
					{/* <div className={classes.flex}>{Props.children[i]}</div> */}
					<p>{Props.children[i]}</p>
				</li>
			);
		}
		return listItems;
	};

	return (
		<>
			<div className={classes.doubleLists}>
				<h3>{Props.title}</h3>
				<ul className={classes.list}>{generateList()}</ul>
			</div>
		</>
	);
};

export default UnorderedList;

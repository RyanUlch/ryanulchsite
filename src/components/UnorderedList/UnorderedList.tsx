import classes from "./UnorderedList.module.css";

const UnorderedList = (Props: { children: { name: string; link?: string }[]; title: string }) => {
	const generateList = () => {
		const listItems: JSX.Element[] = [];
		let i = 0;
		for (const listItem of Props.children) {
			listItems.push(
				<li
					key={listItem.name}
					className={`${classes.li} ${
						i % 2 === 0 ? classes.noBackground : classes.background
					}`}
				>
					{listItem.link ? (
						<a href={listItem.link}>{listItem.name}</a>
					) : (
						<p>{listItem.name}</p>
					)}
				</li>
			);
			++i;
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

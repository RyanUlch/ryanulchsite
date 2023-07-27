const Image = (Props: { alt: string; src: string }) => {
	return <img alt={Props.alt} src={`images/pictures/${Props.src}`} />;
};

export default Image;

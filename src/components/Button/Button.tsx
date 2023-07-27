const Button = (Props: { msg: string }) => {
	const vibrate = () => {
		if ('vibrate' in navigator) {
			// window.navigator.vibrate = navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
			navigator.vibrate(50);
		} else {
			alert('Vibration is not supported');
		}
	};

	return <button onClick={vibrate}>{Props.msg}</button>;
};

export default Button;

function animateValue(obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

const elements = document.querySelectorAll("span#value");

elements.forEach((element) => {
	const endValue = parseInt(element.innerHTML, 10);
	animateValue(element, 0, endValue, 2000);
});

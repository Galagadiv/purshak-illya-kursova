const sourceElement = document.querySelector(".container");

// Елемент, якому передаємо відступ
const projCont = document.getElementById("project");
const clientsCont = document.getElementById("client");

// Значення відступу на інший елемент
const computedStyle = window.getComputedStyle(sourceElement);

if (window.innerWidth >= 1440) {
	// Отримуємо значення відступу
	const computedStyle = window.getComputedStyle(sourceElement);
	projCont.style.marginLeft = computedStyle.marginLeft;
	clientsCont.style.marginLeft = computedStyle.marginLeft;
}

var clientSlider = new Splide("#clientsSliderSection", {
	type: "slider",
	focus: "left",
	pagination: false,
	breakpoints: {
		400: {
			arrows: false,
		},
	},
});

clientSlider.mount();

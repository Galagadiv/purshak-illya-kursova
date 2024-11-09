var clientSlider = new Splide("#clientsSliderSection", {
	type: "slide",
	perPage: 3,
	focus: "right",
	pagination: false,
	breakpoints: {
		480: {
			//
		},
	},
});

clientSlider.mount();

const sourceElement = document.querySelector(".container");

// Елемент, якому передаємо відступ
const projCont = document.getElementById("project");
const clientsCont = document.getElementById("client");

// Значення відступу на інший елемент
const computedStyle = window.getComputedStyle(sourceElement);
projCont.style.marginLeft = computedStyle.marginLeft;
clientsCont.style.marginLeft = computedStyle.marginLeft;

let currentPosition = 0;
const slideWidth = 460; // Ширина одного слайда
const slidesContainer = document.getElementById("btn-slider"); // Контейнер для слайдів

function moveSlides(direction) {
	currentPosition += direction * slideWidth;

	// Обмеження для слайдів
	const maxMoveLeft = 0;
	const maxMoveRight = -(
		slidesContainer.scrollWidth - slidesContainer.clientWidth
	);

	// Запобігання виходу за межі контейнера
	if (currentPosition > maxMoveLeft) {
		currentPosition = maxMoveLeft;
	}
	if (currentPosition < maxMoveRight) {
		currentPosition = maxMoveRight;
	}

	// Застосування зміщення до контейнера
	slidesContainer.style.transform = `translateX(${currentPosition}px)`;
}

// Прив'язуємо функції до кнопок
document.getElementById("left").addEventListener("click", () => moveSlides(1)); // Рух вліво
document
	.getElementById("right")
	.addEventListener("click", () => moveSlides(-1)); // Рух вправо

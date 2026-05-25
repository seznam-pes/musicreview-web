document.addEventListener("DOMContentLoaded", () => {
	const carousel = document.querySelector(".carousel");
	if (!carousel) {
		return;
	}

	const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
	const prevButton = carousel.querySelector(".carousel-btn.prev");
	const nextButton = carousel.querySelector(".carousel-btn.next");

	if (slides.length < 3 || !prevButton || !nextButton) {
		return;
	}

	let currentIndex = 0;
	let autoplayTimer;

	const updateCarousel = (index) => {
		currentIndex = (index + slides.length) % slides.length;
		const leftIndex = (currentIndex - 1 + slides.length) % slides.length;
		const rightIndex = (currentIndex + 1) % slides.length;

		slides.forEach((slide, i) => {
			slide.classList.remove("carousel-slide--prev", "carousel-slide--active", "carousel-slide--next", "carousel-slide--hidden", "is-active");

			if (i === currentIndex) {
				slide.classList.add("carousel-slide--active", "is-active");
			} else if (i === leftIndex) {
				slide.classList.add("carousel-slide--prev");
			} else if (i === rightIndex) {
				slide.classList.add("carousel-slide--next");
			} else {
				slide.classList.add("carousel-slide--hidden");
			}
		});
	};

	const restartAutoplay = () => {
		clearInterval(autoplayTimer);
		autoplayTimer = setInterval(() => {
			updateCarousel(currentIndex + 1);
		}, 5000);
	};

	prevButton.addEventListener("click", () => {
		updateCarousel(currentIndex - 1);
		restartAutoplay();
	});

	nextButton.addEventListener("click", () => {
		updateCarousel(currentIndex + 1);
		restartAutoplay();
	});

	carousel.addEventListener("mouseenter", () => clearInterval(autoplayTimer));
	carousel.addEventListener("mouseleave", restartAutoplay);

	updateCarousel(0);
	restartAutoplay();
});

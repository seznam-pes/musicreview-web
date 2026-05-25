document.addEventListener("DOMContentLoaded", () => {
	const carousel = document.querySelector(".carousel");
	if (!carousel) {
		return;
	}

	const track = carousel.querySelector(".carousel-track");
	const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
	const prevButton = carousel.querySelector(".carousel-btn.prev");
	const nextButton = carousel.querySelector(".carousel-btn.next");
	const dotsContainer = carousel.querySelector(".carousel-dots");

	if (!track || slides.length === 0 || !prevButton || !nextButton || !dotsContainer) {
		return;
	}

	let currentIndex = 0;
	let autoplayTimer;

	const dots = slides.map((_, index) => {
		const dot = document.createElement("button");
		dot.type = "button";
		dot.className = "carousel-dot";
		dot.setAttribute("aria-label", `Přejít na snímek ${index + 1}`);
		dotsContainer.appendChild(dot);
		return dot;
	});

	const updateCarousel = (index) => {
		currentIndex = (index + slides.length) % slides.length;
		track.style.transform = `translateX(-${currentIndex * 100}%)`;

		slides.forEach((slide, i) => {
			slide.classList.toggle("is-active", i === currentIndex);
		});

		dots.forEach((dot, i) => {
			dot.classList.toggle("is-active", i === currentIndex);
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

	dots.forEach((dot, i) => {
		dot.addEventListener("click", () => {
			updateCarousel(i);
			restartAutoplay();
		});
	});

	carousel.addEventListener("mouseenter", () => clearInterval(autoplayTimer));
	carousel.addEventListener("mouseleave", restartAutoplay);

	updateCarousel(0);
	restartAutoplay();
});

(function () {
    "use strict";

    const images = [
        { src: "../img/24.jpg", alt: "Album 1" },
        { src: "../img/barvy.jpg", alt: "Album 2" },
        { src: "../img/buldozer.jpg", alt: "Album 3" },
        { src: "../img/bully.jpg", alt: "Album 4" },
        { src: "../img/mbdtf.jpg", alt: "Album 5" },
        { src: "../img/mnkpd.jpg", alt: "Album 6" },
        { src: "../img/ondd.jpg", alt: "Album 7" },
        { src: "../img/roomservice.jpg", alt: "Album 8" },
        { src: "../img/samo.jpg", alt: "Album 9" },
    ];

    let current = 0;
    let isAnimating = false;

    function buildCarousel() {
        const main = document.querySelector("main");
        if (!main) return;

        const section = document.createElement("section");
        section.className = "carousel-section";
        section.setAttribute("aria-label", "Carousel recenzí");

        const wrapper = document.createElement("div");
        wrapper.className = "carousel-wrapper";

        const btnLeft = document.createElement("button");
        btnLeft.className = "carousel-btn left";
        btnLeft.setAttribute("aria-label", "Předchozí");
        btnLeft.innerHTML = "&#8592;";

        const btnRight = document.createElement("button");
        btnRight.className = "carousel-btn right";
        btnRight.setAttribute("aria-label", "Další");
        btnRight.innerHTML = "&#8594;";

        const track = document.createElement("div");
        track.className = "carousel-track";

        images.forEach((img, i) => {
            const slide = document.createElement("div");
            slide.className = "carousel-slide hidden";
            slide.dataset.index = i;

            const image = document.createElement("img");
            image.src = img.src;
            image.alt = img.alt;
            image.draggable = false;

            slide.appendChild(image);
            track.appendChild(slide);

            slide.addEventListener("click", () => {
                if (isAnimating) return;
                const diff = i - current;
                if (diff === 0) return;
                if (
                    diff === 1 ||
                    (diff === -(images.length - 1))
                ) {
                    goTo((current + 1) % images.length);
                } else if (
                    diff === -1 ||
                    diff === images.length - 1
                ) {
                    goTo((current - 1 + images.length) % images.length);
                }
            });
        });

        const dots = document.createElement("div");
        dots.className = "carousel-dots";
        images.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.className = "carousel-dot";
            dot.setAttribute("aria-label", `Přejít na snímek ${i + 1}`);
            dot.addEventListener("click", () => {
                if (isAnimating || i === current) return;
                goTo(i);
            });
            dots.appendChild(dot);
        });

        btnLeft.addEventListener("click", () => {
            if (isAnimating) return;
            goTo((current - 1 + images.length) % images.length);
        });

        btnRight.addEventListener("click", () => {
            if (isAnimating) return;
            goTo((current + 1) % images.length);
        });

        wrapper.appendChild(btnLeft);
        wrapper.appendChild(track);
        wrapper.appendChild(btnRight);
        section.appendChild(wrapper);
        section.appendChild(dots);
        main.appendChild(section);

        updateSlides();
    }

    function updateSlides() {
        const slides = document.querySelectorAll(".carousel-slide");
        const dotEls = document.querySelectorAll(".carousel-dot");
        const prev = (current - 1 + images.length) % images.length;
        const next = (current + 1) % images.length;

        slides.forEach((slide, i) => {
            slide.classList.remove("active", "prev", "next", "hidden");
            if (i === current) {
                slide.classList.add("active");
            } else if (i === prev) {
                slide.classList.add("prev");
            } else if (i === next) {
                slide.classList.add("next");
            } else {
                slide.classList.add("hidden");
            }
        });

        dotEls.forEach((dot, i) => {
            dot.classList.toggle("active", i === current);
        });
    }

    function goTo(index) {
        isAnimating = true;
        current = index;
        updateSlides();
        setTimeout(() => {
            isAnimating = false;
        }, 650);
    }

    let touchStartX = null;

    document.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    document.addEventListener("touchend", (e) => {
        if (touchStartX === null) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (isAnimating) return;
            goTo(diff > 0
                ? (current + 1) % images.length
                : (current - 1 + images.length) % images.length
            );
        }
        touchStartX = null;
    }, { passive: true });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            if (isAnimating) return;
            goTo((current - 1 + images.length) % images.length);
        } else if (e.key === "ArrowRight") {
            if (isAnimating) return;
            goTo((current + 1) % images.length);
        }
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", buildCarousel);
    } else {
        buildCarousel();
    }
})();

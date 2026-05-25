(function () {
    "use strict";

    const images = [
        { src: "../img/24.jpg", alt: "Album 1", href: "../html/24.html" },
        { src: "../img/barvy.jpg", alt: "Album 2", href: "../html/barvy.html" },
        { src: "../img/buldozer.jpg", alt: "Album 3", href: "../html/buldozer.html" },
        { src: "../img/bully.jpg", alt: "Album 4", href: "../html/bully.html" },
        { src: "../img/mbdtf.jpg", alt: "Album 5", href: "../html/mbdtf.html" },
        { src: "../img/mnkpd.jpg", alt: "Album 6", href: "../html/mnkpd.html" },
        { src: "../img/ondd.jpg", alt: "Album 7", href: "../html/ondd.html" },
        { src: "../img/roomservice.jpg", alt: "Album 8", href: "../html/roomservice.html" },
        { src: "../img/samo.jpg", alt: "Album 9", href: "../html/samo.html" },
    ];

    let current = 0;
    let isAnimating = false;

    function buildCarousel() {
        const main = document.querySelector("main");
        if (!main) return;

        const section = document.createElement("section");
        section.className = "carousel-section";
        section.setAttribute("aria-label", "Carousel recenzí");

        const outer = document.createElement("div");
        outer.className = "carousel-outer";

        const btnLeft = document.createElement("button");
        btnLeft.className = "carousel-btn";
        btnLeft.setAttribute("aria-label", "Předchozí");
        btnLeft.innerHTML = "&#8592;";

        const btnRight = document.createElement("button");
        btnRight.className = "carousel-btn";
        btnRight.setAttribute("aria-label", "Další");
        btnRight.innerHTML = "&#8594;";

        const wrapper = document.createElement("div");
        wrapper.className = "carousel-wrapper";

        const track = document.createElement("div");
        track.className = "carousel-track";

        images.forEach((img, i) => {
            const slide = document.createElement("a");
            slide.className = "carousel-slide hidden";
            slide.dataset.index = i;
            slide.href = img.href;

            const image = document.createElement("img");
            image.src = img.src;
            image.alt = img.alt;
            image.draggable = false;

            slide.appendChild(image);
            track.appendChild(slide);

            slide.addEventListener("click", (e) => {
                const cls = slide.classList;
                if (cls.contains("prev") || cls.contains("next")) {
                    e.preventDefault();
                    if (isAnimating) return;
                    goTo(i);
                }
                // active slide follows href normally
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

        wrapper.appendChild(track);
        outer.appendChild(btnLeft);
        outer.appendChild(wrapper);
        outer.appendChild(btnRight);
        section.appendChild(outer);
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
            if (i === current) slide.classList.add("active");
            else if (i === prev) slide.classList.add("prev");
            else if (i === next) slide.classList.add("next");
            else slide.classList.add("hidden");
        });

        dotEls.forEach((dot, i) => {
            dot.classList.toggle("active", i === current);
        });
    }

    function goTo(index) {
        isAnimating = true;
        current = index;
        updateSlides();
        setTimeout(() => { isAnimating = false; }, 650);
    }

    let touchStartX = null;
    document.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    document.addEventListener("touchend", (e) => {
        if (touchStartX === null) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (isAnimating) return;
            goTo(diff > 0 ? (current + 1) % images.length : (current - 1 + images.length) % images.length);
        }
        touchStartX = null;
    }, { passive: true });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") { if (!isAnimating) goTo((current - 1 + images.length) % images.length); }
        else if (e.key === "ArrowRight") { if (!isAnimating) goTo((current + 1) % images.length); }
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", buildCarousel);
    } else {
        buildCarousel();
    }
})();
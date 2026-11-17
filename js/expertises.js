document.addEventListener("DOMContentLoaded", () => {

    // =================================
    // MENU MOBILE
    // =================================

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

        document.addEventListener("click", event => {
            if (
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }


    // =================================
    // ANNÉE AUTOMATIQUE
    // =================================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // =================================
    // DIAPORAMAS DES EXPERTISES
    // =================================

    const slideshows = document.querySelectorAll("[data-slideshow]");

    slideshows.forEach(slideshow => {

        const images = slideshow.querySelectorAll("img");

        if (images.length <= 1) return;

        let currentIndex = 0;

        images.forEach((image, index) => {

            image.classList.toggle("active", index === 0);

        });

        setInterval(() => {

            images[currentIndex].classList.remove("active");

            currentIndex = (currentIndex + 1) % images.length;

            images[currentIndex].classList.add("active");

        }, 4000);

    });


    // =================================
    // ANIMATIONS AU DÉFILEMENT
    // =================================

    const revealElements = document.querySelectorAll(
        ".expertise-hero-content, " +
        ".expertise-hero-visual, " +
        ".intro-heading, " +
        ".intro-description, " +
        ".section-heading, " +
        ".expertise-card, " +
        ".approach-content, " +
        ".approach-point, " +
        ".cta-content"
    );

    // On évite de masquer la page si les animations
    // ne sont pas disponibles ou ne fonctionnent pas.

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }

});
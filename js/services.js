document.addEventListener("DOMContentLoaded", () => {

    // MENU MOBILE

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

    }


    // FERMETURE DU MENU AU REDIMENSIONNEMENT

    window.addEventListener("resize", () => {

        if (window.innerWidth > 750 && mainNav) {

            mainNav.classList.remove("open");

            if (menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
            }

        }

    });


    // ANNÉE AUTOMATIQUE

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // ANIMATIONS AU DÉFILEMENT

    const elementsToReveal = document.querySelectorAll(
        ".services-hero-content, .services-intro, .section-heading, .service-detail, .why-us-heading, .advantage-card, .cta-content, .footer-main"
    );

    elementsToReveal.forEach(element => {
        element.classList.add("reveal");
    });


    if ("IntersectionObserver" in window) {

        document.body.classList.add("js-ready");

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        });


        elementsToReveal.forEach(element => {
            observer.observe(element);
        });

    } else {

        elementsToReveal.forEach(element => {
            element.classList.add("is-visible");
        });

    }


    // ANIMATION ÉCHELONNÉE DES CARTES

    document.querySelectorAll(".advantage-card").forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.12}s`;

    });


});
/* =====================================
   ETS DIGITAL SOLUTIONS 237
   PAGE À PROPOS
===================================== */


/* =====================================
   MENU MOBILE
===================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Fermer le menu après un clic sur un lien

    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    // Fermer avec la touche Échap

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            mainNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

    // Fermer en cliquant à l'extérieur

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


/* =====================================
   ANNÉE AUTOMATIQUE DU FOOTER
===================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =====================================
   ANIMATIONS AU DÉFILEMENT
===================================== */

const revealElements = document.querySelectorAll(
    ".about-hero-content, .about-hero-visual, " +
    ".company-presentation, .mission-card, .vision-card, " +
    ".values-heading, .value-card, .approach-heading, " +
    ".approach-step, .expertise-content, .expertise-row, .cta-content"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});

document.documentElement.classList.add("js-ready");

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================
   ANIMATION PROGRESSIVE DES CARTES
===================================== */

document.querySelectorAll(".value-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 100}ms`;

});

document.querySelectorAll(".approach-step").forEach((step, index) => {

    step.style.transitionDelay = `${index * 120}ms`;

});
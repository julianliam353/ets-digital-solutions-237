document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // MENU MOBILE
    // =====================================

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


    // =====================================
    // ANIMATIONS AU DÉFILEMENT
    // =====================================

    const elementsToReveal = document.querySelectorAll(
        ".section-heading, .service-card, .about-visual, .about-content, .expertise-heading, .expertise-item, .contact-content, .contact-details, .footer-main"
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


    // =====================================
    // NAVIGATION ACTIVE AU DÉFILEMENT
    // =====================================

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navLinks = document.querySelectorAll(
        ".main-nav a"
    );


    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;

            if (window.scrollY >= sectionTop - 180) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    // =====================================
    // FERMETURE DU MENU EN REDIMENSIONNANT
    // =====================================

    window.addEventListener("resize", () => {

        if (window.innerWidth > 750 && mainNav) {

            mainNav.classList.remove("open");

            if (menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
            }

        }

    });


    // =====================================
    // ANIMATION DES CARTES SERVICES
    // =====================================

    document.querySelectorAll(".service-card").forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.12}s`;

    });


});
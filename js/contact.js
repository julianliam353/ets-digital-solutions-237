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

        document.addEventListener("click", event => {
            if (
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }


    // ANNÉE AUTOMATIQUE DANS LE FOOTER
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // FORMULAIRE DE CONTACT
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value.trim();


            // CONSTRUCTION DU MESSAGE WHATSAPP
            const whatsappMessage =
                "Bonjour ETS Digital Solutions 237,\n\n" +

                "Je souhaite vous contacter au sujet de : " +
                subject + "\n\n" +

                "Nom : " + fullName + "\n" +
                "E-mail : " + email + "\n" +
                "Téléphone : " + phone + "\n\n" +

                "Mon message :\n" +
                message;


            // ENCODAGE DU MESSAGE
            const encodedMessage = encodeURIComponent(whatsappMessage);


            // OUVERTURE DE WHATSAPP
            const whatsappURL =
                "https://wa.me/237693162508?text=" + encodedMessage;

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


            // CONFIRMATION À L'ÉCRAN
            if (formFeedback) {

                formFeedback.textContent =
                    "Votre message est prêt. Finalisez son envoi dans WhatsApp.";

                formFeedback.style.color = "#168C5A";
            }

        });

    }

})
const EMAILJS_PUBLIC_KEY = "_Gx8cHW_R8bomgG5c";
const EMAILJS_SERVICE_ID = "service_6joc3eq";
const EMAILJS_TEMPLATE_ID = "template_lw80tto";

if (window.AOS) {
    AOS.init({
        duration: 850,
        easing: "ease-out-cubic",
        once: true,
        offset: 90
    });
}

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
        const isOpen = !mobileMenu.classList.contains("hidden");
        mobileMenu.classList.toggle("hidden", isOpen);
        mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
    });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const targetId = anchor.getAttribute("href");
        const target = targetId ? document.querySelector(targetId) : null;

        if (!target) {
            return;
        }

        event.preventDefault();

        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
            mobileMenuButton?.setAttribute("aria-expanded", "false");
        }

        window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 88,
            behavior: "smooth"
        });
    });
});

const contactForm = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

function setStatus(message, className) {
    if (!statusText) {
        return;
    }

    statusText.textContent = message;
    statusText.className = `text-sm font-semibold ${className}`;
}

function isEmailJsConfigured() {
    return (
        EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" &&
        EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
        EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
        window.emailjs
    );
}

if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        if (!isEmailJsConfigured()) {
            setStatus(
                "EmailJS is not configured yet. Replace the EmailJS keys in js/main.js before going live.",
                "text-amber-700"
            );
            return;
        }

        setStatus("Sending inquiry...", "text-primary");

        emailjs
            .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
            .then(() => {
                setStatus("Inquiry sent. Greenie Vietnam will reply within 24-48 hours.", "text-emerald-700");
                contactForm.reset();
            })
            .catch((error) => {
                console.error("EmailJS failed", error);
                setStatus("The inquiry could not be sent. Please try again or contact Greenie Vietnam directly.", "text-red-700");
            });
    });
}

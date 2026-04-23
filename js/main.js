
// ===== CONFIG =====
const DEFAULT_LANG = "en";

// ===== EMAILJS CONFIG =====
const EMAILJS_PUBLIC_KEY = "_Gx8cHW_R8bomgG5c";
const EMAILJS_SERVICE_ID = "service_6joc3eq";
const EMAILJS_TEMPLATE_ID = "template_vknoy18";

// ===== STATE =====
let translations = {};

// ===== LOAD TRANSLATIONS =====
async function loadTranslations(lang) {
    try {
        const res = await fetch(`./locales/${lang}.json`);
        translations = await res.json();
    } catch (err) {
        console.error("Load language failed:", err);
    }
}

// ===== APPLY TRANSLATIONS =====
function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;

        if (translations[key]) {
            el.textContent = translations[key];
        }
    });

    // update meta title nếu có
    if (translations.metaTitle) {
        document.title = translations.metaTitle;
    }
}

// ===== SET LANGUAGE =====
async function setLanguage(lang) {
    await loadTranslations(lang);
    applyTranslations();

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

// ===== GET LANG =====
function getLang() {
    const url = new URLSearchParams(window.location.search).get("lang");
    const saved = localStorage.getItem("lang");

    return url || saved || DEFAULT_LANG;
}

// ===== SWITCHER =====
function setupSwitcher() {
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;

            setLanguage(lang);

            const url = new URL(window.location);
            url.searchParams.set("lang", lang);
            window.history.replaceState({}, "", url);
        });
    });
}

// ===== EMAIL FORM =====
function setupForm() {
    if (!window.emailjs) {
        console.warn("EmailJS not loaded");
        return;
    }

    emailjs.init(EMAILJS_PUBLIC_KEY);

    const form = document.querySelector(".quote-form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        const data = {
            company: formData.get("company"),
            email: formData.get("email"),
            product: formData.get("product"),
            quantity: formData.get("quantity"),
            message: formData.get("message")
        };

        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            data
        )
        .then(() => {
            alert("Inquiry sent successfully!");
            form.reset();
        })
        .catch(err => {
            console.error(err);
            alert("Failed to send. Please try again.");
        });
    });
}

// ===== MOBILE MENU =====
function setupMenu() {
    const btn = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");

    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", async () => {
    await setLanguage(getLang());

    setupSwitcher();
    setupForm();
    setupMenu();
});


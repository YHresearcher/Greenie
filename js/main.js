
// ===== EMAILJS CONFIG =====
const EMAILJS_PUBLIC_KEY = "_Gx8cHW_R8bomgG5c";
const EMAILJS_SERVICE_ID = "service_6joc3eq";
const EMAILJS_TEMPLATE_ID = "template_vknoy18";


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

// ===== CONFIG =====
const DEFAULT_LANG = "en";

// ===== TRANSLATIONS =====
const translations = {
    en: {
        "nav.products": "Products",
        "nav.about": "About",
        "nav.quality": "Quality",
        "nav.oem": "OEM",
        "nav.samples": "Samples",
        "nav.quote": "Quote",

        "hero.title": "Export-ready Vietnamese cashew kernels and artisan cane sugar for global buyers.",
        "hero.copy": "Greenie Vietnam supplies importers, wholesalers, distributors, and private label brands worldwide."
    },

    zh: {
        "nav.products": "产品",
        "nav.about": "关于",
        "nav.quality": "质量",
        "nav.oem": "代工",
        "nav.samples": "样品",
        "nav.quote": "报价",

        "hero.title": "面向全球买家的越南腰果仁和手工甘蔗糖出口供应。",
        "hero.copy": "Greenie Vietnam 为全球进口商、批发商和品牌客户提供服务。"
    },

    hi: {
        "nav.products": "उत्पाद",
        "nav.about": "परिचय",
        "nav.quality": "गुणवत्ता",
        "nav.oem": "OEM",
        "nav.samples": "नमूने",
        "nav.quote": "कोटेशन",

        "hero.title": "वैश्विक खरीदारों के लिए वियतनामी काजू और गन्ना चीनी।",
        "hero.copy": "Greenie Vietnam आयातकों और वितरकों के लिए निर्यात योग्य उत्पाद प्रदान करता है।"
    }
};

// ===== APPLY TRANSLATION =====
function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");

        // fallback sang EN nếu thiếu key
        const value =
            translations[lang]?.[key] ||
            translations[DEFAULT_LANG]?.[key];

        if (value) {
            el.textContent = value;
        }
    });

    // update lang attribute (QUAN TRỌNG)
    document.documentElement.lang = lang;

    // save
    localStorage.setItem("lang", lang);

    // active button
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

// ===== INIT LANG =====
function initLanguage() {
    const savedLang = localStorage.getItem("lang");
    const urlLang = new URLSearchParams(window.location.search).get("lang");

    const lang = urlLang || savedLang || DEFAULT_LANG;

    applyTranslations(lang);
}

// ===== SWITCHER =====
function setupLanguageSwitcher() {
    const buttons = document.querySelectorAll(".lang-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;

            applyTranslations(lang);

            // update URL
            const url = new URL(window.location);
            url.searchParams.set("lang", lang);
            window.history.replaceState({}, "", url);
        });
    });
}

// ===== MOBILE MENU =====
function setupMobileMenu() {
    const button = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");

    if (!button || !menu) return;

    button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    setupLanguageSwitcher();
    setupMobileMenu();
});


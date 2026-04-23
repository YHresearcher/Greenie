// ===== CONFIG =====
const DEFAULT_LANG = "en";

// ===== EMAILJS CONFIG =====
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

// ===== TRANSLATIONS (ALL-IN-ONE) =====
const translations = {
    en: {
        "nav.products": "Products",
        "nav.about": "About",
        "nav.quality": "Quality",
        "nav.oem": "OEM",
        "nav.samples": "Samples",
        "nav.quote": "Quote",

        "hero.title": "Export-ready Vietnamese cashew kernels and artisan cane sugar for global buyers.",
        "hero.copy": "Greenie Vietnam supplies importers, wholesalers, and private label brands worldwide.",

        "form.submit": "Submit Inquiry",
        "form.success": "Inquiry sent successfully!",
        "form.error": "Failed to send. Please try again."
    },

    zh: {
        "nav.products": "产品",
        "nav.about": "关于",
        "nav.quality": "质量",
        "nav.oem": "代工",
        "nav.samples": "样品",
        "nav.quote": "报价",

        "hero.title": "面向全球买家的越南腰果和甘蔗糖出口供应。",
        "hero.copy": "为全球进口商和品牌客户提供稳定供应。",

        "form.submit": "提交询价",
        "form.success": "发送成功！",
        "form.error": "发送失败，请重试。"
    },

    hi: {
        "nav.products": "उत्पाद",
        "nav.about": "परिचय",
        "nav.quality": "गुणवत्ता",
        "nav.oem": "OEM",
        "nav.samples": "नमूने",
        "nav.quote": "कोटेशन",

        "hero.title": "वैश्विक खरीदारों के लिए वियतनामी काजू और चीनी।",
        "hero.copy": "आयातकों और वितरकों के लिए तैयार।",

        "form.submit": "भेजें",
        "form.success": "सफलतापूर्वक भेजा गया",
        "form.error": "भेजने में विफल"
    }
};

// ===== APPLY TRANSLATION =====
function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;

        const value =
            translations[lang]?.[key] ||
            translations[DEFAULT_LANG]?.[key];

        if (value) {
            el.textContent = value;
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

// ===== INIT LANG =====
function initLanguage() {
    const saved = localStorage.getItem("lang");
    const url = new URLSearchParams(window.location.search).get("lang");

    const lang = url || saved || DEFAULT_LANG;
    applyTranslations(lang);
}

// ===== SWITCHER =====
function setupSwitcher() {
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;

            applyTranslations(lang);

            const url = new URL(window.location);
            url.searchParams.set("lang", lang);
            window.history.replaceState({}, "", url);
        });
    });
}

// ===== EMAIL FORM =====
function setupForm() {
    if (!window.emailjs) return;

    emailjs.init(EMAILJS_PUBLIC_KEY);

    const form = document.querySelector(".quote-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        const data = {
            company: formData.get("company"),
            email: formData.get("email"),
            product: formData.get("product_interest"),
            quantity: formData.get("estimated_quantity"),
            message: formData.get("required_documents")
        };

        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            data
        )
        .then(() => {
            alert(translations[getCurrentLang()]["form.success"]);
            form.reset();
        })
        .catch(() => {
            alert(translations[getCurrentLang()]["form.error"]);
        });
    });
}

// ===== GET CURRENT LANG =====
function getCurrentLang() {
    return localStorage.getItem("lang") || DEFAULT_LANG;
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
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    setupSwitcher();
    setupForm();
    setupMenu();
});

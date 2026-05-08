# Greenie Vietnam Landing Page

One-page B2B landing page for Greenie Vietnam, focused on global wholesale export and OEM/private label inquiries from international buyers.

## Positioning

Greenie Vietnam supplies export-ready Vietnamese cashew kernels and artisan cane sugar for importers, wholesalers, distributors, manufacturers, and private label brands worldwide.

Core commercial messaging:

- MOQ from 1 metric ton
- Lead time 10-30 days
- FOB/CIF from Saigon & Haiphong Port
- T/T and L/C payment support
- HALAL certificate available
- SGS/Eurofins testing available on request
- Reply within 24-48 hours

## Languages

The page includes a client-side language switcher in the header:

- English (`EN`)
- Chinese (`中文`)
- Hindi (`हिन्दी`) as the South Asia language option

Translations live in `js/main.js` and are applied through `data-i18n` attributes in `index.html`.

## Structure

- `index.html` - complete landing page
- `css/style.css` - custom layout and component styles
- `js/main.js` - AOS, smooth scrolling, mobile menu, and EmailJS form handling

## EmailJS Setup

The quote form is wired for EmailJS but ships with placeholder credentials.

Update `js/main.js`:

```js
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
```

Until those values are replaced, the form will show a friendly configuration message instead of trying to send.

## Deployment

This is a static HTML/CSS/JS site and can be deployed directly on GitHub Pages:

1. Push the project to GitHub.
2. Open repository Settings.
3. Go to Pages.
4. Select the `main` branch and root folder.
5. Save and wait for the Pages URL.

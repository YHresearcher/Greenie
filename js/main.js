const EMAILJS_PUBLIC_KEY = "_Gx8cHW_R8bomgG5c";
const EMAILJS_SERVICE_ID = "service_6joc3eq";
const EMAILJS_TEMPLATE_ID = "template_vknoy18";

const translations = {
    en: {
        metaTitle: "Greenie Vietnam - Global Wholesale Export & Private Label",
        metaDescription: "Greenie Vietnam supplies export-ready Vietnamese cashew kernels, artisan cane sugar & Shan Tuyet ancient tea for global importers, wholesalers, distributors, and private label brands.",
        "nav.products": "Products",
        "nav.about": "About",
        "nav.quality": "Quality",
        "nav.sample": "Samples",
        "nav.inquiry": "Inquiry",
        "nav.blog":"Blog",
        "cta.sample": "Request sample",
        "cta.samples": "Request Samples",
        "cta.inquiry": "Send Inquiry",
        "cta.getInquiryShort": "Send Inquiry",
        "cta.submitOem": "Submit OEM Brief",
        "cta.samplesViaForm": "Request Samples via Inquiry Form",
        "hero.eyebrow": "Global wholesale export + private label",
        "hero.title": "Export-ready Vietnamese cashew kernels, artisan cane sugar, and Shan Tuyet ancient tea for global buyers.",
        "hero.copy": "Greenie Vietnam supplies importers, wholesalers, distributors, manufacturers, and private label brands worldwide with clear commercial terms, documented quality control, and fast inquiry-ready support.",
        "hero.cardEyebrow": "Export terms",
        "hero.cardTitle": "MOQ from 1 MT",
        "hero.cardCopy": "FOB/CIF via Saigon & Haiphong Port, with SGS/Eurofins testing available on request.",
        "proof.moqLabel": "MOQ",
        "proof.moq": "1 MT",
        "proof.leadLabel": "Lead time",
        "proof.lead": "10-30 days",
        "proof.complianceLabel": "Compliance",
        "proof.compliance": "HALAL available",
        "proof.testingLabel": "Testing",
        "proof.testing": "SGS/Eurofins",
        "proof.incotermsLabel": "Incoterms",
        "proof.incoterms": "FOB/CIF",
        "proof.portLabel": "Port",
        "proof.port": "Saigon & Haiphong Port",
        "proof.paymentLabel": "Payment",
        "proof.payment": "T/T & L/C",
        "proof.responseLabel": "Response",
        "proof.response": "24-48h",
        "products.eyebrow": "Strategic products",
        "products.title": "Premium export categories for wholesale and private label.",
        "products.copy": "Focused product lines help buyers request the right specification sheets, samples, packaging options, and compliance documents faster.",
        "cashew.origin": "Binh Phuoc, Vietnam",
        "cashew.title": "Vietnamese Cashew Kernels",
        "cashew.copy": "White whole cashew kernels for wholesale buyers, distributors, roasters, foodservice, manufacturers, and private label brands.",
        "cashew.spec1Label": "Grades",
        "cashew.spec1": "W180, W240, W320",
        "cashew.spec2Label": "Packaging",
        "cashew.spec2": "Bulk, vacuum, carton options",
        "cashew.spec3Label": "Documents",
        "cashew.spec3": "Spec sheet, COA on request",
        "cashew.spec4Label": "Allergen",
        "cashew.spec4": "Tree nut statement",
        "sugar.origin": "Quang Ngai, Vietnam",
        "sugar.title": "Artisan Cane Sugar \"Duong Phoi\"",
        "sugar.copy": "Traditional Vietnamese cane sugar prepared for wholesale supply and private label packaging for global retail and foodservice markets.",
        "sugar.spec1Label": "Statement",
        "sugar.spec1": "No preservatives",
        "sugar.spec2Label": "Packaging",
        "sugar.spec2": "Jar, pouch, vacuum options",
        "sugar.spec3Label": "Documents",
        "sugar.spec3": "Spec sheet, COA on request",
        "sugar.spec4Label": "Origin",
        "sugar.spec4": "Vietnam country of origin",
        "tea.origin": "Ha Giang, Vietnam",
        "tea.title": "Shan Tuyet Ancient Tea",
        "tea.copy": "Wild-grown ancient tea from 200+ year-old trees in the misty highlands of Ha Giang. Hand-picked, traditionally processed for premium tea retailers and private label brands.",
        "tea.spec1Label": "Grade",
        "tea.spec1": "1 bud 2 leaves",
        "tea.spec2Label": "Packaging",
        "tea.spec2": "Loose leaf, tin, pouch options",
        "tea.spec3Label": "Documents",
        "tea.spec3": "Spec sheet, COA on request",
        "tea.spec4Label": "Altitude",
        "tea.spec4": "1,200-1,800m ASL",
        "why.eyebrow": "Why Greenie",
        "why.title": "Built for buyers who need clarity before price.",
        "why.copy": "Greenie keeps procurement conversations practical: commercial terms, documents, packaging, testing, and shipping expectations are surfaced before the first inquiry.",
        "why.card1Title": "Clear terms",
        "why.card1Copy": "MOQ from 1 MT, lead time 10-30 days, FOB/CIF, Saigon & Haiphong Port, T/T and L/C.",
        "why.card2Title": "Compliance-ready",
        "why.card2Copy": "HALAL certificate available and third-party testing from SGS/Eurofins available on request.",
        "why.card3Title": "Flexible supply",
        "why.card3Copy": "Wholesale export, bulk packaging, and private label options for buyer brands.",
        "why.card4Title": "Global export support",
        "why.card4Copy": "Documentation and shipping discussions can be adapted for Asia, China, South Asia, Europe, North America, and other markets.",
        "about.eyebrow": "About Greenie",
        "about.title": "Born from a refusal to accept vague food promises.",
        "about.copy1": "Greenie began after real factory visits showed a difficult truth: too many food brands used beautiful words while hiding unclear processes behind the label.",
        "about.copy2": "At the same time, Vietnamese agricultural products were still being sold as low-value raw materials, while other markets processed them deeper and captured the value. Greenie was created to change that path with transparency, documentation, and disciplined selection.",
        "about.copy3": "Beyond standard exports, Greenie also supports OEM / private label packaging for buyer brands \u2014 from label design and packaging format to compliance documentation and international shipping.",
        "about.quote": "We do not simply buy products. We select integrity.",
        "about.standardLabel": "The Greenie Standard",
        "about.standardTitle": "90% local essence. 10% global filter.",
        "about.principle1Title": "Transparency over slogans",
        "about.principle1Copy": "Every claim should be supported by documents, process checks, or supplier evidence.",
        "about.principle2Title": "Independent verification",
        "about.principle2Copy": "We prioritize qualified production partners and third-party testing where buyers require it.",
        "about.principle3Title": "No compromise under our name",
        "about.principle3Copy": "If a batch cannot pass Greenie's checks, it should not appear under the Greenie name.",
        "quality.eyebrow": "Quality & compliance",
        "quality.title": "A buyer pack that shortens the sales cycle.",
        "quality.copy": "Only documented claims should be used in final export materials. The landing page positions certification and test reports as available on request unless documents are ready to publish.",
        "quality.doc1": "Product specification sheets",
        "quality.doc2": "COA and SGS/Eurofins testing on request",
        "quality.doc3": "Country of Origin documentation",
        "quality.doc4": "HALAL certificate available",
        "quality.doc5": "Shelf life and storage statements",
        "terms.eyebrow": "Commercial terms",
        "terms.title": "Inquiry conversations start with the facts buyers ask for first.",
        "terms.intro": "These are the default commercial terms buyers can expect before submitting a detailed inquiry.",
        "terms.card1Label": "MOQ",
        "terms.card1": "From 1 metric ton",
        "terms.card1Note": "Suitable for first wholesale test orders and repeat monthly supply.",
        "terms.card2Label": "Lead time",
        "terms.card2": "10-30 days depending on product and packaging",
        "terms.card2Note": "Standard products move faster; custom private label packs require additional preparation.",
        "terms.card3Label": "Shipping",
        "terms.card3": "FOB or CIF from Saigon & Haiphong Port",
        "terms.card3Note": "Buyer can choose preferred shipping responsibility and destination support level.",
        "terms.card4Label": "Payment",
        "terms.card4": "T/T and L/C based on buyer requirements",
        "terms.card4Note": "Payment method can be aligned with your procurement policy and risk controls.",
        "oem.eyebrow": "OEM / private label",
        "oem.title": "Private label packaging for your target market.",
        "oem.copy": "Greenie supports buyer-brand packaging discussions for jars, kraft pouches, vacuum packs, label language requirements, and export documentation.",
        "oem.step1Title": "Requirements brief",
        "oem.step1Copy": "Product, target market, packaging format, pack size, documents, and estimated volume.",
        "oem.step2Title": "Packaging confirmation",
        "oem.step2Copy": "Buyer brand, label language, carton or pouch format, and compliance requirements.",
        "oem.step3Title": "Sample approval",
        "oem.step3Copy": "Samples can be arranged before production when buyer evaluation is required.",
        "oem.step4Title": "Production",
        "oem.step4Copy": "Lead time depends on product, stock status, and packaging complexity.",
        "oem.step5Title": "Inspection & shipment",
        "oem.step5Copy": "Optional third-party testing, final documents, and FOB/CIF shipment support.",
        "samples.eyebrow": "Request samples",
        "samples.title": "Evaluate product quality before a wholesale order.",
        "samples.copy": "Request cashew kernels, artisan cane sugar, or a mixed sample pack. Technical documents can be included when available.",
        "samples.formTitle": "Sample request brief",
        "samples.formCopy": "Use this form when you only need product samples. The same sales team will handle both sample and wholesale requests.",
        "samples.badge1": "Courier-ready samples",
        "samples.badge2": "COA on request",
        "samples.badge3": "Buyer evaluation support",
        "inquiry.eyebrow": "Send inquiry",
        "inquiry.title": "Submit a detailed inquiry.",
        "inquiry.copy": "Greenie Vietnam replies within 24-48 hours. Include volume, destination, documents, and packaging details so the sales team can respond quickly.",
        "inquiry.needTitle": "Need in your request",
        "inquiry.needCopy": "Product, estimated quantity in MT, packaging preference, incoterm, destination, and required documents.",
        "form.company": "Company name *",
        "form.country": "Country *",
        "form.person": "Contact person *",
        "form.pack": "Package",
        "form.sampleQuantity": "Estimated quantity",
        "form.role": "Role",
        "form.email": "Email *",
        "form.whatsapp": "WhatsApp / phone",
        "form.website": "Company website / social",
        "form.product": "Product interest *",
        "form.selectProduct": "Select product",
        "form.cashew": "Cashew Kernels",
        "form.sugar": "Artisan Cane Sugar",
        "form.tea": "Shan Tuyet Ancient Tea",
        "form.both": "Cashew + Cane Sugar + Tea",
        "form.oem": "OEM / Private Label",
        "form.quantity": "Estimated quantity (MT) *",
        "form.packaging": "Packaging preference",
        "form.incoterms": "Incoterms",
        "form.notSure": "Not sure yet",
        "form.destination": "Destination",
        "form.notes": "Required documents or notes",
        "form.submit": "Submit Inquiry",
        "ph.company": "Company Ltd.",
        "ph.country": "Germany",
        "ph.person": "Full name",
        "ph.role": "Purchasing manager",
        "ph.email": "name@company.com",
        "ph.whatsapp": "+84....",
        "ph.website": "https://...",
        "ph.packaging": "Bulk, jar, pouch, vacuum pack",
        "ph.samplePack": "250g, 500g, trial pack",
        "ph.sampleQty": "1-2 sets",
        "ph.destination": "Destination port / city",
        "ph.sampleNotes": "Sampling purpose, target market, document needs...",
        "ph.notes": "HALAL, SGS/Eurofins, COA, packaging language, target market...",
        "footer.copy": "Export-ready Vietnamese agricultural products for global wholesale buyers and private label brands.",
        "footer.products": "Products",
        "footer.cashew": "Cashew Kernels",
        "footer.sugar": "Artisan Cane Sugar",
        "footer.tea": "Shan Tuyet Ancient Tea",
        "footer.oem": "OEM / Private Label",
        "footer.sales": "Sales",
        "footer.quickTitle": "Quick Facts",
        "footer.contactTitle": "Contact",
        "footer.fact1": "MOQ from 1 MT",
        "footer.fact2": "Lead time 10-30 days",
        "footer.fact3": "FOB / CIF from Saigon & Haiphong Port",
        "footer.contact1": "Reply within 24-48 hours",
        "footer.contact2": "T/T and L/C available",
        "footer.contact3": "HALAL and testing on request",
        "footer.rights": "\u00a9 2026 Greenie Vietnam Agricultural Exports.",
        "status.notConfigured": "EmailJS is not configured yet. Replace the EmailJS keys in js/main.js before going live.",
        "status.sending": "Sending inquiry...",
        "status.sent": "Inquiry sent successfully! We will reply within 24-48h.",
        "status.failed": "Failed to send. Please try again or contact us directly.",
        "status.tooFast": "Please wait a few minutes before sending another inquiry."
    },
    zh: {
        metaTitle: "Greenie Vietnam - \u5168\u7403\u6279\u53d1\u51fa\u53e3\u4e0e\u81ea\u6709\u54c1\u724c",
        metaDescription: "Greenie Vietnam \u4e3a\u5168\u7403\u8fdb\u53e3\u5546\u3001\u6279\u53d1\u5546\u3001\u5206\u9500\u5546\u548c\u81ea\u6709\u54c1\u724c\u5ba2\u6237\u4f9b\u5e94\u53ef\u51fa\u53e3\u7684\u8d8a\u5357\u8170\u679c\u4ec1\u548c\u624b\u5de5\u7518\u8517\u7cd6\u3002",
        "nav.products": "\u4ea7\u54c1",
        "nav.about": "\u5173\u4e8e",
        "nav.quality": "\u8d28\u91cf",
        "nav.sample": "\u6837\u54c1",
        "nav.inquiry": "\u8be2\u76d8",
        "nav.blog": "\u535a\u5ba2",
        "cta.sample": "\u7d22\u53d6\u6837\u54c1",
        "cta.samples": "\u7d22\u53d6\u6837\u54c1",
        "cta.inquiry": "\u53d1\u9001\u8be2\u76d8",
        "cta.getInquiryShort": "\u53d1\u9001\u8be2\u76d8",
        "cta.submitOem": "\u63d0\u4ea4\u4ee3\u5de5\u9700\u6c42",
        "cta.samplesViaForm": "\u901a\u8fc7\u8be2\u76d8\u8868\u7d22\u53d6\u6837\u54c1",
        "hero.eyebrow": "\u5168\u7403\u6279\u53d1\u51fa\u53e3 + \u81ea\u6709\u54c1\u724c",
        "hero.title": "\u9762\u5411\u5168\u7403\u4e70\u5bb6\u7684\u8d8a\u5357\u8170\u679c\u4ec1\u4e0e\u624b\u5de5\u7518\u8517\u7cd6\u51fa\u53e3\u4f9b\u5e94\u3002",
        "hero.copy": "Greenie Vietnam \u4e3a\u5168\u7403\u8fdb\u53e3\u5546\u3001\u6279\u53d1\u5546\u3001\u5206\u9500\u5546\u3001\u5236\u9020\u5546\u548c\u81ea\u6709\u54c1\u724c\u5ba2\u6237\u63d0\u4f9b\u6e05\u6670\u8d38\u6613\u6761\u6b3e\u3001\u8d28\u91cf\u6587\u4ef6\u652f\u6301\u548c\u5feb\u901f\u8be2\u76d8\u652f\u6301\u3002",
        "hero.cardEyebrow": "\u51fa\u53e3\u6761\u6b3e",
        "hero.cardTitle": "MOQ \u4ece 1 \u516c\u5428\u8d77",
        "hero.cardCopy": "\u4ece\u897f\u8d21\u548c\u6d77\u9632\u6e2f\u63d0\u4f9b FOB/CIF\uff0cSGS/Eurofins \u7b2c\u4e09\u65b9\u68c0\u6d4b\u53ef\u6309\u9700\u5b89\u6392\u3002",
        "proof.moqLabel": "\u8d77\u8ba2\u91cf",
        "proof.moq": "1 \u516c\u5428",
        "proof.leadLabel": "\u4ea4\u671f",
        "proof.lead": "10-30 \u5929",
        "proof.complianceLabel": "\u5408\u89c4",
        "proof.compliance": "\u53ef\u63d0\u4f9b HALAL",
        "proof.testingLabel": "\u68c0\u6d4b",
        "proof.testing": "SGS/Eurofins",
        "proof.incotermsLabel": "\u8d38\u6613\u672f\u8bed",
        "proof.incoterms": "FOB/CIF",
        "proof.portLabel": "\u6e2f\u53e3",
        "proof.port": "\u897f\u8d21\u548c\u6d77\u9632\u6e2f",
        "proof.paymentLabel": "\u4ed8\u6b3e",
        "proof.payment": "T/T \u4e0e L/C",
        "proof.responseLabel": "\u56de\u590d",
        "proof.response": "24-48 \u5c0f\u65f6",
        "products.eyebrow": "\u6838\u5fc3\u4ea7\u54c1",
        "products.title": "\u9002\u5408\u6279\u53d1\u4e0e\u81ea\u6709\u54c1\u724c\u7684\u4f18\u8d28\u51fa\u53e3\u54c1\u7c7b\u3002",
        "products.copy": "\u805a\u7126\u7684\u4ea7\u54c1\u7ebf\u53ef\u5e2e\u52a9\u4e70\u5bb6\u66f4\u5feb\u7d22\u53d6\u89c4\u683c\u4e66\u3001\u6837\u54c1\u3001\u5305\u88c5\u65b9\u6848\u548c\u5408\u89c4\u6587\u4ef6\u3002",
        "cashew.origin": "\u8d8a\u5357\u5e73\u798f",
        "cashew.title": "\u8d8a\u5357\u8170\u679c\u4ec1",
        "cashew.copy": "\u767d\u6574\u7c92\u8170\u679c\u4ec1\uff0c\u9002\u5408\u6279\u53d1\u5546\u3001\u5206\u9500\u5546\u3001\u70d9\u7136\u5546\u3001\u9910\u996e\u670d\u52a1\u3001\u98df\u54c1\u5236\u9020\u5546\u548c\u81ea\u6709\u54c1\u724c\u5ba2\u6237\u3002",
        "cashew.spec1Label": "\u7b49\u7ea7",
        "cashew.spec1": "W180, W240, W320",
        "cashew.spec2Label": "\u5305\u88c5",
        "cashew.spec2": "\u6563\u88c5\u3001\u771f\u7a7a\u3001\u7eb8\u7bb1\u9009\u9879",
        "cashew.spec3Label": "\u6587\u4ef6",
        "cashew.spec3": "\u89c4\u683c\u4e66\uff0cCOA \u6309\u9700\u63d0\u4f9b",
        "cashew.spec4Label": "\u8fc7\u654f\u539f",
        "cashew.spec4": "\u6811\u575a\u679c\u58f0\u660e",
        "sugar.origin": "\u8d8a\u5357\u5e7f\u4e49",
        "sugar.title": "\u624b\u5de5\u7518\u8517\u7cd6\u201cDuong Phoi\u201d",
        "sugar.copy": "\u4f20\u7edf\u8d8a\u5357\u7518\u8517\u7cd6\uff0c\u9002\u5408\u5168\u7403\u96f6\u552e\u3001\u9910\u996e\u670d\u52a1\u3001\u6279\u53d1\u4f9b\u5e94\u548c\u81ea\u6709\u54c1\u724c\u5305\u88c5\u3002",
        "sugar.spec1Label": "\u58f0\u660e",
        "sugar.spec1": "\u4e0d\u6dfb\u52a0\u9632\u8150\u5242",
        "sugar.spec2Label": "\u5305\u88c5",
        "sugar.spec2": "\u7f50\u88c5\u3001\u888b\u88c5\u3001\u771f\u7a7a\u9009\u9879",
        "sugar.spec3Label": "\u6587\u4ef6",
        "sugar.spec3": "\u89c4\u683c\u4e66\uff0cCOA \u6309\u9700\u63d0\u4f9b",
        "sugar.spec4Label": "\u539f\u4ea7\u5730",
        "sugar.spec4": "\u8d8a\u5357\u539f\u4ea7\u5730",
        "tea.origin": "\u8d8a\u5357\u6cb3\u6c5f",
        "tea.title": "\u5c71\u96ea\u53e4\u6811\u8336",
        "tea.copy": "\u6765\u81ea\u6cb3\u6c5f\u96fe\u9704\u9ad8\u539f200\u5e74\u4ee5\u4e0a\u53e4\u8336\u6811\u7684\u91ce\u751f\u53e4\u6811\u8336\u3002\u624b\u5de5\u91c7\u6458\uff0c\u4f20\u7edf\u5de5\u827a\uff0c\u9762\u5411\u9ad8\u7aef\u8336\u53f6\u96f6\u552e\u5546\u548c\u81ea\u6709\u54c1\u724c\u3002",
        "tea.spec1Label": "\u7b49\u7ea7",
        "tea.spec1": "\u4e00\u82bd\u4e8c\u53f6",
        "tea.spec2Label": "\u5305\u88c5",
        "tea.spec2": "\u6563\u88c5\u3001\u7f50\u88c5\u3001\u888b\u88c5\u9009\u9879",
        "tea.spec3Label": "\u6587\u4ef6",
        "tea.spec3": "\u89c4\u683c\u4e66\uff0cCOA\u6309\u9700\u63d0\u4f9b",
        "tea.spec4Label": "\u6d77\u62d4",
        "tea.spec4": "1,200-1,800\u7c73",
        "why.eyebrow": "\u4e3a\u4ec0\u4e48\u9009\u62e9 Greenie",
        "why.title": "\u4e3a\u9700\u8981\u5148\u786e\u8ba4\u5173\u952e\u4fe1\u606f\u7684\u4e70\u5bb6\u800c\u8bbe\u8ba1\u3002",
        "why.copy": "Greenie \u8ba9\u91c7\u8d2d\u6c9f\u901a\u66f4\u52a1\u5b9e\uff1a\u5728\u8be2\u76d8\u524d\u5148\u660e\u786e\u8d38\u6613\u6761\u6b3e\u3001\u6587\u4ef6\u3001\u5305\u88c5\u3001\u68c0\u6d4b\u548c\u8fd0\u8f93\u9884\u671f\u3002",
        "why.card1Title": "\u6761\u6b3e\u6e05\u6670",
        "why.card1Copy": "MOQ \u4ece 1 \u516c\u5428\u8d77\uff0c\u4ea4\u671f 10-30 \u5929\uff0cFOB/CIF\uff0c\u897f\u8d21\u548c\u6d77\u9632\u6e2f\uff0c\u652f\u6301 T/T \u548c L/C\u3002",
        "why.card2Title": "\u5408\u89c4\u51c6\u5907",
        "why.card2Copy": "\u53ef\u63d0\u4f9b HALAL \u8bc1\u4e66\uff0cSGS/Eurofins \u7b2c\u4e09\u65b9\u68c0\u6d4b\u53ef\u6309\u9700\u5b89\u6392\u3002",
        "why.card3Title": "\u4f9b\u5e94\u7075\u6d3b",
        "why.card3Copy": "\u652f\u6301\u6279\u53d1\u51fa\u53e3\u3001\u6563\u88c5\u5305\u88c5\u548c\u4e70\u5bb6\u54c1\u724c\u81ea\u6709\u54c1\u724c\u65b9\u6848\u3002",
        "why.card4Title": "\u5168\u7403\u51fa\u53e3\u652f\u6301",
        "why.card4Copy": "\u6587\u4ef6\u548c\u8fd0\u8f93\u6c9f\u901a\u53ef\u9002\u914d\u4e9a\u6d32\u3001\u4e2d\u56fd\u3001\u5357\u4e9a\u3001\u6b27\u6d32\u3001\u5317\u7f8e\u53ca\u5176\u4ed6\u5e02\u573a\u3002",
        "about.eyebrow": "\u5173\u4e8e Greenie",
        "about.title": "\u6e90\u4e8e\u5bf9\u6a21\u7cca\u98df\u54c1\u627f\u8bfa\u7684\u62d2\u7edd\u3002",
        "about.copy1": "Greenie \u7684\u8d77\u70b9\u6765\u81ea\u771f\u5b9e\u7684\u5de5\u5382\u8d70\u8bbf\u3002\u6211\u4eec\u770b\u5230\u4e00\u4e2a\u8270\u96be\u4e8b\u5b9e\uff1a\u592a\u591a\u98df\u54c1\u54c1\u724c\u7528\u6f02\u4eae\u8bcd\u6c47\u5305\u88c5\u81ea\u5df1\uff0c\u5374\u628a\u4e0d\u6e05\u6670\u7684\u6d41\u7a0b\u85cf\u5728\u6807\u7b7e\u80cc\u540e\u3002",
        "about.copy2": "\u4e0e\u6b64\u540c\u65f6\uff0c\u8d8a\u5357\u519c\u4ea7\u54c1\u5e38\u4ee5\u4f4e\u4ef7\u503c\u539f\u6599\u5f62\u5f0f\u51fa\u552e\uff0c\u800c\u5176\u4ed6\u5e02\u573a\u901a\u8fc7\u6df1\u52a0\u5de5\u83b7\u53d6\u66f4\u9ad8\u4ef7\u503c\u3002Greenie \u5e0c\u671b\u7528\u900f\u660e\u3001\u6587\u4ef6\u5316\u548c\u4e25\u683c\u7b5b\u9009\u6539\u53d8\u8fd9\u6761\u8def\u5f84\u3002",
        "about.copy3": "\u9664\u6807\u51c6\u51fa\u53e3\u5916\uff0cGreenie \u8fd8\u652f\u6301\u4e70\u5bb6\u54c1\u724c\u7684 OEM / \u81ea\u6709\u54c1\u724c\u5305\u88c5\u2014\u2014\u4ece\u6807\u7b7e\u8bbe\u8ba1\u548c\u5305\u88c5\u683c\u5f0f\u5230\u5408\u89c4\u6587\u4ef6\u548c\u56fd\u9645\u8fd0\u8f93\u3002",
        "about.quote": "\u6211\u4eec\u4e0d\u53ea\u662f\u91c7\u8d2d\u4ea7\u54c1\u3002\u6211\u4eec\u7b5b\u9009\u7684\u662f\u8bda\u4fe1\u3002",
        "about.standardLabel": "Greenie \u6807\u51c6",
        "about.standardTitle": "90% \u672c\u5730\u7cbe\u534e\u300210% \u56fd\u9645\u6807\u51c6\u8fc7\u6ee4\u3002",
        "about.principle1Title": "\u900f\u660e\u80dc\u8fc7\u53e3\u53f7",
        "about.principle1Copy": "\u6bcf\u4e00\u9879\u58f0\u660e\u90fd\u5e94\u7531\u6587\u4ef6\u3001\u6d41\u7a0b\u68c0\u67e5\u6216\u4f9b\u5e94\u5546\u8bc1\u636e\u652f\u6301\u3002",
        "about.principle2Title": "\u72ec\u7acb\u9a8c\u8bc1",
        "about.principle2Copy": "\u6211\u4eec\u4f18\u5148\u9009\u62e9\u5408\u683c\u751f\u4ea7\u4f19\u4f34\uff0c\u5e76\u5728\u4e70\u5bb6\u9700\u8981\u65f6\u5b89\u6392\u7b2c\u4e09\u65b9\u68c0\u6d4b\u3002",
        "about.principle3Title": "\u4e0d\u4ee5 Greenie \u4e4b\u540d\u59a5\u534f",
        "about.principle3Copy": "\u5982\u679c\u4e00\u4e2a\u6279\u6b21\u65e0\u6cd5\u901a\u8fc7 Greenie \u7684\u68c0\u67e5\uff0c\u5b83\u5c31\u4e0d\u5e94\u51fa\u73b0\u5728 Greenie \u540d\u4e0b\u3002",
        "quality.eyebrow": "\u8d28\u91cf\u4e0e\u5408\u89c4",
        "quality.title": "\u7f29\u77ed\u9500\u552e\u5468\u671f\u7684\u4e70\u5bb6\u8d44\u6599\u5305\u3002",
        "quality.copy": "\u6700\u7ec8\u51fa\u53e3\u8d44\u6599\u4ec5\u5e94\u4f7f\u7528\u53ef\u88ab\u6587\u4ef6\u8bc1\u660e\u7684\u58f0\u660e\u3002\u8bc1\u4e66\u548c\u68c0\u6d4b\u62a5\u544a\u5728\u672a\u516c\u5400\u524d\u7686\u4ee5\u6309\u9700\u63d0\u4f9b\u7684\u65b9\u5f0f\u5448\u73b0\u3002",
        "quality.doc1": "\u4ea7\u54c1\u89c4\u683c\u4e66",
        "quality.doc2": "COA \u53ca SGS/Eurofins \u68c0\u6d4b\u6309\u9700\u63d0\u4f9b",
        "quality.doc3": "\u539f\u4ea7\u5730\u6587\u4ef6",
        "quality.doc4": "\u53ef\u63d0\u4f9b HALAL \u8bc1\u4e66",
        "quality.doc5": "\u4fdd\u8d28\u671f\u4e0e\u50a8\u5b58\u8bf4\u660e",
        "terms.eyebrow": "\u5546\u4e1a\u6761\u6b3e",
        "terms.title": "\u8be2\u76d8\u6c9f\u901a\u4ece\u4e70\u5bb6\u6700\u5173\u5fc3\u7684\u4e8b\u5b9e\u5f00\u59cb\u3002",
        "terms.intro": "\u4ee5\u4e0b\u662f\u4e70\u5bb6\u5728\u53d1\u9001\u8be6\u7ec6\u8be2\u76d8\u524d\u53ef\u9884\u671f\u7684\u57fa\u7840\u5546\u4e1a\u6761\u6b3e\u3002",
        "terms.card1Label": "\u8d77\u8ba2\u91cf",
        "terms.card1": "\u4ece 1 \u516c\u5428\u8d77",
        "terms.card1Note": "\u9002\u7528\u4e8e\u9996\u6b21\u8bd5\u5355\u53ca\u540e\u7eed\u6708\u5ea6\u7a33\u5b9a\u8865\u8d27\u3002",
        "terms.card2Label": "\u4ea4\u671f",
        "terms.card2": "\u6839\u636e\u4ea7\u54c1\u548c\u5305\u88c5\u7ea6 10-30 \u5929",
        "terms.card2Note": "\u6807\u51c6\u4ea7\u54c1\u4ea4\u4ed8\u66f4\u5feb\uff1b\u5b9a\u5236\u81ea\u6709\u54c1\u724c\u5305\u88c5\u9700\u989d\u5916\u51c6\u5907\u65f6\u95f4\u3002",
        "terms.card3Label": "\u8fd0\u8f93",
        "terms.card3": "\u897f\u8d21\u548c\u6d77\u9632\u6e2f FOB \u6216 CIF",
        "terms.card3Note": "\u4e70\u5bb6\u53ef\u6309\u81ea\u8eab\u9700\u6c42\u9009\u62e9\u8fd0\u8f93\u8d23\u4efb\u5212\u5206\u4e0e\u76ee\u7684\u5730\u652f\u6301\u7ea7\u522b\u3002",
        "terms.card4Label": "\u4ed8\u6b3e",
        "terms.card4": "\u6309\u4e70\u5bb6\u9700\u6c42\u652f\u6301 T/T \u548c L/C",
        "terms.card4Note": "\u4ed8\u6b3e\u65b9\u5f0f\u53ef\u6309\u8d35\u53f8\u91c7\u8d2d\u653f\u7b56\u4e0e\u98ce\u63a7\u6d41\u7a0b\u8fdb\u884c\u5339\u914d\u3002",
        "oem.eyebrow": "OEM / \u81ea\u6709\u54c1\u724c",
        "oem.title": "\u9762\u5411\u76ee\u6807\u5e02\u573a\u7684\u81ea\u6709\u54c1\u724c\u5305\u88c5\u3002",
        "oem.copy": "Greenie \u652f\u6301\u4e70\u5bb6\u54c1\u724c\u5305\u88c5\u9700\u6c42\uff0c\u5305\u62ec\u7f50\u88c5\u3001\u725b\u76ae\u7eb8\u888b\u3001\u771f\u7a7a\u5305\u88c5\u3001\u6807\u7b7e\u8bed\u8a00\u548c\u51fa\u53e3\u6587\u4ef6\u3002",
        "oem.step1Title": "\u9700\u6c42\u7b80\u62a5",
        "oem.step1Copy": "\u4ea7\u54c1\u3001\u76ee\u6807\u5e02\u573a\u3001\u5305\u88c5\u5f62\u5f0f\u3001\u5305\u88c5\u89c4\u683c\u3001\u6587\u4ef6\u548c\u9884\u8ba1\u6570\u91cf\u3002",
        "oem.step2Title": "\u5305\u88c5\u786e\u8ba4",
        "oem.step2Copy": "\u4e70\u5bb6\u54c1\u724c\u3001\u6807\u7b7e\u8bed\u8a00\u3001\u7eb8\u7bb1\u6216\u888b\u578b\u4ee5\u53ca\u5408\u89c4\u8981\u6c42\u3002",
        "oem.step3Title": "\u6837\u54c1\u786e\u8ba4",
        "oem.step3Copy": "\u5982\u4e70\u5bb6\u9700\u8981\u8bc4\u4f30\uff0c\u53ef\u5728\u751f\u4ea7\u524d\u5b89\u6392\u6837\u54c1\u3002",
        "oem.step4Title": "\u751f\u4ea7",
        "oem.step4Copy": "\u4ea4\u671f\u53d6\u51b3\u4e8e\u4ea7\u54c1\u3001\u5e93\u5b58\u72b6\u6001\u548c\u5305\u88c5\u590d\u6742\u5ea6\u3002",
        "oem.step5Title": "\u68c0\u9a8c\u4e0e\u53d1\u8fd0",
        "oem.step5Copy": "\u53ef\u9009\u7b2c\u4e09\u65b9\u68c0\u6d4b\u3001\u6700\u7ec8\u6587\u4ef6\u548c FOB/CIF \u53d1\u8fd0\u652f\u6301\u3002",
        "samples.eyebrow": "\u7d22\u53d6\u6837\u54c1",
        "samples.title": "\u5728\u6279\u91cf\u8ba2\u5355\u524d\u8bc4\u4f30\u4ea7\u54c1\u8d28\u91cf\u3002",
        "samples.copy": "\u53ef\u7d22\u53d6\u8170\u679c\u4ec1\u3001\u624b\u5de5\u7518\u8517\u7cd6\u6216\u6df7\u5408\u6837\u54c1\u5305\u3002\u53ef\u5728\u6709\u6587\u4ef6\u65f6\u968f\u9644\u6280\u672f\u8d44\u6599\u3002",
        "samples.badge1": "\u53ef\u5feb\u9012\u6837\u54c1",
        "samples.badge2": "COA \u6309\u9700\u63d0\u4f9b",
        "samples.badge3": "\u652f\u6301\u4e70\u5bb6\u8bc4\u4f30",
        "samples.formTitle": "\u6837\u54c1\u9700\u6c42\u7b80\u62a5",
        "samples.formCopy": "\u5f53\u60a8\u53ea\u9700\u8981\u4ea7\u54c1\u6837\u54c1\u65f6\u4f7f\u7528\u6b64\u8868\u3002\u540c\u4e00\u9500\u552e\u56e2\u961f\u5c06\u5904\u7406\u6837\u54c1\u4e0e\u6279\u53d1\u8bf7\u6c42\u3002",
        "inquiry.eyebrow": "\u53d1\u9001\u8be2\u76d8",
        "inquiry.title": "\u63d0\u4ea4\u8be6\u7ec6\u7684\u8be2\u76d8\u3002",
        "inquiry.copy": "Greenie Vietnam \u5c06\u5728 24-48 \u5c0f\u65f6\u5185\u56de\u590d\u3002\u8bf7\u63d0\u4f9b\u6570\u91cf\u3001\u76ee\u7684\u5730\u3001\u6587\u4ef6\u548c\u5305\u88c5\u9700\u6c42\uff0c\u4ee5\u4fbf\u9500\u552e\u56e2\u961f\u5feb\u901f\u54cd\u5e94\u3002",
        "inquiry.needTitle": "\u8be2\u76d8\u5efa\u8bae\u5305\u542b",
        "inquiry.needCopy": "\u4ea7\u54c1\u3001\u9884\u8ba1\u6570\u91cf\uff08\u516c\u5428\uff09\u3001\u5305\u88c5\u504f\u597d\u3001\u8d38\u6613\u672f\u8bed\u3001\u76ee\u7684\u5730\u548c\u6240\u9700\u6587\u4ef6\u3002",
        "form.pack": "\u5305\u88c5",
        "form.sampleQuantity": "\u9884\u8ba1\u6570\u91cf",
        "form.company": "\u516c\u53f8\u540d\u79f0 *",
        "form.country": "\u56fd\u5bb6/\u5730\u533a *",
        "form.person": "\u8054\u7cfb\u4eba *",
        "form.role": "\u804c\u4f4d",
        "form.email": "\u90ae\u7bb1 *",
        "form.whatsapp": "WhatsApp / \u7535\u8bdd",
        "form.website": "\u516c\u53f8\u7f51\u7ad9 / \u793e\u4ea4\u4e3b\u9875",
        "form.product": "\u610f\u5411\u4ea7\u54c1 *",
        "form.selectProduct": "\u9009\u62e9\u4ea7\u54c1",
        "form.cashew": "\u8170\u679c\u4ec1",
        "form.sugar": "\u624b\u5de5\u7518\u8517\u7cd6",
        "form.tea": "\u5c71\u96ea\u53e4\u6811\u8336",
        "form.both": "\u8170\u679c + \u7518\u8517\u7cd6 + \u8336",
        "form.oem": "OEM / \u81ea\u6709\u54c1\u724c",
        "form.quantity": "\u9884\u8ba1\u6570\u91cf\uff08\u516c\u5428\uff09*",
        "form.packaging": "\u5305\u88c5\u504f\u597d",
        "form.incoterms": "\u8d38\u6613\u672f\u8bed",
        "form.notSure": "\u6682\u4e0d\u786e\u5b9a",
        "form.destination": "\u76ee\u7684\u5730",
        "form.notes": "\u6240\u9700\u6587\u4ef6\u6216\u5907\u6ce8",
        "form.submit": "\u63d0\u4ea4\u8be2\u76d8",
        "ph.company": "Company Ltd.",
        "ph.country": "China",
        "ph.person": "Full name",
        "ph.role": "Purchasing manager",
        "ph.email": "name@company.com",
        "ph.whatsapp": "+86 ...",
        "ph.website": "https://...",
        "ph.packaging": "\u6563\u88c5\u3001\u7f50\u88c5\u3001\u888b\u88c5\u3001\u771f\u7a7a\u5305\u88c5",
        "ph.samplePack": "250g, 500g, \u8bd5\u6837\u88c5",
        "ph.sampleQty": "1-2 \u5957",
        "ph.destination": "\u76ee\u7684\u6e2f / \u57ce\u5e02",
        "ph.sampleNotes": "\u6837\u54c1\u7528\u9014\u3001\u76ee\u6807\u5e02\u573a\u3001\u6587\u4ef6\u9700\u6c42...",
        "ph.notes": "HALAL\u3001SGS/Eurofins\u3001COA\u3001\u5305\u88c5\u8bed\u8a00\u3001\u76ee\u6807\u5e02\u573a...",
        "footer.copy": "\u9762\u5411\u5168\u7403\u6279\u53d1\u4e70\u5bb6\u548c\u81ea\u6709\u54c1\u724c\u5ba2\u6237\u7684\u53ef\u51fa\u53e3\u8d8a\u5357\u519c\u4ea7\u54c1\u3002",
        "footer.products": "\u4ea7\u54c1",
        "footer.cashew": "\u8170\u679c\u4ec1",
        "footer.sugar": "\u624b\u5de5\u7518\u8517\u7cd6",
        "footer.tea": "\u5c71\u96ea\u53e4\u6811\u8336",
        "footer.oem": "OEM / \u81ea\u6709\u54c1\u724c",
        "footer.sales": "\u9500\u552e",
        "footer.quickTitle": "\u6838\u5fc3\u4f18\u52bf",
        "footer.contactTitle": "\u8054\u7cfb\u65b9\u5f0f",
        "footer.fact1": "MOQ \u4ece 1 \u516c\u5428\u8d77",
        "footer.fact2": "\u4ea4\u671f 10-30 \u5929",
        "footer.fact3": "\u897f\u8d21\u548c\u6d77\u9632\u6e2f FOB / CIF",
        "footer.contact1": "24-48 \u5c0f\u65f6\u5185\u56de\u590d",
        "footer.contact2": "\u652f\u6301 T/T \u548c L/C",
        "footer.contact3": "\u53ef\u6309\u9700\u63d0\u4f9b HALAL \u4e0e\u68c0\u6d4b",
        "footer.rights": "\u00a9 2026 Greenie Vietnam Agricultural Exports.",
        "status.notConfigured": "EmailJS \u5c1a\u672a\u914d\u7f6e\u3002\u4e0a\u7ebf\u524d\u8bf7\u66ff\u6362 main.js \u4e2d\u7684 EmailJS \u5bc6\u94a5\u3002",
        "status.sending": "\u6b63\u5728\u53d1\u9001\u8be2\u76d8...",
        "status.sent": "\u8be2\u76d8\u5df2\u53d1\u9001\u6210\u529f\uff01\u6211\u4eec\u5c06\u5728 24-48 \u5c0f\u65f6\u5185\u56de\u590d\u3002",
        "status.failed": "\u53d1\u9001\u5931\u8d25\u3002\u8bf7\u91cd\u8bd5\u6216\u76f4\u63a5\u8054\u7cfb\u6211\u4eec\u3002",
        "status.tooFast": "\u8bf7\u7b49\u5f85\u51e0\u5206\u949f\u540e\u518d\u53d1\u9001\u8be2\u76d8\u3002"
    },
    hi: {
      metaTitle: "Greenie Vietnam - \u0935\u0948\u0936\u094d\u0935\u093f\u0915 \u0925\u094b\u0915 \u0928\u093f\u0930\u094d\u092f\u093e\u0924 \u0914\u0930 \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0932\u0947\u092c\u0932",
      metaDescription: "Greenie Vietnam \u0935\u0948\u0936\u094d\u0935\u093f\u0915 \u0906\u092f\u093e\u0924\u0915\u094b\u0902, \u0925\u094b\u0915 \u0916\u0930\u0940\u0926\u093e\u0930\u094b\u0902, \u0935\u093f\u0924\u0930\u0915\u094b\u0902 \u0914\u0930 \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0932\u0947\u092c\u0932 \u092c\u094d\u0930\u093e\u0902\u0921\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0928\u093f\u0930\u094d\u092f\u093e\u0924-\u0924\u0948\u092f\u093e\u0930 \u0935\u093f\u092f\u0924\u0928\u093e\u092e\u0940 \u0915\u093e\u091c\u0942 \u0914\u0930 \u0939\u0938\u094d\u0924\u0928\u093f\u0930\u094d\u092e\u093f\u0924 \u0917\u0928\u094d\u0928\u093e \u091a\u0940\u0928\u0940 \u0938\u092a\u094d\u0932\u093e\u0908 \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
      "nav.products": "\u0909\u0924\u094d\u092a\u093e\u0926",
      "nav.about": "\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902",
      "nav.quality": "\u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e",
      "nav.sample": "\u0928\u092e\u0942\u0928\u093e",
      "nav.inquiry": "\u091c\u093e\u0902\u091a",
      "nav.blog": "\u092c\u094d\u0932\u0949\u0917",
      "cta.sample": "\u0928\u092e\u0942\u0928\u093e \u092e\u093e\u0902\u0917\u0947\u0902",
      "cta.samples": "\u0928\u092e\u0942\u0928\u0947 \u092e\u093e\u0902\u0917\u0947\u0902",
      "cta.inquiry": "\u091c\u093e\u0902\u091a \u092d\u0947\u091c\u0947\u0902",
      "cta.getInquiryShort": "\u091c\u093e\u0902\u091a \u092d\u0947\u091c\u0947\u0902",
      "cta.submitOem": "OEM \u092c\u094d\u0930\u0940\u092b \u092d\u0947\u091c\u0947\u0902",
      "cta.samplesViaForm": "\u0915\u094b\u091f \u092b\u0949\u0930\u094d\u092f \u0938\u0947 \u0928\u092e\u0942\u0928\u093e \u092e\u093e\u0902\u0917\u0947\u0902",
      "hero.eyebrow": "\u0935\u0948\u0936\u094d\u0935\u093f\u0915 \u0925\u094b\u0915 \u0928\u093f\u0930\u094d\u092f\u093e\u0924 + \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0932\u0947\u092c\u0932",
      "hero.title": "\u0935\u0948\u0936\u094d\u0935\u093f\u0915 \u0916\u0930\u0940\u0926\u093e\u0930\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0928\u093f\u0930\u094d\u092f\u093e\u0924-\u0924\u0948\u092f\u093e\u0930 \u0935\u093f\u092f\u0924\u0928\u093e\u092e\u0940 \u0915\u093e\u091c\u0942 \u0914\u0930 \u0939\u0938\u094d\u0924\u0928\u093f\u0930\u094d\u092f\u093e\u0924 \u0917\u0928\u094d\u0928\u093e \u091a\u0940\u0928\u0940\u0964",
      "hero.copy": "Greenie Vietnam \u0926\u0941\u0928\u093f\u092f\u093e \u092d\u0930 \u0915\u0947 \u0906\u092f\u093e\u0924\u0915\u094b\u0902, \u0925\u094b\u0915 \u0916\u0930\u0940\u0926\u093e\u0930\u094b\u0902, \u0935\u093f\u0924\u0930\u0915\u094b\u0902, \u0928\u093f\u0930\u094d\u092f\u093e\u0924\u093e\u0913\u0902 \u0914\u0930 \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0932\u0947\u092c\u0932 \u092c\u094d\u0930\u093e\u0902\u0921\u094b\u0902 \u0915\u094b \u0938\u094d\u092a\u0937\u094d\u091f \u0935\u094d\u092f\u093e\u092a\u093e\u0930 \u0936\u0930\u094d\u0924\u0947\u0902, \u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c \u0914\u0930 \u0924\u0947\u091c\u093c \u0915\u094b\u091f \u0938\u092a\u094b\u0930\u094d\u091f \u0926\u0947\u0924\u093e \u0939\u0948\u0964",
      "hero.cardEyebrow": "\u0928\u093f\u0930\u094d\u092f\u093e\u0924 \u0936\u0930\u094d\u0924\u0947\u0902",
      "hero.cardTitle": "MOQ 1 MT \u0938\u0947",
      "hero.cardCopy": "Saigon & Haiphong Port \u0938\u0947 FOB/CIF, \u0914\u0930 SGS/Eurofins \u091f\u0947\u0938\u094d\u091f\u093f\u0902\u0917 \u0905\u0928\u0941\u0930\u094b\u0927 \u092a\u0930 \u0909\u092a\u0932\u092c\u094d\u0927\u0964",
      "proof.moqLabel": "MOQ",
      "proof.moq": "1 MT",
      "proof.leadLabel": "\u0932\u0940\u0921 \u091f\u093e\u0907\u092e",
      "proof.lead": "10-30 \u0926\u093f\u0928",
      "proof.complianceLabel": "\u0915\u092e\u094d\u092a\u094d\u0932\u093e\u092f\u0902\u0938",
      "proof.compliance": "HALAL \u0909\u092a\u0932\u092c\u094d\u0927",
      "proof.testingLabel": "\u091f\u0947\u0938\u094d\u091f\u093f\u0902\u0917",
      "proof.testing": "SGS/Eurofins",
      "proof.incotermsLabel": "Incoterms",
      "proof.incoterms": "FOB/CIF",
      "proof.portLabel": "\u092a\u094b\u0930\u094d\u091f",
      "proof.port": "Saigon & Haiphong Port",
      "proof.paymentLabel": "\u092d\u0941\u0917\u0924\u093e\u0928",
      "proof.payment": "T/T \u0914\u0930 L/C",
      "proof.responseLabel": "\u091c\u0935\u093e\u092c",
      "proof.response": "24-48 \u0918\u0902\u091f\u0947",
      "products.eyebrow": "\u092e\u0941\u0916\u094d\u092f \u0909\u0924\u094d\u092a\u093e\u0926",
      "products.title": "\u0925\u094b\u0915 \u0914\u0930 \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0932\u0947\u092c\u0932 \u0915\u0947 \u0932\u093f\u090f \u092a\u094d\u0930\u0940\u092e\u093f\u092f\u092e \u0928\u093f\u0930\u094d\u092f\u093e\u0924 \u0915\u0948\u091f\u0947\u0917\u0930\u094d\u092f\u093e\u0902\u0964",
      "products.copy": "\u092b\u094b\u0915\u0938\u094d\u0921 \u0909\u0924\u094d\u092a\u093e\u0926 \u0932\u093e\u0907\u0928 \u0916\u0930\u0940\u0926\u093e\u0930\u094b\u0902 \u0915\u094b \u0938\u0939\u0940 \u0938\u094d\u092a\u0947\u0938\u093f\u092b\u093f\u0915\u0947\u0936\u0928 \u0936\u0940\u091f, \u0928\u092e\u0942\u0928\u0947, \u092a\u0948\u0915\u0947\u091c\u093f\u0902\u0917 \u0935\u093f\u0915\u0932\u094d\u092a \u0914\u0930 \u0915\u092e\u094d\u092a\u094d\u0932\u093e\u092f\u0902\u0938 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c \u091c\u0932\u094d\u0926\u0940 \u092e\u093e\u0902\u0917\u0928\u0947 \u092e\u0947\u0902 \u092e\u0926\u0926 \u0915\u0930\u0924\u0940 \u0939\u0948\u0964",
      "cashew.origin": "Binh Phuoc, Vietnam",
      "cashew.title": "\u0935\u093f\u092f\u0924\u0928\u093e\u092e\u0940 \u0915\u093e\u091c\u0942 kernels",
      "cashew.copy": "\u0935\u094d\u0939\u093e\u0907\u091f \u0939\u094b\u0932 \u0915\u093e\u091c\u0942 kernels \u0925\u094b\u0916 \u0916\u0930\u0940\u0926\u093e\u0930\u094b\u0902, \u0935\u093f\u0924\u0930\u0915\u094b\u0902, \u0930\u094b\u0938\u094d\u091f\u0930\u094d\u0938, \u092b\u0942\u0921 \u0938\u0930\u094d\u0935\u093f\u0938, \u0928\u093f\u0930\u094d\u092e\u093e\u0924\u093e\u0913\u0902 \u0914\u0930 \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0932\u0947\u092c\u0932 \u092c\u094d\u0930\u093e\u0902\u0921\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f\u0964",
      "cashew.spec1Label": "\u0917\u094d\u0930\u0947\u0921",
      "cashew.spec1": "W180, W240, W320",
      "cashew.spec2Label": "\u092a\u0948\u0915\u0947\u091c\u093f\u0902\u0917",
      "cashew.spec2": "Bulk, vacuum, carton options",
      "cashew.spec3Label": "\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c",
      "cashew.spec3": "Spec sheet, COA \u0905\u0928\u0941\u0930\u094b\u0927 \u092a\u0930",
      "cashew.spec4Label": "\u090f\u0932\u0930\u094d\u091c\u0928",
      "cashew.spec4": "Tree nut statement",
      "sugar.origin": "Quang Ngai, Vietnam",
      "sugar.title": "\u0939\u0938\u094d\u0924\u0928\u093f\u0930\u094d\u092e\u093f\u0924 \u0917\u0928\u094d\u0928\u093e \u091a\u0940\u0928\u0940 \"Duong Phoi\"",
      "sugar.copy": "\u0935\u0948\u0936\u094d\u0935\u093f\u0915 \u0930\u093f\u091f\u0947\u0932, \u092b\u0942\u0921 \u0938\u0930\u094d\u0935\u093f\u0938, \u0925\u094b\u0915 \u0938\u092a\u094d\u0932\u093e\u0908 \u0914\u0930 \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0932\u0947\u092c\u0932 \u092a\u0948\u0915\u0947\u091c\u093f\u0902\u0917 \u0915\u0947 \u0932\u093f\u090f \u092a\u093e\u0930\u0902\u092a\u0930\u093f\u0915 \u0935\u093f\u092f\u0924\u0928\u093e\u092e\u0940 \u0917\u0928\u094d\u0928\u093e \u091a\u0940\u0928\u0940\u0964",
      "sugar.spec1Label": "\u0938\u094d\u091f\u0947\u091f\u092e\u0947\u0902\u091f",
      "sugar.spec1": "\u0915\u094b\u0908 preservatives \u0928\u0939\u0940\u0902",
      "sugar.spec2Label": "\u092a\u0948\u0915\u0947\u091c\u093f\u0902\u0917",
      "sugar.spec2": "Jar, pouch, vacuum options",
      "sugar.spec3Label": "\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c",
      "sugar.spec3": "Spec sheet, COA \u0905\u0928\u0941\u0930\u094b\u0927 \u092a\u0930",
      "sugar.spec4Label": "Origin",
      "sugar.spec4": "Vietnam country of origin",
      "tea.origin": "Ha Giang, Vietnam",
      "tea.title": "Shan Tuyet Ancient Tea",
      "tea.copy": "Ha Giang \u0915\u0947 \u0927\u0941\u0902\u0927 \u092d\u0930\u0947 \u090a\u0902\u091a\u093e\u0908 \u0935\u093e\u0932\u0947 \u0907\u0932\u093e\u0915\u094b\u0902 \u092e\u0947\u0902 200+ \u0938\u093e\u0932 \u092a\u0941\u0930\u093e\u0928\u0947 \u092a\u0947\u0921\u093c\u094b\u0902 \u0938\u0947 \u091c\u0902\u0917\u0932\u0940 \u0930\u0942\u092a \u0938\u0947 \u0909\u0917\u093e\u0908 \u091c\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u092a\u094d\u0930\u093e\u091a\u0940\u0928 \u091a\u093e\u092f\u0964 \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0932\u0947\u092c\u0932 \u092c\u094d\u0930\u093e\u0902\u0921\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0939\u093e\u0925 \u0938\u0947 \u0924\u094b\u0921\u093c\u0940 \u0917\u0908, \u092a\u093e\u0930\u0902\u092a\u0930\u093f\u0915 \u0930\u0942\u092a \u0938\u0947 \u092a\u094d\u0930\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u0964",
      "tea.spec1Label": "Grade",
      "tea.spec1": "1 bud 2 leaves",
      "tea.spec2Label": "Packaging",
      "tea.spec2": "Loose leaf, tin, pouch options",
      "tea.spec3Label": "Documents",
      "tea.spec3": "Spec sheet, COA \u0905\u0928\u0941\u0930\u094b\u0927 \u092a\u0930",
      "tea.spec4Label": "Altitude",
      "tea.spec4": "1,200-1,800m ASL",
      "why.eyebrow": "Greenie \u0915\u094d\u092f\u094b\u0902",
      "why.title": "\u0909\u0928 \u0916\u0930\u0940\u0926\u093e\u0930\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u091c\u094b \u0915\u0940\u092e\u0924 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0938\u094d\u092a\u0937\u094d\u091f\u0924\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902\u0964",
      "why.copy": "Greenie \u0916\u0930\u0940\u0926 \u092c\u093e\u0924\u091a\u0940\u0924 \u0915\u094b \u0935\u094d\u092f\u093e\u0935\u0939\u093e\u0930\u093f\u0915 \u0930\u0916\u0924\u093e \u0939\u0948: \u092a\u0939\u0932\u0940 \u0915\u094b\u091f \u0938\u0947 \u092a\u0939\u0932\u0947 \u0935\u094d\u092f\u093e\u092a\u093e\u0930 \u0936\u0930\u094d\u0924\u0947\u0902, \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c, \u092a\u0948\u0915\u0947\u091c\u093f\u0902\u0917, \u091f\u0947\u0938\u094d\u091f\u093f\u0902\u0917 \u0914\u0930 \u0936\u093f\u092a\u093f\u0902\u0917 \u0905\u092a\u0947\u0915\u094d\u0937\u093e\u090f\u0901 \u0938\u094d\u092a\u0937\u094d\u091f \u0915\u0940 \u091c\u093e\u0924\u0940 \u0939\u0948\u0902\u0964",
      "why.card1Title": "\u0938\u094d\u092a\u0937\u094d\u091f \u0936\u0930\u094d\u0924\u0947\u0902",
      "why.card1Copy": "MOQ 1 MT \u0938\u0947, lead time 10-30 \u0926\u093f\u0928, FOB/CIF, Saigon & Haiphong Port, T/T \u0914\u0930 L/C\u0964",
      "why.card2Title": "\u0915\u092e\u094d\u092a\u094d\u0932\u093e\u092f\u0902\u0938-\u0930\u0947\u0921\u0940",
      "why.card2Copy": "HALAL certificate \u0909\u092a\u0932\u092c\u094d\u0927 \u0914\u0930 SGS/Eurofins third-party testing \u0905\u0928\u0941\u0930\u094b\u0927 \u092a\u0930 \u0909\u092a\u0932\u092c\u094d\u0927\u0964",
      "why.card3Title": "\u0932\u091a\u0940\u0932\u0940 \u0938\u092a\u094d\u0932\u093e\u0908",
      "why.card3Copy": "Wholesale export, bulk packaging \u0914\u0930 buyer brands \u0915\u0947 \u0932\u093f\u090f private label options\u0964",
      "why.card4Title": "\u0935\u0948\u0936\u094d\u0935\u093f\u0915 \u0928\u093f\u0930\u094d\u092f\u093e\u0924 \u0938\u092a\u094b\u0930\u094d\u091f",
      "why.card4Copy": "\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c \u0914\u0930 \u0936\u093f\u092a\u093f\u0902\u0917 \u091a\u0930\u094d\u091a\u093e Asia, China, South Asia, Europe, North America \u0914\u0930 \u0905\u0928\u094d\u092f \u092c\u093e\u091c\u093c\u093e\u0930\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0905\u0928\u0941\u0915\u0942\u0932 \u0915\u0940 \u091c\u093e \u0938\u0915\u0924\u0940 \u0939\u0948\u0964",
      "about.eyebrow": "Greenie \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902",
      "about.title": "\u0905\u0938\u094d\u092a\u0937\u094d\u091f food promises \u0915\u094b \u0938\u094d\u0935\u0940\u0915\u093e\u0930 \u0928 \u0915\u0930\u0928\u0947 \u0938\u0947 \u0936\u0941\u0930\u0942 \u0939\u0941\u0908\u0964",
      "about.copy1": "Greenie \u0915\u0940 \u0936\u0941\u0930\u0941\u0906\u0924 real factory visits \u0915\u0947 \u092c\u093e\u0926 \u0939\u0941\u0908, \u091c\u0939\u093e\u0901 \u090f\u0915 \u0915\u0920\u093f\u0928 \u0938\u091a\u094d\u091a\u093e\u0908 \u0926\u093f\u0916\u0940: \u0915\u0908 food brands \u0938\u0941\u0902\u0926\u0930 \u0936\u092c\u094d\u0926\u094b\u0902 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u0932\u0947\u0915\u093f\u0928 label \u0915\u0947 \u092a\u0940\u091b\u0947 unclear processes \u091b\u093f\u092a\u0947 \u0930\u0939\u0924\u0947 \u0939\u0948\u0902\u0964",
      "about.copy2": "\u0938\u093e\u0925 \u0939\u0940, Vietnamese agricultural products \u0905\u092c \u092d\u0940 low-value raw materials \u0915\u0940 \u0924\u0930\u0939 \u092c\u0947\u091a\u0947 \u091c\u093e\u0924\u0947 \u0939\u0948\u0902, \u091c\u092c\u0915\u093f \u0926\u0942\u0938\u0930\u0947 markets \u0909\u0928\u094d\u0939\u0947\u0902 deeper process \u0915\u0930\u0915\u0947 \u091c\u093c\u094d\u092f\u093e\u0926\u093e value capture \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964 Greenie transparency, documentation \u0914\u0930 disciplined selection \u0938\u0947 \u0907\u0938 \u0930\u093e\u0938\u094d\u0924\u0947 \u0915\u094b \u092c\u0926\u0932\u0928\u093e \u091a\u093e\u0939\u0924\u093e \u0939\u0948\u0964",
      "about.copy3": "\u092e\u093e\u0928\u0915 \u0928\u093f\u0930\u094d\u092f\u093e\u0924 \u0915\u0947 \u0905\u0932\u093e\u0935\u093e, Greenie \u0916\u0930\u0940\u0926\u093e\u0930 \u092c\u094d\u0930\u093e\u0902\u0921\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f OEM / \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0932\u0947\u092c\u0932 \u092a\u0948\u0915\u0947\u091c\u093f\u0902\u0917 \u0915\u093e \u092d\u0940 \u0938\u092e\u0930\u094d\u0925\u0928 \u0915\u0930\u0924\u093e \u0939\u0948 \u2014 \u0932\u0947\u092c\u0932 \u0921\u093f\u091c\u093c\u093e\u0907\u0928 \u0914\u0930 \u092a\u0948\u0915\u0947\u091c\u093f\u0902\u0917 \u092b\u0949\u0930\u094d\u092e\u0948\u091f \u0938\u0947 \u0932\u0947\u0915\u093er \u0905\u0928\u0941\u092a\u093e\u0932\u0928 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c\u0940\u0915\u0930\u0923 \u0914\u0930 \u0905\u0902\u0924\u0930\u094d\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u0940\u092f \u0936\u093f\u092a\u093f\u0902\u0917 \u0924\u0915\u0964",
      "about.quote": "\u0939\u092e \u0938\u093f\u0930\u094d\u092b\u093c products \u0928\u0939\u0940\u0902 \u0916\u0930\u0940\u0926\u0924\u0947\u0964 \u0939\u092e integrity \u091a\u0941\u0928\u0924\u0947 \u0939\u0948\u0902\u0964",
      "about.standardLabel": "The Greenie Standard",
      "about.standardTitle": "90% local essence. 10% global filter.",
      "about.principle1Title": "Slogans \u0938\u0947 \u091c\u093c\u094d\u092f\u093e\u0926\u093e transparency",
      "about.principle1Copy": "\u0939\u0930 claim \u0915\u094b documents, process checks \u092f\u093e supplier evidence \u0938\u0947 support \u0939\u094b\u0928\u093e \u091a\u093e\u093f\u090f\u0964",
      "about.principle2Title": "Independent verification",
      "about.principle2Copy": "\u0939\u092e qualified production partners \u0915\u094b \u092a\u094d\u0930\u093e\u0925\u092e\u093f\u0915\u0924\u093e \u0926\u0947\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 buyer \u0915\u0940 \u091c\u093c\u0930\u0942\u0930\u0924 \u092a\u0930 third-party testing arrange \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
      "about.principle3Title": "Greenie \u0928\u093e\u092e \u0915\u0947 \u0924\u0939\u0924 \u0915\u094b\u0908 compromise \u0928\u0939\u0940\u0902",
      "about.principle3Copy": "\u092f\u0926\u093f \u0915\u094b\u0908 batch Greenie checks \u092a\u093e\u0938 \u0928\u0939\u0940\u0902 \u0915\u0930 \u0938\u0915\u0924\u093e, \u0924\u094b \u0935\u0939 Greenie \u0928\u093e\u092e \u0938\u0947 \u0928\u0939\u0940\u0902 \u0906\u0928\u093e \u091a\u093e\u0939\u093f\u090f\u0964",
      "quality.eyebrow": "\u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e \u0914\u0930 \u0915\u092e\u094d\u092a\u094d\u0932\u093e\u092f\u0902\u0938",
      "quality.title": "Buyer pack \u091c\u094b sales cycle \u0915\u094b \u091b\u094b\u091f\u093e \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
      "quality.copy": "\u0905\u0902\u0924\u093f\u092e \u0928\u093f\u0930\u094d\u092f\u093e\u0924 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u092e\u0947\u0902 \u0915\u0947\u0935\u0932 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c-\u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u0926\u093e\u0935\u0947 \u0909\u092a\u092f\u094b\u0917 \u0939\u094b\u0928\u0947 \u091a\u093e\u0939\u093f\u090f\u0964 Certificate \u0914\u0930 test reports ready \u0939\u094b\u0928\u0947 \u0924\u0915 \u0905\u0928\u0941\u0930\u094b\u0927 \u092a\u0930 \u0909\u092a\u0932\u092c\u094d\u0927 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0930\u0916\u0947 \u091c\u093e\u0924\u0947 \u0939\u0948\u0902\u0964",
      "quality.doc1": "Product specification sheets",
      "quality.doc2": "COA \u0914\u0930 SGS/Eurofins testing \u0905\u0928\u0941\u0930\u094b\u0927 \u092a\u0930",
      "quality.doc3": "Country of Origin documentation",
      "quality.doc4": "HALAL certificate \u0909\u092a\u0932\u092c\u094d\u0927",
      "quality.doc5": "Shelf life \u0914\u0930 storage statements",
      "terms.eyebrow": "\u0935\u094d\u092f\u093e\u092a\u093e\u0930 \u0936\u0930\u094d\u0924\u0947\u0902",
      "terms.title": "\u0915\u094b\u091f \u092c\u093e\u0924\u091a\u0940\u0924 \u0909\u0928 \u0924\u0925\u094d\u092f\u094b\u0902 \u0938\u0947 \u0936\u0941\u0930\u0942 \u0939\u094b\u0924\u0940 \u0939\u0948 \u091c\u094b \u0916\u0930\u0940\u0926\u093e\u0930 \u092a\u0939\u0932\u0947 \u092a\u0942\u091b\u0924\u0947 \u0939\u0948\u0902\u0964",
      "terms.intro": "\u0935\u093f\u0938\u094d\u0924\u0943\u0924 \u091c\u093e\u0902\u091a \u092d\u0947\u091c\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0916\u0930\u0940\u0926\u093e\u0930 \u0938\u093e\u092e\u093e\u0928\u094d\u092f\u0924\u0903 \u0907\u0928\u094d\u0939\u0940\u0902 \u092c\u0947\u0938\u093f\u0915 \u0935\u094d\u092f\u093e\u092a\u093e\u0930 \u0936\u0930\u094d\u0924\u094b\u0902 \u0915\u0940 \u0905\u092a\u0947\u0915\u094d\u0937\u093e \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
      "terms.card1Label": "MOQ",
      "terms.card1": "1 metric ton \u0938\u0947",
      "terms.card1Note": "\u092a\u0939\u0932\u0947 \u0925\u094b\u0915 \u091f\u094d\u0930\u093e\u092f\u0932 \u0911\u0930\u094d\u0921\u0930 \u0914\u0930 \u0928\u093f\u092f\u092e\u093f\u0924 \u092e\u093e\u0938\u093f\u0915 \u0938\u092a\u094d\u0932\u093e\u0908 \u0926\u094b\u0928\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0909\u092a\u092f\u0941\u0915\u094d\u0924\u0964",
      "terms.card2Label": "Lead time",
      "terms.card2": "\u0909\u0924\u094d\u092a\u093e\u0926 \u0914\u0930 \u092a\u0948\u0915\u0947\u091c\u093f\u0902\u0917 \u0915\u0947 \u0906\u0927\u093e\u0930 \u092a\u0930 10-30 \u0926\u093f\u0928",
      "terms.card2Note": "\u0938\u094d\u091f\u0948\u0902\u0921\u0930\u094d\u0921 \u0909\u0924\u094d\u092a\u093e\u0926 \u091c\u0932\u094d\u0926\u0940 \u092d\u0947\u091c\u0947 \u091c\u093e\u0924\u0947 \u0939\u0948\u0902; custom private label \u092a\u0948\u0915 \u092e\u0947\u0902 \u0905\u0924\u093f\u0930\u093f\u0915\u094d\u0924 \u0924\u0948\u092f\u093e\u0930 \u0938\u092e\u092f \u0932\u0917\u0924\u093e \u0939\u0948\u0964",
      "terms.card3Label": "Shipping",
      "terms.card3": "Saigon & Haiphong Port \u0938\u0947 FOB \u092f\u093e CIF",
      "terms.card3Note": "\u0916\u0930\u0940\u0926\u093e\u0930 \u0905\u092a\u0928\u0940 \u092a\u0938\u0902\u0926 \u0915\u0947 shipping responsibility model \u0914\u0930 destination support level \u091a\u0941\u0928 \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
      "terms.card4Label": "Payment",
      "terms.card4": "Buyer requirements \u0915\u0947 \u0906\u0927\u093e\u0930 \u092a\u0930 T/T \u0914\u0930 L/C",
      "terms.card4Note": "Payment method \u0906\u092a\u0915\u0940 procurement policy \u0914\u0930 risk control process \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 align \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948\u0964",
      "oem.eyebrow": "OEM / private label",
      "oem.title": "\u0906\u092a\u0915\u0947 target market \u0915\u0947 \u0932\u093f\u090f private label packaging\u0964",
      "oem.copy": "Greenie jars, kraft pouches, vacuum packs, label language requirements \u0914\u0930 export documentation \u092a\u0930 buyer-brand packaging \u091a\u0930\u094d\u091a\u093e \u092e\u0947\u0902 \u0938\u0939\u093e\u092f\u0924\u093e \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
      "oem.step1Title": "Requirements brief",
      "oem.step1Copy": "Product, target market, packaging format, pack size, documents \u0914\u0930 estimated volume\u0964",
      "oem.step2Title": "Packaging confirmation",
      "oem.step2Copy": "Buyer brand, label language, carton \u092f\u093e pouch format \u0914\u0930 compliance requirements\u0964",
      "oem.step3Title": "Sample approval",
      "oem.step3Copy": "Buyer evaluation \u091c\u093c\u0930\u0942\u0930\u094y \u0939\u094b\u0928\u0947 \u092a\u0930 production \u0938\u0947 \u092a\u0939\u0932\u0947 samples arrange \u0915\u093f\u090f \u091c\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964",
      "oem.step4Title": "Production",
      "oem.step4Copy": "Lead time product, stock status \u0914\u0930 packaging complexity \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
      "oem.step5Title": "Inspection & shipment",
      "oem.step5Copy": "Optional third-party testing, final documents \u0914\u0930 FOB/CIF shipment support\u0964",
      "samples.eyebrow": "\u0928\u092e\u0942\u0928\u093e \u092e\u093e\u0902\u0917\u0947\u0902",
      "samples.title": "\u0925\u094b\u0915 \u0911\u0930\u094d\u0921\u0930 \u0938\u0947 \u092a\u0939\u0932\u0947 product quality evaluate \u0915\u0930\u0947\u0902\u0964",
      "samples.copy": "Cashew kernels, artisan cane sugar \u092f\u093e mixed sample pack \u092e\u093e\u0902\u0917\u0947\u0902\u0964 \u0909\u092a\u0932\u092c\u094d\u0927 \u0939\u094b\u0928\u0947 \u092a\u0930 technical documents \u0936\u093e\u092e\u093f\u0932 \u0915\u093f\u090f \u091c\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964",
      "samples.badge1": "Courier-ready samples",
      "samples.badge2": "COA \u0905\u0928\u0941\u0930\u094b\u0927 \u092a\u0930",
      "samples.badge3": "Buyer evaluation support",
      "samples.formTitle": "Sample request brief",
      "samples.formCopy": "\u091c\u092c \u0906\u092a\u0915\u094b \u0915\u0947\u0935\u0932 \u0909\u0924\u094d\u092a\u093e\u0926 \u0928\u092e\u0942\u0928\u0947 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u091a\u093e\u0939\u093f\u090f \u0924\u094b \u0907\u0938 \u092b\u0949\u0930\u094d\u092f \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0947\u0902\u0964 \u0935\u0939\u0940 \u0938\u0947\u0932\u094d\u0938 \u091f\u0940\u092e \u0938\u0948\u0902\u092a\u0932 \u0914\u0930 \u0925\u094b\u0915 \u0926\u094b\u0928\u094b\u0902 \u0905\u0928\u0941\u0930\u094b\u0927 \u0938\u0902\u092d\u093e\u0932\u0947\u0917\u0940\u0964",
      "inquiry.eyebrow": "\u091c\u093e\u0902\u091a \u092d\u0947\u091c\u0947\u0902",
      "inquiry.title": "\u0935\u093f\u0938\u094d\u0924\u0943\u0924 \u091c\u093e\u0902\u091a \u092d\u0947\u091c\u0947\u0902\u0964",
      "inquiry.copy": "Greenie Vietnam 24-48 \u0918\u0902\u091f\u0947 \u092e\u0947\u0902 \u091c\u0935\u093e\u092c \u0926\u0947\u0924\u093e \u0939\u0948\u0964 \u0915\u0943\u092a\u092f\u093e volume, destination, documents \u0914\u0930 packaging details \u0936\u093e\u092e\u093f\u0932 \u0915\u0930\u0947\u0902 \u0924\u093e\u0915\u093f sales team \u091c\u0932\u094d\u0926\u0940 \u091c\u0935\u093e\u092c \u0926\u0947 \u0938\u0915\u0947\u0964",
      "inquiry.needTitle": "\u0906\u092a\u0915\u0940 inquiry \u092e\u0947\u0902 \u091a\u093e\u0939\u093f\u090f",
      "inquiry.needCopy": "Product, estimated quantity in MT, packaging preference, incoterm, destination \u0914\u0930 required documents\u0964",
      "form.pack": "\u092a\u0948\u0915\u0947\u091c",
      "form.sampleQuantity": "\u0905\u0928\u0941\u092e\u093e\u0928\u093f\u0924 \u092e\u093e\u0924\u094d\u0930\u093e",
      "form.company": "Company name *",
      "form.country": "Country *",
      "form.person": "Contact person *",
      "form.role": "Role",
      "form.email": "Email *",
      "form.whatsapp": "WhatsApp / phone",
      "form.website": "Company website / social",
      "form.product": "Product interest *",
      "form.selectProduct": "Product \u091a\u0941\u0928\u0947\u0902",
      "form.cashew": "Cashew Kernels",
      "form.sugar": "Artisan Cane Sugar",
      "form.tea": "Shan Tuyet Ancient Tea",
      "form.both": "Cashew + Cane Sugar + Tea",
      "form.oem": "OEM / Private Label",
      "form.quantity": "Estimated quantity (MT) *",
      "form.packaging": "Packaging preference",
      "form.incoterms": "Incoterms",
      "form.notSure": "\u0905\u092d\u0940 \u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u0928\u0939\u0940\u0902",
      "form.destination": "Destination",
      "form.notes": "Required documents or notes",
      "form.submit": "Inquiry \u092d\u0947\u091c\u0947\u0902",
      "ph.company": "Company Ltd.",
      "ph.country": "India",
      "ph.person": "Full name",
      "ph.role": "Purchasing manager",
      "ph.email": "name@company.com",
      "ph.whatsapp": "+91 ...",
      "ph.website": "https://...",
      "ph.packaging": "Bulk, jar, pouch, vacuum pack",
      "ph.samplePack": "250g, 500g, trial pack",
      "ph.sampleQty": "1-2 sets",
      "ph.destination": "Destination port / city",
      "ph.sampleNotes": "Sampling purpose, target market, document needs...",
      "ph.notes": "HALAL, SGS/Eurofins, COA, packaging language, target market...",
      "footer.copy": "\u0935\u0948\u0936\u094d\u0935\u093f\u0915 \u0925\u094b\u0915 \u0916\u0930\u0940\u0926\u093e\u0930\u094b\u0902 \u0914\u0930 private label brands \u0915\u0947 \u0932\u093f\u090f \u0928\u093f\u0930\u094d\u092f\u093e\u0924-\u0924\u0948\u092f\u093e\u0930 \u0935\u093f\u092f\u0924\u0928\u093e\u092e\u0940 \u0915\u0943\u0937\u093f \u0909\u0924\u094d\u092a\u093e\u0926\u0964",
      "footer.products": "Products",
      "footer.cashew": "Cashew Kernels",
      "footer.sugar": "Artisan Cane Sugar",
      "footer.tea": "Shan Tuyet Ancient Tea",
      "footer.oem": "OEM / Private Label",
      "footer.sales": "Sales",
      "footer.quickTitle": "Quick Facts",
      "footer.contactTitle": "Contact",
      "footer.fact1": "MOQ from 1 MT",
      "footer.fact2": "Lead time 10-30 days",
      "footer.fact3": "FOB / CIF from Saigon & Haiphong Port",
      "footer.contact1": "Reply within 24-48 hours",
      "footer.contact2": "T/T and L/C available",
      "footer.contact3": "HALAL and testing on request",
      "footer.rights": "\u00a9 2026 Greenie Vietnam Agricultural Exports.",
      "status.notConfigured": "EmailJS \u0905\u092d\u0940 configured \u0928\u0939\u0940\u0902 \u0939\u0948\u0964 Live \u091c\u093e\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 main.js \u092e\u0947\u0902 EmailJS keys replace \u0915\u0930\u0947\u0902\u0964",
      "status.sending": "\u092a\u0941\u091b\u0924\u093e\u091b \u092d\u0947\u091c\u093e \u091c\u093e \u0930\u0939\u0940 \u0939\u0948...",
      "status.sent": "\u092a\u0941\u091b\u0924\u093e\u091b \u0938\u092b\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u092d\u0947\u091c\u0940 \u0917\u0908! \u0939\u092e 24-48 \u0918\u0902\u091f\u094b\u0902 \u0915\u0947 \u092d\u0940\u0924\u0930 \u091c\u0935\u093e\u092c \u0926\u0947\u0902\u0917\u0947\u0964",
      "status.failed": "\u092d\u0947\u091c\u0928\u0947 \u092e\u0947\u0902 \u0935\u093f\u092b\u0932\u0964 \u0915\u0943\u092a\u092f\u093e \u092a\u0941\u0928\u0903 \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902 \u092f\u093e \u0938\u0940\u0927\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902\u0964",
      "status.tooFast": "\u0915\u0943\u092a\u092f\u093e \u0905\u0917\u0932\u0940 \u092a\u0941\u091b\u0924\u093e\u091b \u092d\u0947\u091c\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0915\u0941\u091b \u092e\u093f\u0928\u091f \u092a\u094d\u0930\u0924\u0940\u0915\u094d\u0937\u093e \u0915\u0930\u0947\u0902\u0964"
    }
};

let currentLanguage = localStorage.getItem("greenie-language") || "en";

function translate(key) {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function applyLanguage(language) {
    currentLanguage = translations[language] ? language : "en";
    localStorage.setItem("greenie-language", currentLanguage);
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : currentLanguage;
    document.title = translate("metaTitle");

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", translate("metaDescription"));
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = translate(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === currentLanguage);
    });
}

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
const sampleForm = document.getElementById("sample-form");
const statusText = document.getElementById("form-status");
const sampleStatusText = document.getElementById("sample-form-status");
const languageButtons = document.querySelectorAll(".lang-btn");

languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(currentLanguage);

function setStatus(target, message, className) {
    if (!target) {
        return;
    }

    target.textContent = message;
    target.className = `text-sm font-semibold ${className}`;
}


if (window.emailjs) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log("EmailJS initialized");
}

function bindEmailForm(form, statusElement, templateId) {
    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // 1. Honeypot check
        const honey1 = form.querySelector('input[name="confirm_email_address"]');
        const honey2 = form.querySelector('input[name="confirm_user_name"]');
        if ((honey1 && honey1.value) || (honey2 && honey2.value)) {
            console.warn("Honeypot filled - Bot detected");
            setStatus(statusElement, translate("status.sent"), "text-emerald-700"); // Fake success
            form.reset();
            return;
        }

        // 2. Throttling check (5 minutes)
        const lastSent = localStorage.getItem("last_form_sent");
        const now = Date.now();
        if (lastSent && now - parseInt(lastSent) < 300000) {
            setStatus(statusElement, translate("status.tooFast"), "text-amber-600");
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setStatus(statusElement, translate("status.sending"), "text-primary");

        emailjs
            .sendForm(EMAILJS_SERVICE_ID, templateId, form)
            .then(() => {
                setStatus(statusElement, translate("status.sent"), "text-emerald-700");
                localStorage.setItem("last_form_sent", Date.now().toString());
                form.reset();
            })
            .catch((error) => {
                console.error("EmailJS failed", error);
                setStatus(statusElement, translate("status.failed"), "text-red-700");
            });
    });
}

// Gán hàm xử lý cho cả 2 form với template khác nhau
// Navbar Scroll Effect
const mainHeader = document.getElementById("main-header");
const logo = document.getElementById("logo");
const navMenu = document.getElementById("nav-menu");
const inquireBtn = document.getElementById("inquire-btn");
const mobileMenuBtn = document.getElementById("mobile-menu-button");

if (mainHeader) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            // Scrolled: white glass with strong border + shadow to contrast bg-surface
            mainHeader.classList.add("bg-white", "backdrop-blur-xl", "shadow-md", "border-b", "border-slate-200", "py-3");
            mainHeader.classList.remove("bg-transparent", "py-4", "lg:py-8");

            logo?.classList.add("text-primary");
            logo?.classList.remove("text-white", "hover:text-white/80");

            navMenu?.classList.add("text-secondary");
            navMenu?.classList.remove("text-white/80");

            inquireBtn?.classList.add("border-primary", "text-primary", "hover:bg-primary", "hover:text-white");
            inquireBtn?.classList.remove("border-white/30", "text-white", "hover:bg-white", "hover:text-primary");

            mobileMenuBtn?.classList.add("bg-primary/10", "text-primary");
            mobileMenuBtn?.classList.remove("bg-white/10", "text-white");
        } else {
            // At top: fully transparent
            mainHeader.classList.remove("bg-white", "backdrop-blur-xl", "shadow-md", "border-b", "border-slate-200", "py-3");
            mainHeader.classList.add("bg-transparent", "py-4", "lg:py-8");

            logo?.classList.remove("text-primary");
            logo?.classList.add("text-white", "hover:text-white/80");

            navMenu?.classList.remove("text-secondary");
            navMenu?.classList.add("text-white/80");

            inquireBtn?.classList.remove("border-primary", "text-primary", "hover:bg-primary", "hover:text-white");
            inquireBtn?.classList.add("border-white/30", "text-white", "hover:bg-white", "hover:text-primary");

            mobileMenuBtn?.classList.remove("bg-primary/10", "text-primary");
            mobileMenuBtn?.classList.add("bg-white/10", "text-white");
        }
    });
}

bindEmailForm(contactForm, statusText, EMAILJS_TEMPLATE_ID);

bindEmailForm(sampleForm, sampleStatusText, "template_stjny2d");
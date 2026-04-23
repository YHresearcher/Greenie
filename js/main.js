const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

const translations = {
    en: {
        metaTitle: "Greenie Vietnam - Global Wholesale Export & Private Label",
        metaDescription: "Greenie Vietnam supplies export-ready Vietnamese cashew kernels and artisan cane sugar for global importers, wholesalers, distributors, and private label brands.",
        "nav.products": "Products",
        "nav.about": "About",
        "nav.quality": "Quality",
        "nav.oem": "OEM",
        "nav.samples": "Samples",
        "nav.quote": "Quote",
        "nav.getQuote": "Get Quote",
        "cta.samples": "Request Samples",
        "cta.quote": "Get Wholesale Quote",
        "cta.getQuoteShort": "Get Quote",
        "cta.startOem": "Start OEM",
        "cta.submitOem": "Submit OEM Brief",
        "cta.samplesViaForm": "Request Samples via Quote Form",
        "hero.eyebrow": "Global wholesale export + private label",
        "hero.title": "Export-ready Vietnamese cashew kernels and artisan cane sugar for global buyers.",
        "hero.copy": "Greenie Vietnam supplies importers, wholesalers, distributors, manufacturers, and private label brands worldwide with clear commercial terms, documented quality control, and fast quote-ready support.",
        "hero.cardEyebrow": "Export terms",
        "hero.cardTitle": "MOQ from 1 MT",
        "hero.cardCopy": "FOB/CIF via Saigon Port, with SGS/Eurofins testing available on request.",
        "proof.moqLabel": "MOQ",
        "proof.moq": "1 MT",
        "proof.leadLabel": "Lead time",
        "proof.lead": "7-15 days",
        "proof.complianceLabel": "Compliance",
        "proof.compliance": "HALAL available",
        "proof.testingLabel": "Testing",
        "proof.testing": "SGS/Eurofins",
        "proof.incotermsLabel": "Incoterms",
        "proof.incoterms": "FOB/CIF",
        "proof.portLabel": "Port",
        "proof.port": "Saigon Port",
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
        "cashew.spec1": "W240 / W320 / W450",
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
        "why.eyebrow": "Why Greenie",
        "why.title": "Built for buyers who need clarity before price.",
        "why.copy": "Greenie keeps procurement conversations practical: commercial terms, documents, packaging, testing, and shipping expectations are surfaced before the first quote.",
        "why.card1Title": "Clear terms",
        "why.card1Copy": "MOQ from 1 MT, lead time 7-15 days, FOB/CIF, Saigon Port, T/T and L/C.",
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
        "terms.title": "Quote conversations start with the facts buyers ask for first.",
        "terms.intro": "These are the default commercial terms buyers can expect before requesting a detailed quotation.",
        "terms.card1Label": "MOQ",
        "terms.card1": "From 1 metric ton",
        "terms.card1Note": "Suitable for first wholesale test orders and repeat monthly supply.",
        "terms.card2Label": "Lead time",
        "terms.card2": "7-15 days depending on product and packaging",
        "terms.card2Note": "Standard products move faster; custom private label packs require additional preparation.",
        "terms.card3Label": "Shipping",
        "terms.card3": "FOB or CIF from Saigon Port",
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
        "samples.formTitle": "Sample request brief",
        "samples.formCopy": "Use this form when you only need product samples. The same sales team will handle both sample and wholesale requests.",
        "samples.formTitle": "Sample request brief",
        "samples.formCopy": "Use this form when you only need product samples. The same sales team will handle both sample and wholesale requests.",
        "quote.eyebrow": "Get wholesale quote",
        "quote.title": "Send a quote-ready inquiry.",
        "quote.copy": "Greenie Vietnam replies within 24-48 hours. Include volume, destination, documents, and packaging details so the sales team can respond quickly.",
        "quote.needTitle": "Need in your request",
        "quote.needCopy": "Product, estimated quantity in MT, packaging preference, incoterm, destination, and required documents.",
        "form.company": "Company name *",
        "form.country": "Country *",
        "form.person": "Contact person *",
        "form.role": "Role",
        "form.email": "Email *",
        "form.whatsapp": "WhatsApp / phone",
        "form.website": "Company website / social",
        "form.website": "Company website / social",
        "form.product": "Product interest *",
        "form.selectProduct": "Select product",
        "form.cashew": "Cashew Kernels",
        "form.sugar": "Artisan Cane Sugar",
        "form.both": "Cashew + Cane Sugar",
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
        "ph.whatsapp": "+84 ...",
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
        "footer.sales": "Sales",
        "footer.quickTitle": "Quick Facts",
        "footer.contactTitle": "Contact",
        "footer.fact1": "MOQ from 1 MT",
        "footer.fact2": "Lead time 7-15 days",
        "footer.fact3": "FOB / CIF from Saigon Port",
        "footer.contact1": "Reply within 24-48 hours",
        "footer.contact2": "T/T and L/C available",
        "footer.contact3": "HALAL and testing on request",
        "footer.quickTitle": "Quick Facts",
        "footer.contactTitle": "Contact",
        "footer.fact1": "MOQ from 1 MT",
        "footer.fact2": "Lead time 7-15 days",
        "footer.fact3": "FOB / CIF from Saigon Port",
        "footer.contact1": "Reply within 24-48 hours",
        "footer.contact2": "T/T and L/C available",
        "footer.contact3": "HALAL and testing on request",
        "footer.rights": "© 2026 Greenie Vietnam Agricultural Exports.",
        "status.notConfigured": "EmailJS is not configured yet. Replace the EmailJS keys in js/main.js before going live.",
        "status.sending": "Sending inquiry...",
        "status.sent": "Inquiry sent. Greenie Vietnam will reply within 24-48 hours.",
        "status.failed": "The inquiry could not be sent. Please try again or contact Greenie Vietnam directly."
    },
    zh: {
        metaTitle: "Greenie Vietnam - å…¨çƒæ‰¹å‘å‡ºå£ä¸Žè‡ªæœ‰å“ç‰Œ",
        metaDescription: "Greenie Vietnam ä¸ºå…¨çƒè¿›å£å•†ã€æ‰¹å‘å•†ã€åˆ†é”€å•†å’Œè‡ªæœ‰å“ç‰Œå®¢æˆ·ä¾›åº”å¯å‡ºå£çš„è¶Šå—è…°æžœä»å’Œæ‰‹å·¥ç”˜è”—ç³–ã€‚",
        "nav.products": "äº§å“",
        "nav.about": "å…³äºŽ",
        "nav.quality": "è´¨é‡",
        "nav.oem": "ä»£å·¥",
        "nav.samples": "æ ·å“",
        "nav.quote": "æŠ¥ä»·",
        "nav.getQuote": "èŽ·å–æŠ¥ä»·",
        "cta.samples": "ç´¢å–æ ·å“",
        "cta.quote": "èŽ·å–æ‰¹å‘æŠ¥ä»·",
        "cta.getQuoteShort": "èŽ·å–æŠ¥ä»·",
        "cta.startOem": "å¼€å§‹ä»£å·¥",
        "cta.submitOem": "æäº¤ä»£å·¥éœ€æ±‚",
        "cta.samplesViaForm": "é€šè¿‡æŠ¥ä»·è¡¨ç´¢å–æ ·å“",
        "hero.eyebrow": "å…¨çƒæ‰¹å‘å‡ºå£ + è‡ªæœ‰å“ç‰Œ",
        "hero.title": "é¢å‘å…¨çƒä¹°å®¶çš„è¶Šå—è…°æžœä»ä¸Žæ‰‹å·¥ç”˜è”—ç³–å‡ºå£ä¾›åº”ã€‚",
        "hero.copy": "Greenie Vietnam ä¸ºå…¨çƒè¿›å£å•†ã€æ‰¹å‘å•†ã€åˆ†é”€å•†ã€åˆ¶é€ å•†å’Œè‡ªæœ‰å“ç‰Œå®¢æˆ·æä¾›æ¸…æ™°è´¸æ˜“æ¡æ¬¾ã€è´¨é‡æ–‡ä»¶æ”¯æŒå’Œå¿«é€ŸæŠ¥ä»·æœåŠ¡ã€‚",
        "hero.cardEyebrow": "å‡ºå£æ¡æ¬¾",
        "hero.cardTitle": "MOQ ä»Ž 1 å…¬å¨èµ·",
        "hero.cardCopy": "ä»Žè¥¿è´¡æ¸¯æä¾› FOB/CIFï¼ŒSGS/Eurofins ç¬¬ä¸‰æ–¹æ£€æµ‹å¯æŒ‰éœ€å®‰æŽ’ã€‚",
        "proof.moqLabel": "èµ·è®¢é‡",
        "proof.moq": "1 å…¬å¨",
        "proof.leadLabel": "äº¤æœŸ",
        "proof.lead": "7-15 å¤©",
        "proof.complianceLabel": "åˆè§„",
        "proof.compliance": "å¯æä¾› HALAL",
        "proof.testingLabel": "æ£€æµ‹",
        "proof.testing": "SGS/Eurofins",
        "proof.incotermsLabel": "è´¸æ˜“æœ¯è¯­",
        "proof.incoterms": "FOB/CIF",
        "proof.portLabel": "æ¸¯å£",
        "proof.port": "è¥¿è´¡æ¸¯",
        "proof.paymentLabel": "ä»˜æ¬¾",
        "proof.payment": "T/T ä¸Ž L/C",
        "proof.responseLabel": "å›žå¤",
        "proof.response": "24-48 å°æ—¶",
        "products.eyebrow": "æ ¸å¿ƒäº§å“",
        "products.title": "é€‚åˆæ‰¹å‘ä¸Žè‡ªæœ‰å“ç‰Œçš„ä¼˜è´¨å‡ºå£å“ç±»ã€‚",
        "products.copy": "èšç„¦çš„äº§å“çº¿å¯å¸®åŠ©ä¹°å®¶æ›´å¿«ç´¢å–è§„æ ¼ä¹¦ã€æ ·å“ã€åŒ…è£…æ–¹æ¡ˆå’Œåˆè§„æ–‡ä»¶ã€‚",
        "cashew.origin": "è¶Šå—å¹³ç¦",
        "cashew.title": "è¶Šå—è…°æžœä»",
        "cashew.copy": "ç™½æ•´ç²’è…°æžœä»ï¼Œé€‚åˆæ‰¹å‘å•†ã€åˆ†é”€å•†ã€çƒ˜ç„™å•†ã€é¤é¥®æœåŠ¡ã€é£Ÿå“åˆ¶é€ å•†å’Œè‡ªæœ‰å“ç‰Œå®¢æˆ·ã€‚",
        "cashew.spec1Label": "ç­‰çº§",
        "cashew.spec1": "W240 / W320 / W450",
        "cashew.spec2Label": "åŒ…è£…",
        "cashew.spec2": "æ•£è£…ã€çœŸç©ºã€çº¸ç®±é€‰é¡¹",
        "cashew.spec3Label": "æ–‡ä»¶",
        "cashew.spec3": "è§„æ ¼ä¹¦ï¼ŒCOA æŒ‰éœ€æä¾›",
        "cashew.spec4Label": "è¿‡æ•åŽŸ",
        "cashew.spec4": "æ ‘åšæžœå£°æ˜Ž",
        "sugar.origin": "è¶Šå—å¹¿ä¹‰",
        "sugar.title": "æ‰‹å·¥ç”˜è”—ç³–â€œDuong Phoiâ€",
        "sugar.copy": "ä¼ ç»Ÿè¶Šå—ç”˜è”—ç³–ï¼Œé€‚åˆå…¨çƒé›¶å”®ã€é¤é¥®æœåŠ¡ã€æ‰¹å‘ä¾›åº”å’Œè‡ªæœ‰å“ç‰ŒåŒ…è£…ã€‚",
        "sugar.spec1Label": "å£°æ˜Ž",
        "sugar.spec1": "ä¸æ·»åŠ é˜²è…å‰‚",
        "sugar.spec2Label": "åŒ…è£…",
        "sugar.spec2": "ç½è£…ã€è¢‹è£…ã€çœŸç©ºé€‰é¡¹",
        "sugar.spec3Label": "æ–‡ä»¶",
        "sugar.spec3": "è§„æ ¼ä¹¦ï¼ŒCOA æŒ‰éœ€æä¾›",
        "sugar.spec4Label": "åŽŸäº§åœ°",
        "sugar.spec4": "è¶Šå—åŽŸäº§åœ°",
        "why.eyebrow": "ä¸ºä»€ä¹ˆé€‰æ‹© Greenie",
        "why.title": "ä¸ºéœ€è¦å…ˆç¡®è®¤å…³é”®ä¿¡æ¯çš„ä¹°å®¶è€Œè®¾è®¡ã€‚",
        "why.copy": "Greenie è®©é‡‡è´­æ²Ÿé€šæ›´åŠ¡å®žï¼šåœ¨æŠ¥ä»·å‰å…ˆæ˜Žç¡®è´¸æ˜“æ¡æ¬¾ã€æ–‡ä»¶ã€åŒ…è£…ã€æ£€æµ‹å’Œè¿è¾“é¢„æœŸã€‚",
        "why.card1Title": "æ¡æ¬¾æ¸…æ™°",
        "why.card1Copy": "MOQ ä»Ž 1 å…¬å¨èµ·ï¼Œäº¤æœŸ 7-15 å¤©ï¼ŒFOB/CIFï¼Œè¥¿è´¡æ¸¯ï¼Œæ”¯æŒ T/T å’Œ L/Cã€‚",
        "why.card2Title": "åˆè§„å‡†å¤‡",
        "why.card2Copy": "å¯æä¾› HALAL è¯ä¹¦ï¼ŒSGS/Eurofins ç¬¬ä¸‰æ–¹æ£€æµ‹å¯æŒ‰éœ€å®‰æŽ’ã€‚",
        "why.card3Title": "ä¾›åº”çµæ´»",
        "why.card3Copy": "æ”¯æŒæ‰¹å‘å‡ºå£ã€æ•£è£…åŒ…è£…å’Œä¹°å®¶å“ç‰Œè‡ªæœ‰å“ç‰Œæ–¹æ¡ˆã€‚",
        "why.card4Title": "å…¨çƒå‡ºå£æ”¯æŒ",
        "why.card4Copy": "æ–‡ä»¶å’Œè¿è¾“æ²Ÿé€šå¯é€‚é…äºšæ´²ã€ä¸­å›½ã€å—äºšã€æ¬§æ´²ã€åŒ—ç¾ŽåŠå…¶ä»–å¸‚åœºã€‚",
        "about.eyebrow": "å…³äºŽ Greenie",
        "about.title": "æºäºŽå¯¹æ¨¡ç³Šé£Ÿå“æ‰¿è¯ºçš„æ‹’ç»ã€‚",
        "about.copy1": "Greenie çš„èµ·ç‚¹æ¥è‡ªçœŸå®žçš„å·¥åŽ‚èµ°è®¿ã€‚æˆ‘ä»¬çœ‹åˆ°ä¸€ä¸ªè‰°éš¾äº‹å®žï¼šå¤ªå¤šé£Ÿå“å“ç‰Œç”¨æ¼‚äº®è¯æ±‡åŒ…è£…è‡ªå·±ï¼Œå´æŠŠä¸æ¸…æ™°çš„æµç¨‹è—åœ¨æ ‡ç­¾èƒŒåŽã€‚",
        "about.copy2": "ä¸Žæ­¤åŒæ—¶ï¼Œè¶Šå—å†œäº§å“ä»å¸¸ä»¥ä½Žä»·å€¼åŽŸæ–™å½¢å¼å‡ºå”®ï¼Œè€Œå…¶ä»–å¸‚åœºé€šè¿‡æ·±åŠ å·¥èŽ·å–æ›´é«˜ä»·å€¼ã€‚Greenie å¸Œæœ›ç”¨é€æ˜Žã€æ–‡ä»¶åŒ–å’Œä¸¥æ ¼ç­›é€‰æ”¹å˜è¿™æ¡è·¯å¾„ã€‚",
        "about.quote": "æˆ‘ä»¬ä¸åªæ˜¯é‡‡è´­äº§å“ã€‚æˆ‘ä»¬ç­›é€‰çš„æ˜¯è¯šä¿¡ã€‚",
        "about.standardLabel": "Greenie æ ‡å‡†",
        "about.standardTitle": "90% æœ¬åœ°ç²¾åŽã€‚10% å›½é™…æ ‡å‡†è¿‡æ»¤ã€‚",
        "about.principle1Title": "é€æ˜Žèƒœè¿‡å£å·",
        "about.principle1Copy": "æ¯ä¸€é¡¹å£°æ˜Žéƒ½åº”ç”±æ–‡ä»¶ã€æµç¨‹æ£€æŸ¥æˆ–ä¾›åº”å•†è¯æ®æ”¯æŒã€‚",
        "about.principle2Title": "ç‹¬ç«‹éªŒè¯",
        "about.principle2Copy": "æˆ‘ä»¬ä¼˜å…ˆé€‰æ‹©åˆæ ¼ç”Ÿäº§ä¼™ä¼´ï¼Œå¹¶åœ¨ä¹°å®¶éœ€è¦æ—¶å®‰æŽ’ç¬¬ä¸‰æ–¹æ£€æµ‹ã€‚",
        "about.principle3Title": "ä¸ä»¥ Greenie ä¹‹åå¦¥å",
        "about.principle3Copy": "å¦‚æžœä¸€ä¸ªæ‰¹æ¬¡æ— æ³•é€šè¿‡ Greenie çš„æ£€æŸ¥ï¼Œå®ƒå°±ä¸åº”å‡ºçŽ°åœ¨ Greenie åä¸‹ã€‚",
        "quality.eyebrow": "è´¨é‡ä¸Žåˆè§„",
        "quality.title": "ç¼©çŸ­é”€å”®å‘¨æœŸçš„ä¹°å®¶èµ„æ–™åŒ…ã€‚",
        "quality.copy": "æœ€ç»ˆå‡ºå£èµ„æ–™ä»…åº”ä½¿ç”¨å¯è¢«æ–‡ä»¶è¯æ˜Žçš„å£°æ˜Žã€‚è¯ä¹¦å’Œæ£€æµ‹æŠ¥å‘Šåœ¨æœªå…¬å¼€å‰å‡ä»¥æŒ‰éœ€æä¾›çš„æ–¹å¼å‘ˆçŽ°ã€‚",
        "quality.doc1": "äº§å“è§„æ ¼ä¹¦",
        "quality.doc2": "COA åŠ SGS/Eurofins æ£€æµ‹æŒ‰éœ€æä¾›",
        "quality.doc3": "åŽŸäº§åœ°æ–‡ä»¶",
        "quality.doc4": "å¯æä¾› HALAL è¯ä¹¦",
        "quality.doc5": "ä¿è´¨æœŸä¸Žå‚¨å­˜è¯´æ˜Ž",
        "terms.eyebrow": "å•†ä¸šæ¡æ¬¾",
        "terms.title": "æŠ¥ä»·æ²Ÿé€šä»Žä¹°å®¶æœ€å…³å¿ƒçš„äº‹å®žå¼€å§‹ã€‚",
        "terms.intro": "ä»¥ä¸‹æ˜¯ä¹°å®¶åœ¨ç´¢å–è¯¦ç»†æŠ¥ä»·å‰å¯é¢„æœŸçš„åŸºç¡€å•†ä¸šæ¡æ¬¾ã€‚",
        "terms.card1Label": "èµ·è®¢é‡",
        "terms.card1": "ä»Ž 1 å…¬å¨èµ·",
        "terms.card1Note": "é€‚ç”¨äºŽé¦–æ¬¡è¯•å•åŠåŽç»­æœˆåº¦ç¨³å®šè¡¥è´§ã€‚",
        "terms.card2Label": "äº¤æœŸ",
        "terms.card2": "æ ¹æ®äº§å“å’ŒåŒ…è£…çº¦ 7-15 å¤©",
        "terms.card2Note": "æ ‡å‡†äº§å“äº¤ä»˜æ›´å¿«ï¼›å®šåˆ¶è‡ªæœ‰å“ç‰ŒåŒ…è£…éœ€é¢å¤–å‡†å¤‡æ—¶é—´ã€‚",
        "terms.card3Label": "è¿è¾“",
        "terms.card3": "è¥¿è´¡æ¸¯ FOB æˆ– CIF",
        "terms.card3Note": "ä¹°å®¶å¯æŒ‰è‡ªèº«éœ€æ±‚é€‰æ‹©è¿è¾“è´£ä»»åˆ’åˆ†ä¸Žç›®çš„åœ°æ”¯æŒçº§åˆ«ã€‚",
        "terms.card4Label": "ä»˜æ¬¾",
        "terms.card4": "æŒ‰ä¹°å®¶éœ€æ±‚æ”¯æŒ T/T å’Œ L/C",
        "terms.card4Note": "ä»˜æ¬¾æ–¹å¼å¯æŒ‰è´µå¸é‡‡è´­æ”¿ç­–ä¸Žé£ŽæŽ§æµç¨‹è¿›è¡ŒåŒ¹é…ã€‚",
        "oem.eyebrow": "OEM / è‡ªæœ‰å“ç‰Œ",
        "oem.title": "é¢å‘ç›®æ ‡å¸‚åœºçš„è‡ªæœ‰å“ç‰ŒåŒ…è£…ã€‚",
        "oem.copy": "Greenie æ”¯æŒä¹°å®¶å“ç‰ŒåŒ…è£…éœ€æ±‚ï¼ŒåŒ…æ‹¬ç½è£…ã€ç‰›çš®çº¸è¢‹ã€çœŸç©ºåŒ…è£…ã€æ ‡ç­¾è¯­è¨€å’Œå‡ºå£æ–‡ä»¶ã€‚",
        "oem.step1Title": "éœ€æ±‚ç®€æŠ¥",
        "oem.step1Copy": "äº§å“ã€ç›®æ ‡å¸‚åœºã€åŒ…è£…å½¢å¼ã€åŒ…è£…è§„æ ¼ã€æ–‡ä»¶å’Œé¢„è®¡æ•°é‡ã€‚",
        "oem.step2Title": "åŒ…è£…ç¡®è®¤",
        "oem.step2Copy": "ä¹°å®¶å“ç‰Œã€æ ‡ç­¾è¯­è¨€ã€çº¸ç®±æˆ–è¢‹åž‹ä»¥åŠåˆè§„è¦æ±‚ã€‚",
        "oem.step3Title": "æ ·å“ç¡®è®¤",
        "oem.step3Copy": "å¦‚ä¹°å®¶éœ€è¦è¯„ä¼°ï¼Œå¯åœ¨ç”Ÿäº§å‰å®‰æŽ’æ ·å“ã€‚",
        "oem.step4Title": "ç”Ÿäº§",
        "oem.step4Copy": "äº¤æœŸå–å†³äºŽäº§å“ã€åº“å­˜çŠ¶æ€å’ŒåŒ…è£…å¤æ‚åº¦ã€‚",
        "oem.step5Title": "æ£€éªŒä¸Žå‘è¿",
        "oem.step5Copy": "å¯é€‰ç¬¬ä¸‰æ–¹æ£€æµ‹ã€æœ€ç»ˆæ–‡ä»¶å’Œ FOB/CIF å‘è¿æ”¯æŒã€‚",
        "samples.eyebrow": "ç´¢å–æ ·å“",
        "samples.title": "åœ¨æ‰¹é‡è®¢å•å‰è¯„ä¼°äº§å“è´¨é‡ã€‚",
        "samples.copy": "å¯ç´¢å–è…°æžœä»ã€æ‰‹å·¥ç”˜è”—ç³–æˆ–æ··åˆæ ·å“åŒ…ã€‚å¯åœ¨æœ‰æ–‡ä»¶æ—¶éšé™„æŠ€æœ¯èµ„æ–™ã€‚",
        "samples.badge1": "å¯å¿«é€’æ ·å“",
        "samples.badge2": "COA æŒ‰éœ€æä¾›",
        "samples.badge3": "æ”¯æŒä¹°å®¶è¯„ä¼°",
        "quote.eyebrow": "èŽ·å–æ‰¹å‘æŠ¥ä»·",
        "quote.title": "æäº¤å¯å¿«é€ŸæŠ¥ä»·çš„è¯¢ç›˜ã€‚",
        "quote.copy": "Greenie Vietnam å°†åœ¨ 24-48 å°æ—¶å†…å›žå¤ã€‚è¯·æä¾›æ•°é‡ã€ç›®çš„åœ°ã€æ–‡ä»¶å’ŒåŒ…è£…éœ€æ±‚ï¼Œä»¥ä¾¿é”€å”®å›¢é˜Ÿå¿«é€Ÿå“åº”ã€‚",
        "quote.needTitle": "è¯¢ç›˜å»ºè®®åŒ…å«",
        "quote.needCopy": "äº§å“ã€é¢„è®¡æ•°é‡ï¼ˆå…¬å¨ï¼‰ã€åŒ…è£…åå¥½ã€è´¸æ˜“æœ¯è¯­ã€ç›®çš„åœ°å’Œæ‰€éœ€æ–‡ä»¶ã€‚",
        "form.company": "å…¬å¸åç§° *",
        "form.country": "å›½å®¶/åœ°åŒº *",
        "form.person": "è”ç³»äºº *",
        "form.role": "èŒä½",
        "form.email": "é‚®ç®± *",
        "form.whatsapp": "WhatsApp / ç”µè¯",
        "form.product": "æ„å‘äº§å“ *",
        "form.selectProduct": "é€‰æ‹©äº§å“",
        "form.cashew": "è…°æžœä»",
        "form.sugar": "æ‰‹å·¥ç”˜è”—ç³–",
        "form.both": "è…°æžœ + ç”˜è”—ç³–",
        "form.oem": "OEM / è‡ªæœ‰å“ç‰Œ",
        "form.quantity": "é¢„è®¡æ•°é‡ï¼ˆå…¬å¨ï¼‰*",
        "form.packaging": "åŒ…è£…åå¥½",
        "form.incoterms": "è´¸æ˜“æœ¯è¯­",
        "form.notSure": "æš‚ä¸ç¡®å®š",
        "form.destination": "ç›®çš„åœ°",
        "form.notes": "æ‰€éœ€æ–‡ä»¶æˆ–å¤‡æ³¨",
        "form.submit": "æäº¤è¯¢ç›˜",
        "ph.company": "Company Ltd.",
        "ph.country": "China",
        "ph.person": "Full name",
        "ph.role": "Purchasing manager",
        "ph.email": "name@company.com",
        "ph.whatsapp": "+86 ...",
        "ph.website": "https://...",
        "ph.packaging": "散装、罐装、袋装、真空包装",
        "ph.samplePack": "250g, 500g, 试样装",
        "ph.sampleQty": "1-2 套",
        "ph.destination": "目的港 / 城市",
        "ph.sampleNotes": "样品用途、目标市场、文件需求...",
        "ph.packaging": "æ•£è£…ã€ç½è£…ã€è¢‹è£…ã€çœŸç©ºåŒ…è£…",
        "ph.destination": "ç›®çš„æ¸¯ / åŸŽå¸‚",
        "ph.notes": "HALALã€SGS/Eurofinsã€COAã€åŒ…è£…è¯­è¨€ã€ç›®æ ‡å¸‚åœº...",
        "footer.copy": "é¢å‘å…¨çƒæ‰¹å‘ä¹°å®¶å’Œè‡ªæœ‰å“ç‰Œå®¢æˆ·çš„å¯å‡ºå£è¶Šå—å†œäº§å“ã€‚",
        "footer.products": "äº§å“",
        "footer.cashew": "è…°æžœä»",
        "footer.sugar": "æ‰‹å·¥ç”˜è”—ç³–",
        "footer.sales": "é”€å”®",
        "footer.rights": "© 2026 Greenie Vietnam Agricultural Exports.",
        "status.notConfigured": "EmailJS å°šæœªé…ç½®ã€‚ä¸Šçº¿å‰è¯·æ›¿æ¢ js/main.js ä¸­çš„ EmailJS å¯†é’¥ã€‚",
        "status.sending": "æ­£åœ¨å‘é€è¯¢ç›˜...",
        "status.sent": "è¯¢ç›˜å·²å‘é€ã€‚Greenie Vietnam å°†åœ¨ 24-48 å°æ—¶å†…å›žå¤ã€‚",
        "status.failed": "è¯¢ç›˜å‘é€å¤±è´¥ã€‚è¯·é‡è¯•æˆ–ç›´æŽ¥è”ç³» Greenie Vietnamã€‚"
    },
    hi: {
        metaTitle: "Greenie Vietnam - à¤µà¥ˆà¤¶à¥à¤µà¤¿à¤• à¤¥à¥‹à¤• à¤¨à¤¿à¤°à¥à¤¯à¤¾à¤¤ à¤”à¤° à¤ªà¥à¤°à¤¾à¤‡à¤µà¥‡à¤Ÿ à¤²à¥‡à¤¬à¤²",
        metaDescription: "Greenie Vietnam à¤µà¥ˆà¤¶à¥à¤µà¤¿à¤• à¤†à¤¯à¤¾à¤¤à¤•à¥‹à¤‚, à¤¥à¥‹à¤• à¤–à¤°à¥€à¤¦à¤¾à¤°à¥‹à¤‚, à¤µà¤¿à¤¤à¤°à¤•à¥‹à¤‚ à¤”à¤° à¤ªà¥à¤°à¤¾à¤‡à¤µà¥‡à¤Ÿ à¤²à¥‡à¤¬à¤² à¤¬à¥à¤°à¤¾à¤‚à¤¡à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤¨à¤¿à¤°à¥à¤¯à¤¾à¤¤-à¤¤à¥ˆà¤¯à¤¾à¤° à¤µà¤¿à¤¯à¤¤à¤¨à¤¾à¤®à¥€ à¤•à¤¾à¤œà¥‚ à¤”à¤° à¤¹à¤¸à¥à¤¤à¤¨à¤¿à¤°à¥à¤®à¤¿à¤¤ à¤—à¤¨à¥à¤¨à¤¾ à¤šà¥€à¤¨à¥€ à¤¸à¤ªà¥à¤²à¤¾à¤ˆ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ.",
        "nav.products": "à¤‰à¤¤à¥à¤ªà¤¾à¤¦",
        "nav.about": "About",
        "nav.quality": "à¤—à¥à¤£à¤µà¤¤à¥à¤¤à¤¾",
        "nav.oem": "OEM",
        "nav.samples": "à¤¨à¤®à¥‚à¤¨à¥‡",
        "nav.quote": "à¤•à¥‹à¤Ÿ",
        "nav.getQuote": "à¤•à¥‹à¤Ÿ à¤²à¥‡à¤‚",
        "cta.samples": "à¤¨à¤®à¥‚à¤¨à¥‡ à¤®à¤¾à¤‚à¤—à¥‡à¤‚",
        "cta.quote": "à¤¥à¥‹à¤• à¤•à¥‹à¤Ÿ à¤²à¥‡à¤‚",
        "cta.getQuoteShort": "à¤•à¥‹à¤Ÿ à¤²à¥‡à¤‚",
        "cta.startOem": "OEM à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚",
        "cta.submitOem": "OEM à¤¬à¥à¤°à¥€à¤« à¤­à¥‡à¤œà¥‡à¤‚",
        "cta.samplesViaForm": "à¤•à¥‹à¤Ÿ à¤«à¥‰à¤°à¥à¤® à¤¸à¥‡ à¤¨à¤®à¥‚à¤¨à¥‡ à¤®à¤¾à¤‚à¤—à¥‡à¤‚",
        "hero.eyebrow": "à¤µà¥ˆà¤¶à¥à¤µà¤¿à¤• à¤¥à¥‹à¤• à¤¨à¤¿à¤°à¥à¤¯à¤¾à¤¤ + à¤ªà¥à¤°à¤¾à¤‡à¤µà¥‡à¤Ÿ à¤²à¥‡à¤¬à¤²",
        "hero.title": "à¤µà¥ˆà¤¶à¥à¤µà¤¿à¤• à¤–à¤°à¥€à¤¦à¤¾à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤¨à¤¿à¤°à¥à¤¯à¤¾à¤¤-à¤¤à¥ˆà¤¯à¤¾à¤° à¤µà¤¿à¤¯à¤¤à¤¨à¤¾à¤®à¥€ à¤•à¤¾à¤œà¥‚ à¤”à¤° à¤¹à¤¸à¥à¤¤à¤¨à¤¿à¤°à¥à¤®à¤¿à¤¤ à¤—à¤¨à¥à¤¨à¤¾ à¤šà¥€à¤¨à¥€.",
        "hero.copy": "Greenie Vietnam à¤¦à¥à¤¨à¤¿à¤¯à¤¾ à¤­à¤° à¤•à¥‡ à¤†à¤¯à¤¾à¤¤à¤•à¥‹à¤‚, à¤¥à¥‹à¤• à¤–à¤°à¥€à¤¦à¤¾à¤°à¥‹à¤‚, à¤µà¤¿à¤¤à¤°à¤•à¥‹à¤‚, à¤¨à¤¿à¤°à¥à¤®à¤¾à¤¤à¤¾à¤“à¤‚ à¤”à¤° à¤ªà¥à¤°à¤¾à¤‡à¤µà¥‡à¤Ÿ à¤²à¥‡à¤¬à¤² à¤¬à¥à¤°à¤¾à¤‚à¤¡à¥‹à¤‚ à¤•à¥‹ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤° à¤¶à¤°à¥à¤¤à¥‡à¤‚, à¤—à¥à¤£à¤µà¤¤à¥à¤¤à¤¾ à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ à¤”à¤° à¤¤à¥‡à¤œ à¤•à¥‹à¤Ÿ à¤¸à¤ªà¥‹à¤°à¥à¤Ÿ à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆ.",
        "hero.cardEyebrow": "à¤¨à¤¿à¤°à¥à¤¯à¤¾à¤¤ à¤¶à¤°à¥à¤¤à¥‡à¤‚",
        "hero.cardTitle": "MOQ 1 MT à¤¸à¥‡",
        "hero.cardCopy": "Saigon Port à¤¸à¥‡ FOB/CIF, à¤”à¤° SGS/Eurofins à¤Ÿà¥‡à¤¸à¥à¤Ÿà¤¿à¤‚à¤— à¤…à¤¨à¥à¤°à¥‹à¤§ à¤ªà¤° à¤‰à¤ªà¤²à¤¬à¥à¤§.",
        "proof.moqLabel": "MOQ",
        "proof.moq": "1 MT",
        "proof.leadLabel": "à¤²à¥€à¤¡ à¤Ÿà¤¾à¤‡à¤®",
        "proof.lead": "7-15 à¤¦à¤¿à¤¨",
        "proof.complianceLabel": "à¤•à¤®à¥à¤ªà¥à¤²à¤¾à¤¯à¤‚à¤¸",
        "proof.compliance": "HALAL à¤‰à¤ªà¤²à¤¬à¥à¤§",
        "proof.testingLabel": "à¤Ÿà¥‡à¤¸à¥à¤Ÿà¤¿à¤‚à¤—",
        "proof.testing": "SGS/Eurofins",
        "proof.incotermsLabel": "Incoterms",
        "proof.incoterms": "FOB/CIF",
        "proof.portLabel": "à¤ªà¥‹à¤°à¥à¤Ÿ",
        "proof.port": "Saigon Port",
        "proof.paymentLabel": "à¤­à¥à¤—à¤¤à¤¾à¤¨",
        "proof.payment": "T/T à¤”à¤° L/C",
        "proof.responseLabel": "à¤œà¤µà¤¾à¤¬",
        "proof.response": "24-48 à¤˜à¤‚à¤Ÿà¥‡",
        "products.eyebrow": "à¤®à¥à¤–à¥à¤¯ à¤‰à¤¤à¥à¤ªà¤¾à¤¦",
        "products.title": "à¤¥à¥‹à¤• à¤”à¤° à¤ªà¥à¤°à¤¾à¤‡à¤µà¥‡à¤Ÿ à¤²à¥‡à¤¬à¤² à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¥€à¤®à¤¿à¤¯à¤® à¤¨à¤¿à¤°à¥à¤¯à¤¾à¤¤ à¤•à¥ˆà¤Ÿà¥‡à¤—à¤°à¥€.",
        "products.copy": "à¤«à¥‹à¤•à¤¸à¥à¤¡ à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤²à¤¾à¤‡à¤¨ à¤–à¤°à¥€à¤¦à¤¾à¤°à¥‹à¤‚ à¤•à¥‹ à¤¸à¤¹à¥€ à¤¸à¥à¤ªà¥‡à¤¸à¤¿à¤«à¤¿à¤•à¥‡à¤¶à¤¨ à¤¶à¥€à¤Ÿ, à¤¨à¤®à¥‚à¤¨à¥‡, à¤ªà¥ˆà¤•à¥‡à¤œà¤¿à¤‚à¤— à¤µà¤¿à¤•à¤²à¥à¤ª à¤”à¤° à¤•à¤®à¥à¤ªà¥à¤²à¤¾à¤¯à¤‚à¤¸ à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ à¤œà¤²à¥à¤¦à¥€ à¤®à¤¾à¤‚à¤—à¤¨à¥‡ à¤®à¥‡à¤‚ à¤®à¤¦à¤¦ à¤•à¤°à¤¤à¥€ à¤¹à¥ˆ.",
        "cashew.origin": "Binh Phuoc, Vietnam",
        "cashew.title": "à¤µà¤¿à¤¯à¤¤à¤¨à¤¾à¤®à¥€ à¤•à¤¾à¤œà¥‚ kernels",
        "cashew.copy": "à¤µà¥à¤¹à¤¾à¤‡à¤Ÿ à¤¹à¥‹à¤² à¤•à¤¾à¤œà¥‚ kernels à¤¥à¥‹à¤• à¤–à¤°à¥€à¤¦à¤¾à¤°à¥‹à¤‚, à¤µà¤¿à¤¤à¤°à¤•à¥‹à¤‚, à¤°à¥‹à¤¸à¥à¤Ÿà¤°à¥‹à¤‚, à¤«à¥‚à¤¡ à¤¸à¤°à¥à¤µà¤¿à¤¸, à¤¨à¤¿à¤°à¥à¤®à¤¾à¤¤à¤¾à¤“à¤‚ à¤”à¤° à¤ªà¥à¤°à¤¾à¤‡à¤µà¥‡à¤Ÿ à¤²à¥‡à¤¬à¤² à¤¬à¥à¤°à¤¾à¤‚à¤¡à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤.",
        "cashew.spec1Label": "à¤—à¥à¤°à¥‡à¤¡",
        "cashew.spec1": "W240 / W320 / W450",
        "cashew.spec2Label": "à¤ªà¥ˆà¤•à¥‡à¤œà¤¿à¤‚à¤—",
        "cashew.spec2": "Bulk, vacuum, carton options",
        "cashew.spec3Label": "à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ",
        "cashew.spec3": "Spec sheet, COA à¤…à¤¨à¥à¤°à¥‹à¤§ à¤ªà¤°",
        "cashew.spec4Label": "à¤à¤²à¤°à¥à¤œà¤¨",
        "cashew.spec4": "Tree nut statement",
        "sugar.origin": "Quang Ngai, Vietnam",
        "sugar.title": "à¤¹à¤¸à¥à¤¤à¤¨à¤¿à¤°à¥à¤®à¤¿à¤¤ à¤—à¤¨à¥à¤¨à¤¾ à¤šà¥€à¤¨à¥€ \"Duong Phoi\"",
        "sugar.copy": "à¤µà¥ˆà¤¶à¥à¤µà¤¿à¤• à¤°à¤¿à¤Ÿà¥‡à¤², à¤«à¥‚à¤¡ à¤¸à¤°à¥à¤µà¤¿à¤¸, à¤¥à¥‹à¤• à¤¸à¤ªà¥à¤²à¤¾à¤ˆ à¤”à¤° à¤ªà¥à¤°à¤¾à¤‡à¤µà¥‡à¤Ÿ à¤²à¥‡à¤¬à¤² à¤ªà¥ˆà¤•à¥‡à¤œà¤¿à¤‚à¤— à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¤¾à¤°à¤‚à¤ªà¤°à¤¿à¤• à¤µà¤¿à¤¯à¤¤à¤¨à¤¾à¤®à¥€ à¤—à¤¨à¥à¤¨à¤¾ à¤šà¥€à¤¨à¥€.",
        "sugar.spec1Label": "à¤¸à¥à¤Ÿà¥‡à¤Ÿà¤®à¥‡à¤‚à¤Ÿ",
        "sugar.spec1": "à¤•à¥‹à¤ˆ preservatives à¤¨à¤¹à¥€à¤‚",
        "sugar.spec2Label": "à¤ªà¥ˆà¤•à¥‡à¤œà¤¿à¤‚à¤—",
        "sugar.spec2": "Jar, pouch, vacuum options",
        "sugar.spec3Label": "à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ",
        "sugar.spec3": "Spec sheet, COA à¤…à¤¨à¥à¤°à¥‹à¤§ à¤ªà¤°",
        "sugar.spec4Label": "Origin",
        "sugar.spec4": "Vietnam country of origin",
        "why.eyebrow": "Greenie à¤•à¥à¤¯à¥‹à¤‚",
        "why.title": "à¤‰à¤¨ à¤–à¤°à¥€à¤¦à¤¾à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤œà¥‹ à¤•à¥€à¤®à¤¤ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¸à¥à¤ªà¤·à¥à¤Ÿà¤¤à¤¾ à¤šà¤¾à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚.",
        "why.copy": "Greenie à¤–à¤°à¥€à¤¦ à¤¬à¤¾à¤¤à¤šà¥€à¤¤ à¤•à¥‹ à¤µà¥à¤¯à¤¾à¤µà¤¹à¤¾à¤°à¤¿à¤• à¤°à¤–à¤¤à¤¾ à¤¹à¥ˆ: à¤ªà¤¹à¤²à¥€ à¤•à¥‹à¤Ÿ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤° à¤¶à¤°à¥à¤¤à¥‡à¤‚, à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ, à¤ªà¥ˆà¤•à¥‡à¤œà¤¿à¤‚à¤—, à¤Ÿà¥‡à¤¸à¥à¤Ÿà¤¿à¤‚à¤— à¤”à¤° à¤¶à¤¿à¤ªà¤¿à¤‚à¤— à¤…à¤ªà¥‡à¤•à¥à¤·à¤¾à¤à¤‚ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤•à¥€ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆà¤‚.",
        "why.card1Title": "à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤¶à¤°à¥à¤¤à¥‡à¤‚",
        "why.card1Copy": "MOQ 1 MT à¤¸à¥‡, lead time 7-15 à¤¦à¤¿à¤¨, FOB/CIF, Saigon Port, T/T à¤”à¤° L/C.",
        "why.card2Title": "à¤•à¤®à¥à¤ªà¥à¤²à¤¾à¤¯à¤‚à¤¸-ready",
        "why.card2Copy": "HALAL certificate à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤”à¤° SGS/Eurofins third-party testing à¤…à¤¨à¥à¤°à¥‹à¤§ à¤ªà¤° à¤‰à¤ªà¤²à¤¬à¥à¤§.",
        "why.card3Title": "à¤²à¤šà¥€à¤²à¥€ à¤¸à¤ªà¥à¤²à¤¾à¤ˆ",
        "why.card3Copy": "Wholesale export, bulk packaging à¤”à¤° buyer brands à¤•à¥‡ à¤²à¤¿à¤ private label options.",
        "why.card4Title": "à¤µà¥ˆà¤¶à¥à¤µà¤¿à¤• à¤¨à¤¿à¤°à¥à¤¯à¤¾à¤¤ à¤¸à¤ªà¥‹à¤°à¥à¤Ÿ",
        "why.card4Copy": "à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ à¤”à¤° à¤¶à¤¿à¤ªà¤¿à¤‚à¤— à¤šà¤°à¥à¤šà¤¾ Asia, China, South Asia, Europe, North America à¤”à¤° à¤…à¤¨à¥à¤¯ à¤¬à¤¾à¤œà¤¾à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤¨à¥à¤•à¥‚à¤² à¤•à¥€ à¤œà¤¾ à¤¸à¤•à¤¤à¥€ à¤¹à¥ˆ.",
        "about.eyebrow": "Greenie à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚",
        "about.title": "à¤…à¤¸à¥à¤ªà¤·à¥à¤Ÿ food promises à¤•à¥‹ à¤¸à¥à¤µà¥€à¤•à¤¾à¤° à¤¨ à¤•à¤°à¤¨à¥‡ à¤¸à¥‡ Greenie à¤•à¥€ à¤¶à¥à¤°à¥à¤†à¤¤ à¤¹à¥à¤ˆ.",
        "about.copy1": "Greenie à¤•à¥€ à¤¶à¥à¤°à¥à¤†à¤¤ real factory visits à¤•à¥‡ à¤¬à¤¾à¤¦ à¤¹à¥à¤ˆ, à¤œà¤¹à¤¾à¤‚ à¤à¤• à¤•à¤ à¤¿à¤¨ à¤¸à¤šà¥à¤šà¤¾à¤ˆ à¤¦à¤¿à¤–à¥€: à¤•à¤ˆ food brands à¤¸à¥à¤‚à¤¦à¤° à¤¶à¤¬à¥à¤¦à¥‹à¤‚ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤²à¥‡à¤•à¤¿à¤¨ label à¤•à¥‡ à¤ªà¥€à¤›à¥‡ unclear processes à¤›à¤¿à¤ªà¥‡ à¤°à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚.",
        "about.copy2": "à¤¸à¤¾à¤¥ à¤¹à¥€, Vietnamese agricultural products à¤…à¤¬ à¤­à¥€ low-value raw materials à¤•à¥€ à¤¤à¤°à¤¹ à¤¬à¥‡à¤šà¥‡ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤œà¤¬à¤•à¤¿ à¤¦à¥‚à¤¸à¤°à¥‡ markets à¤‰à¤¨à¥à¤¹à¥‡à¤‚ deeper process à¤•à¤°à¤•à¥‡ à¤œà¥à¤¯à¤¾à¤¦à¤¾ value capture à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚. Greenie transparency, documentation à¤”à¤° disciplined selection à¤¸à¥‡ à¤‡à¤¸ à¤°à¤¾à¤¸à¥à¤¤à¥‡ à¤•à¥‹ à¤¬à¤¦à¤²à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¤¾ à¤¹à¥ˆ.",
        "about.quote": "à¤¹à¤® à¤¸à¤¿à¤°à¥à¤« products à¤¨à¤¹à¥€à¤‚ à¤–à¤°à¥€à¤¦à¤¤à¥‡. à¤¹à¤® integrity à¤šà¥à¤¨à¤¤à¥‡ à¤¹à¥ˆà¤‚.",
        "about.standardLabel": "The Greenie Standard",
        "about.standardTitle": "90% local essence. 10% global filter.",
        "about.principle1Title": "Slogans à¤¸à¥‡ à¤œà¥à¤¯à¤¾à¤¦à¤¾ transparency",
        "about.principle1Copy": "à¤¹à¤° claim à¤•à¥‹ documents, process checks à¤¯à¤¾ supplier evidence à¤¸à¥‡ support à¤¹à¥‹à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤.",
        "about.principle2Title": "Independent verification",
        "about.principle2Copy": "à¤¹à¤® qualified production partners à¤•à¥‹ à¤ªà¥à¤°à¤¾à¤¥à¤®à¤¿à¤•à¤¤à¤¾ à¤¦à¥‡à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤”à¤° buyer à¤•à¥€ à¤œà¤°à¥‚à¤°à¤¤ à¤ªà¤° third-party testing arrange à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚.",
        "about.principle3Title": "Greenie à¤¨à¤¾à¤® à¤•à¥‡ à¤¤à¤¹à¤¤ à¤•à¥‹à¤ˆ compromise à¤¨à¤¹à¥€à¤‚",
        "about.principle3Copy": "à¤¯à¤¦à¤¿ à¤•à¥‹à¤ˆ batch Greenie checks à¤ªà¤¾à¤¸ à¤¨à¤¹à¥€à¤‚ à¤•à¤° à¤¸à¤•à¤¤à¤¾, à¤¤à¥‹ à¤µà¤¹ Greenie à¤¨à¤¾à¤® à¤¸à¥‡ à¤¨à¤¹à¥€à¤‚ à¤†à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤.",
        "quality.eyebrow": "à¤—à¥à¤£à¤µà¤¤à¥à¤¤à¤¾ à¤”à¤° à¤•à¤®à¥à¤ªà¥à¤²à¤¾à¤¯à¤‚à¤¸",
        "quality.title": "Buyer pack à¤œà¥‹ sales cycle à¤•à¥‹ à¤›à¥‹à¤Ÿà¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ.",
        "quality.copy": "à¤…à¤‚à¤¤à¤¿à¤® à¤¨à¤¿à¤°à¥à¤¯à¤¾à¤¤ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤®à¥‡à¤‚ à¤•à¥‡à¤µà¤² à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ-à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤¦à¤¾à¤µà¥‡ à¤‰à¤ªà¤¯à¥‹à¤— à¤¹à¥‹à¤¨à¥‡ à¤šà¤¾à¤¹à¤¿à¤. Certificate à¤”à¤° test reports ready à¤¹à¥‹à¤¨à¥‡ à¤¤à¤• à¤…à¤¨à¥à¤°à¥‹à¤§ à¤ªà¤° à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤•à¥‡ à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤°à¤–à¥‡ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚.",
        "quality.doc1": "Product specification sheets",
        "quality.doc2": "COA à¤”à¤° SGS/Eurofins testing à¤…à¤¨à¥à¤°à¥‹à¤§ à¤ªà¤°",
        "quality.doc3": "Country of Origin documentation",
        "quality.doc4": "HALAL certificate à¤‰à¤ªà¤²à¤¬à¥à¤§",
        "quality.doc5": "Shelf life à¤”à¤° storage statements",
        "terms.eyebrow": "à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤° à¤¶à¤°à¥à¤¤à¥‡à¤‚",
        "terms.title": "à¤•à¥‹à¤Ÿ à¤¬à¤¾à¤¤à¤šà¥€à¤¤ à¤‰à¤¨ à¤¤à¤¥à¥à¤¯à¥‹à¤‚ à¤¸à¥‡ à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆ à¤œà¥‹ à¤–à¤°à¥€à¤¦à¤¾à¤° à¤ªà¤¹à¤²à¥‡ à¤ªà¥‚à¤›à¤¤à¥‡ à¤¹à¥ˆà¤‚.",
        "terms.intro": "à¤µà¤¿à¤¸à¥à¤¤à¥ƒà¤¤ à¤•à¥‹à¤Ÿà¥‡à¤¶à¤¨ à¤®à¤¾à¤‚à¤—à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤–à¤°à¥€à¤¦à¤¾à¤° à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯à¤¤à¤ƒ à¤‡à¤¨à¥à¤¹à¥€à¤‚ à¤¬à¥‡à¤¸à¤¿à¤• à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤° à¤¶à¤°à¥à¤¤à¥‹à¤‚ à¤•à¥€ à¤…à¤ªà¥‡à¤•à¥à¤·à¤¾ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚.",
        "terms.card1Label": "MOQ",
        "terms.card1": "1 metric ton à¤¸à¥‡",
        "terms.card1Note": "à¤ªà¤¹à¤²à¥‡ à¤¥à¥‹à¤• à¤Ÿà¥à¤°à¤¾à¤¯à¤² à¤‘à¤°à¥à¤¡à¤° à¤”à¤° à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ à¤®à¤¾à¤¸à¤¿à¤• à¤¸à¤ªà¥à¤²à¤¾à¤ˆ à¤¦à¥‹à¤¨à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤ªà¤¯à¥à¤•à¥à¤¤.",
        "terms.card2Label": "Lead time",
        "terms.card2": "à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤”à¤° à¤ªà¥ˆà¤•à¥‡à¤œà¤¿à¤‚à¤— à¤•à¥‡ à¤†à¤§à¤¾à¤° à¤ªà¤° 7-15 à¤¦à¤¿à¤¨",
        "terms.card2Note": "à¤¸à¥à¤Ÿà¥ˆà¤‚à¤¡à¤°à¥à¤¡ à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤œà¤²à¥à¤¦à¥€ à¤­à¥‡à¤œà¥‡ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚; custom private label à¤ªà¥ˆà¤• à¤®à¥‡à¤‚ à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤¤à¥ˆà¤¯à¤¾à¤°à¥€ à¤¸à¤®à¤¯ à¤²à¤—à¤¤à¤¾ à¤¹à¥ˆ.",
        "terms.card3Label": "Shipping",
        "terms.card3": "Saigon Port à¤¸à¥‡ FOB à¤¯à¤¾ CIF",
        "terms.card3Note": "à¤–à¤°à¥€à¤¦à¤¾à¤° à¤…à¤ªà¤¨à¥€ à¤ªà¤¸à¤‚à¤¦ à¤•à¥‡ shipping responsibility model à¤”à¤° destination support level à¤šà¥à¤¨ à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆ.",
        "terms.card4Label": "Payment",
        "terms.card4": "Buyer requirements à¤•à¥‡ à¤†à¤§à¤¾à¤° à¤ªà¤° T/T à¤”à¤° L/C",
        "terms.card4Note": "Payment method à¤†à¤ªà¤•à¥€ procurement policy à¤”à¤° risk control process à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° align à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆ.",
        "oem.eyebrow": "OEM / private label",
        "oem.title": "à¤†à¤ªà¤•à¥‡ target market à¤•à¥‡ à¤²à¤¿à¤ private label packaging.",
        "oem.copy": "Greenie jars, kraft pouches, vacuum packs, label language requirements à¤”à¤° export documentation à¤ªà¤° buyer-brand packaging à¤šà¤°à¥à¤šà¤¾ à¤®à¥‡à¤‚ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ.",
        "oem.step1Title": "Requirements brief",
        "oem.step1Copy": "Product, target market, packaging format, pack size, documents à¤”à¤° estimated volume.",
        "oem.step2Title": "Packaging confirmation",
        "oem.step2Copy": "Buyer brand, label language, carton à¤¯à¤¾ pouch format à¤”à¤° compliance requirements.",
        "oem.step3Title": "Sample approval",
        "oem.step3Copy": "Buyer evaluation à¤œà¤°à¥‚à¤°à¥€ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤° production à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ samples arrange à¤•à¤¿à¤ à¤œà¤¾ à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚.",
        "oem.step4Title": "Production",
        "oem.step4Copy": "Lead time product, stock status à¤”à¤° packaging complexity à¤ªà¤° à¤¨à¤¿à¤°à¥à¤­à¤° à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ.",
        "oem.step5Title": "Inspection & shipment",
        "oem.step5Copy": "Optional third-party testing, final documents à¤”à¤° FOB/CIF shipment support.",
        "samples.eyebrow": "à¤¨à¤®à¥‚à¤¨à¥‡ à¤®à¤¾à¤‚à¤—à¥‡à¤‚",
        "samples.title": "à¤¥à¥‹à¤• à¤‘à¤°à¥à¤¡à¤° à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ product quality evaluate à¤•à¤°à¥‡à¤‚.",
        "samples.copy": "Cashew kernels, artisan cane sugar à¤¯à¤¾ mixed sample pack à¤®à¤¾à¤‚à¤—à¥‡à¤‚. à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤° technical documents à¤¶à¤¾à¤®à¤¿à¤² à¤•à¤¿à¤ à¤œà¤¾ à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚.",
        "samples.badge1": "Courier-ready samples",
        "samples.badge2": "COA à¤…à¤¨à¥à¤°à¥‹à¤§ à¤ªà¤°",
        "samples.badge3": "Buyer evaluation support",
        "samples.formTitle": "Sample request brief",
        "samples.formCopy": "Use this form when you only need product samples. The same sales team will handle both sample and wholesale requests.",
        "samples.formTitle": "Sample request brief",
        "samples.formCopy": "Use this form when you only need product samples. The same sales team will handle both sample and wholesale requests.",
        "quote.eyebrow": "à¤¥à¥‹à¤• à¤•à¥‹à¤Ÿ à¤²à¥‡à¤‚",
        "quote.title": "Quote-ready inquiry à¤­à¥‡à¤œà¥‡à¤‚.",
        "quote.copy": "Greenie Vietnam 24-48 à¤˜à¤‚à¤Ÿà¥‡ à¤®à¥‡à¤‚ à¤œà¤µà¤¾à¤¬ à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆ. à¤•à¥ƒà¤ªà¤¯à¤¾ volume, destination, documents à¤”à¤° packaging details à¤¶à¤¾à¤®à¤¿à¤² à¤•à¤°à¥‡à¤‚ à¤¤à¤¾à¤•à¤¿ sales team à¤œà¤²à¥à¤¦à¥€ à¤œà¤µà¤¾à¤¬ à¤¦à¥‡ à¤¸à¤•à¥‡.",
        "quote.needTitle": "à¤†à¤ªà¤•à¥€ inquiry à¤®à¥‡à¤‚ à¤šà¤¾à¤¹à¤¿à¤",
        "quote.needCopy": "Product, estimated quantity in MT, packaging preference, incoterm, destination à¤”à¤° required documents.",
        "form.company": "Company name *",
        "form.country": "Country *",
        "form.person": "Contact person *",
        "form.role": "Role",
        "form.email": "Email *",
        "form.whatsapp": "WhatsApp / phone",
        "form.website": "Company website / social",
        "form.product": "Product interest *",
        "form.selectProduct": "Product à¤šà¥à¤¨à¥‡à¤‚",
        "form.cashew": "Cashew Kernels",
        "form.sugar": "Artisan Cane Sugar",
        "form.both": "Cashew + Cane Sugar",
        "form.oem": "OEM / Private Label",
        "form.quantity": "Estimated quantity (MT) *",
        "form.packaging": "Packaging preference",
        "form.incoterms": "Incoterms",
        "form.notSure": "à¤…à¤­à¥€ à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤¨à¤¹à¥€à¤‚",
        "form.destination": "Destination",
        "form.notes": "Required documents or notes",
        "form.submit": "Inquiry à¤­à¥‡à¤œà¥‡à¤‚",
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
        "ph.packaging": "Bulk, jar, pouch, vacuum pack",
        "ph.destination": "Destination port / city",
        "ph.notes": "HALAL, SGS/Eurofins, COA, packaging language, target market...",
        "footer.copy": "à¤µà¥ˆà¤¶à¥à¤µà¤¿à¤• à¤¥à¥‹à¤• à¤–à¤°à¥€à¤¦à¤¾à¤°à¥‹à¤‚ à¤”à¤° private label brands à¤•à¥‡ à¤²à¤¿à¤ export-ready Vietnamese agricultural products.",
        "footer.products": "Products",
        "footer.cashew": "Cashew Kernels",
        "footer.sugar": "Artisan Cane Sugar",
        "footer.sales": "Sales",
        "footer.quickTitle": "Quick Facts",
        "footer.contactTitle": "Contact",
        "footer.fact1": "MOQ from 1 MT",
        "footer.fact2": "Lead time 7-15 days",
        "footer.fact3": "FOB / CIF from Saigon Port",
        "footer.contact1": "Reply within 24-48 hours",
        "footer.contact2": "T/T and L/C available",
        "footer.contact3": "HALAL and testing on request",
        "footer.rights": "© 2026 Greenie Vietnam Agricultural Exports.",
        "status.notConfigured": "EmailJS à¤…à¤­à¥€ configured à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ. Live à¤œà¤¾à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ js/main.js à¤®à¥‡à¤‚ EmailJS keys replace à¤•à¤°à¥‡à¤‚.",
        "status.sending": "Inquiry à¤­à¥‡à¤œà¥€ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆ...",
        "status.sent": "Inquiry à¤­à¥‡à¤œ à¤¦à¥€ à¤—à¤ˆ. Greenie Vietnam 24-48 à¤˜à¤‚à¤Ÿà¥‡ à¤®à¥‡à¤‚ à¤œà¤µà¤¾à¤¬ à¤¦à¥‡à¤—à¤¾.",
        "status.failed": "Inquiry à¤­à¥‡à¤œà¥€ à¤¨à¤¹à¥€à¤‚ à¤œà¤¾ à¤¸à¤•à¥€. à¤•à¥ƒà¤ªà¤¯à¤¾ à¤«à¤¿à¤° à¤•à¥‹à¤¶à¤¿à¤¶ à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ Greenie Vietnam à¤¸à¥‡ à¤¸à¥€à¤§à¥‡ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚."
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

function bindEmailForm(form, statusElement) {
    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (!isEmailJsConfigured()) {
            setStatus(
                statusElement,
                translate("status.notConfigured"),
                "text-amber-700"
            );
            return;
        }

        setStatus(statusElement, translate("status.sending"), "text-primary");

        emailjs
            .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
            .then(() => {
                setStatus(statusElement, translate("status.sent"), "text-emerald-700");
                form.reset();
            })
            .catch((error) => {
                console.error("EmailJS failed", error);
                setStatus(statusElement, translate("status.failed"), "text-red-700");
            });
    });
}

bindEmailForm(contactForm, statusText);
bindEmailForm(sampleForm, sampleStatusText);




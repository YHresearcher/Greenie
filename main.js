const EMAILJS_PUBLIC_KEY = "_Gx8cHW_R8bomgG5c";
const EMAILJS_SERVICE_ID = "service_6joc3eq";
const EMAILJS_TEMPLATE_ID = "template_vknoy18";

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
    "samples.badge1": "Courier-ready samples",
    "samples.badge2": "COA on request",
    "samples.badge3": "Buyer evaluation support",
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
    "footer.rights": "© 2026 Greenie Vietnam Agricultural Exports.",
    "status.notConfigured": "EmailJS is not configured yet. Replace the EmailJS keys in js/main.js before going live.",
    "status.sending": "Sending inquiry...",
    "status.sent": "Inquiry sent. Greenie Vietnam will reply within 24-48 hours.",
    "status.failed": "The inquiry could not be sent. Please try again or contact Greenie Vietnam directly."
  },
  zh: {
    metaTitle: "Greenie Vietnam - 全球批发出口与自有品牌",
    metaDescription: "Greenie Vietnam 为全球进口商、批发商、分销商和自有品牌客户供应可出口的越南腰果仁和手工甘蔗糖。",
    "nav.products": "产品",
    "nav.about": "关于",
    "nav.quality": "质量",
    "nav.oem": "代工",
    "nav.samples": "样品",
    "nav.quote": "报价",
    "nav.getQuote": "获取报价",
    "cta.samples": "索取样品",
    "cta.quote": "获取批发报价",
    "cta.getQuoteShort": "获取报价",
    "cta.startOem": "开始代工",
    "cta.submitOem": "提交代工需求",
    "cta.samplesViaForm": "通过报价表索取样品",
    "hero.eyebrow": "全球批发出口 + 自有品牌",
    "hero.title": "面向全球买家的越南腰果仁与手工甘蔗糖出口供应。",
    "hero.copy": "Greenie Vietnam 为全球进口商、批发商、分销商、制造商和自有品牌客户提供清晰贸易条款、质量文件支持和快速报价服务。",
    "hero.cardEyebrow": "出口条款",
    "hero.cardTitle": "MOQ 从 1 公吨起",
    "hero.cardCopy": "从西贡港提供 FOB/CIF，SGS/Eurofins 第三方检测可按需安排。",
    "proof.moqLabel": "起订量",
    "proof.moq": "1 公吨",
    "proof.leadLabel": "交期",
    "proof.lead": "7-15 天",
    "proof.complianceLabel": "合规",
    "proof.compliance": "可提供 HALAL",
    "proof.testingLabel": "检测",
    "proof.testing": "SGS/Eurofins",
    "proof.incotermsLabel": "贸易术语",
    "proof.incoterms": "FOB/CIF",
    "proof.portLabel": "港口",
    "proof.port": "西贡港",
    "proof.paymentLabel": "付款",
    "proof.payment": "T/T 与 L/C",
    "proof.responseLabel": "回复",
    "proof.response": "24-48 小时",
    "products.eyebrow": "核心产品",
    "products.title": "适合批发与自有品牌的优质出口品类。",
    "products.copy": "聚焦的产品线可帮助买家更快索取规格书、样品、包装方案和合规文件。",
    "cashew.origin": "越南平福",
    "cashew.title": "越南腰果仁",
    "cashew.copy": "白整粒腰果仁，适合批发商、分销商、烘焙商、餐饮服务、食品制造商和自有品牌客户。",
    "cashew.spec1Label": "等级",
    "cashew.spec1": "W240 / W320 / W450",
    "cashew.spec2Label": "包装",
    "cashew.spec2": "散装、真空、纸箱选项",
    "cashew.spec3Label": "文件",
    "cashew.spec3": "规格书，COA 按需提供",
    "cashew.spec4Label": "过敏原",
    "cashew.spec4": "树坚果声明",
    "sugar.origin": "越南广义",
    "sugar.title": "手工甘蔗糖“Duong Phoi”",
    "sugar.copy": "传统越南甘蔗糖，适合全球零售、餐饮服务、批发供应和自有品牌包装。",
    "sugar.spec1Label": "声明",
    "sugar.spec1": "不添加防腐剂",
    "sugar.spec2Label": "包装",
    "sugar.spec2": "罐装、袋装、真空选项",
    "sugar.spec3Label": "文件",
    "sugar.spec3": "规格书，COA 按需提供",
    "sugar.spec4Label": "原产地",
    "sugar.spec4": "越南原产地",
    "why.eyebrow": "为什么选择 Greenie",
    "why.title": "为需要先确认关键信息的买家而设计。",
    "why.copy": "Greenie 让采购沟通更务实：在报价前先明确贸易条款、文件、包装、检测和运输预期。",
    "why.card1Title": "条款清晰",
    "why.card1Copy": "MOQ 从 1 公吨起，交期 7-15 天，FOB/CIF，西贡港，支持 T/T 和 L/C。",
    "why.card2Title": "合规准备",
    "why.card2Copy": "可提供 HALAL 证书，SGS/Eurofins 第三方检测可按需安排。",
    "why.card3Title": "供应灵活",
    "why.card3Copy": "支持批发出口、散装包装和买家品牌自有品牌方案。",
    "why.card4Title": "全球出口支持",
    "why.card4Copy": "文件和运输沟通可适配亚洲、中国、南亚、欧洲、北美及其他市场。",
    "about.eyebrow": "关于 Greenie",
    "about.title": "源于对模糊食品承诺的拒绝。",
    "about.copy1": "Greenie 的起点来自真实的工厂走访。我们看到一个艰难事实：太多食品品牌用漂亮词汇包装自己，却把不清晰的流程藏在标签背后。",
    "about.copy2": "与此同时，越南农产品常以低价值原料形式出售，而其他市场通过深加工获取更高价值。Greenie 希望用透明、文件化和严格筛选改变这条路径。",
    "about.quote": "我们不只是采购产品。我们筛选的是诚信。",
    "about.standardLabel": "Greenie 标准",
    "about.standardTitle": "90% 本地精华。10% 国际标准过滤。",
    "about.principle1Title": "透明胜过口号",
    "about.principle1Copy": "每一项声明都应由文件、流程检查或供应商证据支持。",
    "about.principle2Title": "独立验证",
    "about.principle2Copy": "我们优先选择合格生产伙伴，并在买家需要时安排第三方检测。",
    "about.principle3Title": "不以 Greenie 之名妥协",
    "about.principle3Copy": "如果一个批次无法通过 Greenie 的检查，它就不应出现在 Greenie 名下。",
    "quality.eyebrow": "质量与合规",
    "quality.title": "缩短销售周期的买家资料包。",
    "quality.copy": "最终出口资料仅应使用可被文件证明的声明。证书和检测报告在未公开前皆以按需提供的方式呈现。",
    "quality.doc1": "产品规格书",
    "quality.doc2": "COA 及 SGS/Eurofins 检测按需提供",
    "quality.doc3": "原产地文件",
    "quality.doc4": "可提供 HALAL 证书",
    "quality.doc5": "保质期与储存说明",
    "terms.eyebrow": "商业条款",
    "terms.title": "报价沟通从买家最关心的事实开始。",
    "terms.intro": "以下是买家在索取详细报价前可预期的基础商业条款。",
    "terms.card1Label": "起订量",
    "terms.card1": "从 1 公吨起",
    "terms.card1Note": "适用于首次试单及后续月度稳定补货。",
    "terms.card2Label": "交期",
    "terms.card2": "根据产品和包装约 7-15 天",
    "terms.card2Note": "标准产品交付更快；定制自有品牌包装需额外准备时间。",
    "terms.card3Label": "运输",
    "terms.card3": "西贡港 FOB 或 CIF",
    "terms.card3Note": "买家可按自身需求选择运输责任划分与目的地支持级别。",
    "terms.card4Label": "付款",
    "terms.card4": "按买家需求支持 T/T 和 L/C",
    "terms.card4Note": "付款方式可按贵司采购政策与风控流程进行匹配。",
    "oem.eyebrow": "OEM / 自有品牌",
    "oem.title": "面向目标市场的自有品牌包装。",
    "oem.copy": "Greenie 支持买家品牌包装需求，包括罐装、牛皮纸袋、真空包装、标签语言和出口文件。",
    "oem.step1Title": "需求简报",
    "oem.step1Copy": "产品、目标市场、包装形式、包装规格、文件和预计数量。",
    "oem.step2Title": "包装确认",
    "oem.step2Copy": "买家品牌、标签语言、纸箱或袋型以及合规要求。",
    "oem.step3Title": "样品确认",
    "oem.step3Copy": "如买家需要评估，可在生产前安排样品。",
    "oem.step4Title": "生产",
    "oem.step4Copy": "交期取决于产品、库存状态和包装复杂度。",
    "oem.step5Title": "检验与发运",
    "oem.step5Copy": "可选第三方检测、最终文件和 FOB/CIF 发运支持。",
    "samples.eyebrow": "索取样品",
    "samples.title": "在批量订单前评估产品质量。",
    "samples.copy": "可索取腰果仁、手工甘蔗糖或混合样品包。可在有文件时随附技术资料。",
    "samples.badge1": "可快递样品",
    "samples.badge2": "COA 按需提供",
    "samples.badge3": "支持买家评估",
    "samples.formTitle": "样品需求简报",
    "samples.formCopy": "当您只需要产品样品时使用此表。同一销售团队将处理样品与批发请求。",
    "quote.eyebrow": "获取批发报价",
    "quote.title": "提交可快速报价的询盘。",
    "quote.copy": "Greenie Vietnam 将在 24-48 小时内回复。请提供数量、目的地、文件和包装需求，以便销售团队快速响应。",
    "quote.needTitle": "询盘建议包含",
    "quote.needCopy": "产品、预计数量（公吨）、包装偏好、贸易术语、目的地和所需文件。",
    "form.company": "公司名称 *",
    "form.country": "国家/地区 *",
    "form.person": "联系人 *",
    "form.role": "职位",
    "form.email": "邮箱 *",
    "form.whatsapp": "WhatsApp / 电话",
    "form.product": "意向产品",
    "form.selectProduct": "选择产品",
    "form.cashew": "腰果仁",
    "form.sugar": "手工甘蔗糖",
    "form.both": "腰果 + 甘蔗糖",
    "form.oem": "OEM / 自有品牌",
    "form.quantity": "预计数量（公吨）",
    "form.packaging": "包装偏好",
    "form.incoterms": "贸易术语",
    "form.notSure": "暂不确定",
    "form.destination": "目的地",
    "form.notes": "所需文件或备注",
    "form.submit": "提交询盘",
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
    "ph.notes": "HALAL、SGS/Eurofins、COA、包装语言、目标市场...",
    "footer.copy": "面向全球批发买家和自有品牌客户的可出口越南农产品。",
    "footer.products": "产品",
    "footer.cashew": "腰果仁",
    "footer.sugar": "手工甘蔗糖",
    "footer.sales": "销售",
    "footer.rights": "© 2026 Greenie Vietnam Agricultural Exports."
  },
  hi: {
    metaTitle: "Greenie Vietnam - वैश्विक थोक निर्यात और प्राइवेट लेबल",
    metaDescription: "Greenie Vietnam वैश्विक आयातकों, थोक खरीदारों, वितरकों और प्राइवेट लेबल ब्रांडों के लिए निर्यात-तैयार वियतनामी काजू और हस्तनिर्मित गन्ना चीनी सप्लाई करता है।",
    "nav.products": "उत्पाद",
    "nav.about": "हमारे बारे में",
    "nav.quality": "गुणवत्ता",
    "nav.oem": "OEM",
    "nav.samples": "नमूने",
    "nav.quote": "कोट",
    "nav.getQuote": "कोट लें",
    "cta.samples": "नमूने मांगें",
    "cta.quote": "थोक कोट लें",
    "cta.getQuoteShort": "कोट लें",
    "cta.startOem": "OEM शुरू करें",
    "cta.submitOem": "OEM ब्रीफ भेजें",
    "cta.samplesViaForm": "कोट फॉर्म से नमूने मांगें",
    "hero.eyebrow": "वैश्विक थोक निर्यात + प्राइवेट लेबल",
    "hero.title": "वैश्विक खरीदारों के लिए निर्यात-तैयार वियतनामी काजू और हस्तनिर्मित गन्ना चीनी।",
    "hero.copy": "Greenie Vietnam दुनिया भर के आयातकों, थोक खरीदारों, वितरकों, निर्माताओं और प्राइवेट लेबल ब्रांडों को स्पष्ट व्यापार शर्तें, गुणवत्ता दस्तावेज और तेज़ कोट सपोर्ट देता है।",
    "hero.cardEyebrow": "निर्यात शर्तें",
    "hero.cardTitle": "MOQ 1 MT से",
    "hero.cardCopy": "Saigon Port से FOB/CIF, और SGS/Eurofins टेस्टिंग अनुरोध पर उपलब्ध।",
    "proof.moqLabel": "MOQ",
    "proof.moq": "1 MT",
    "proof.leadLabel": "लीड टाइम",
    "proof.lead": "7-15 दिन",
    "proof.complianceLabel": "कम्प्लायंस",
    "proof.compliance": "HALAL उपलब्ध",
    "proof.testingLabel": "टेस्टिंग",
    "proof.testing": "SGS/Eurofins",
    "proof.incotermsLabel": "Incoterms",
    "proof.incoterms": "FOB/CIF",
    "proof.portLabel": "पोर्ट",
    "proof.port": "Saigon Port",
    "proof.paymentLabel": "भुगतान",
    "proof.payment": "T/T और L/C",
    "proof.responseLabel": "जवाब",
    "proof.response": "24-48 घंटे",
    "products.eyebrow": "मुख्य उत्पाद",
    "products.title": "थोक और प्राइवेट लेबल के लिए प्रीमियम निर्यात कैटेगरी।",
    "products.copy": "फोकस्ड उत्पाद लाइन खरीदारों को सही स्पेसिफिकेशन शीट, नमूने, पैकेजिंग विकल्प और कम्प्लायंस दस्तावेज जल्दी मांगने में मदद करती है।",
    "cashew.origin": "Binh Phuoc, Vietnam",
    "cashew.title": "वियतनामी काजू kernels",
    "cashew.copy": "व्हाइट होल काजू kernels थोक खरीदारों, वितरकों, रोस्टर्स, फूड सर्विस, निर्माताओं और प्राइवेट लेबल ब्रांडों के लिए।",
    "cashew.spec1Label": "ग्रेड",
    "cashew.spec1": "W240 / W320 / W450",
    "cashew.spec2Label": "पैकेजिंग",
    "cashew.spec2": "Bulk, vacuum, carton options",
    "cashew.spec3Label": "दस्तावेज",
    "cashew.spec3": "Spec sheet, COA अनुरोध पर",
    "cashew.spec4Label": "एलर्जन",
    "cashew.spec4": "Tree nut statement",
    "sugar.origin": "Quang Ngai, Vietnam",
    "sugar.title": "हस्तनिर्मित गन्ना चीनी \"Duong Phoi\"",
    "sugar.copy": "वैश्विक रिटेल, फूड सर्विस, थोक सप्लाई और प्राइवेट लेबल पैकेजिंग के लिए पारंपरिक वियतनामी गन्ना चीनी।",
    "sugar.spec1Label": "स्टेटमेंट",
    "sugar.spec1": "कोई preservatives नहीं",
    "sugar.spec2Label": "पैकेजिंग",
    "sugar.spec2": "Jar, pouch, vacuum options",
    "sugar.spec3Label": "दस्तावेज",
    "sugar.spec3": "Spec sheet, COA अनुरोध पर",
    "sugar.spec4Label": "Origin",
    "sugar.spec4": "Vietnam country of origin",
    "why.eyebrow": "Greenie क्यों",
    "why.title": "उन खरीदारों के लिए जो कीमत से पहले स्पष्टता चाहते हैं।",
    "why.copy": "Greenie खरीद बातचीत को व्यावहारिक रखता है: पहली कोट से पहले व्यापार शर्तें, दस्तावेज, पैकेजिंग, टेस्टिंग और शिपिंग अपेक्षाएँ स्पष्ट की जाती हैं।",
    "why.card1Title": "स्पष्ट शर्तें",
    "why.card1Copy": "MOQ 1 MT से, lead time 7-15 दिन, FOB/CIF, Saigon Port, T/T और L/C।",
    "why.card2Title": "कम्प्लायंस-रेडी",
    "why.card2Copy": "HALAL certificate उपलब्ध और SGS/Eurofins third-party testing अनुरोध पर उपलब्ध।",
    "why.card3Title": "लचीली सप्लाई",
    "why.card3Copy": "Wholesale export, bulk packaging और buyer brands के लिए private label options।",
    "why.card4Title": "वैश्विक निर्यात सपोर्ट",
    "why.card4Copy": "दस्तावेज और शिपिंग चर्चा Asia, China, South Asia, Europe, North America और अन्य बाज़ारों के लिए अनुकूल की जा सकती है।",
    "about.eyebrow": "Greenie के बारे में",
    "about.title": "अस्पष्ट food promises को स्वीकार न करने से शुरू हुई।",
    "about.copy1": "Greenie की शुरुआत real factory visits के बाद हुई, जहाँ एक कठिन सच्चाई दिखी: कई food brands सुंदर शब्दों का उपयोग करते हैं, लेकिन label के पीछे unclear processes छिपे रहते हैं।",
    "about.copy2": "साथ ही, Vietnamese agricultural products अब भी low-value raw materials की तरह बेचे जाते हैं, जबकि दूसरे markets उन्हें deeper process करके ज़्यादा value capture करते हैं। Greenie transparency, documentation और disciplined selection से इस रास्ते को बदलना चाहता है।",
    "about.quote": "हम सिर्फ़ products नहीं खरीदते। हम integrity चुनते हैं।",
    "about.standardLabel": "The Greenie Standard",
    "about.standardTitle": "90% local essence. 10% global filter.",
    "about.principle1Title": "Slogans से ज़्यादा transparency",
    "about.principle1Copy": "हर claim को documents, process checks या supplier evidence से सपोर्ट होना चाहिए।",
    "about.principle2Title": "Independent verification",
    "about.principle2Copy": "हम qualified production partners को प्राथमिकता देते हैं और buyer की ज़रूरत पर third-party testing arrange करते हैं।",
    "about.principle3Title": "Greenie नाम के तहत कोई compromise नहीं",
    "about.principle3Copy": "यदि कोई batch Greenie checks पास नहीं कर सकता, तो वह Greenie नाम से नहीं आना चाहिए।",
    "quality.eyebrow": "गुणवत्ता और कम्प्लायंस",
    "quality.title": "Buyer pack जो sales cycle को छोटा करता है।",
    "quality.copy": "अंतिम निर्यात सामग्री में केवल दस्तावेज-समर्थित दावे उपयोग होने चाहिए। Certificate और test reports ready होने तक अनुरोध पर उपलब्ध के रूप में रखे जाते हैं।",
    "quality.doc1": "Product specification sheets",
    "quality.doc2": "COA और SGS/Eurofins testing अनुरोध पर",
    "quality.doc3": "Country of Origin documentation",
    "quality.doc4": "HALAL certificate उपलब्ध",
    "quality.doc5": "Shelf life और storage statements",
    "terms.eyebrow": "व्यापार शर्तें",
    "terms.title": "कोट बातचीत उन तथ्यों से शुरू होती है जो खरीदार पहले पूछते हैं।",
    "terms.intro": "विस्तृत कोटेशन मांगने से पहले खरीदार सामान्यतः इन्हीं बेसिक व्यापार शर्तों की अपेक्षा करते हैं।",
    "terms.card1Label": "MOQ",
    "terms.card1": "1 metric ton से",
    "terms.card1Note": "पहले थोक ट्रायल ऑर्डर और नियमित मासिक सप्लाई दोनों के लिए उपयुक्त।",
    "terms.card2Label": "Lead time",
    "terms.card2": "उत्पाद और पैकेजिंग के आधार पर 7-15 दिन",
    "terms.card2Note": "स्टैंडर्ड उत्पाद जल्दी भेजे जाते हैं; custom private label पैक में अतिरिक्त तैयारी समय लगता है।",
    "terms.card3Label": "Shipping",
    "terms.card3": "Saigon Port से FOB या CIF",
    "terms.card3Note": "खरीदार अपनी पसंद के shipping responsibility model और destination support level चुन सकता है।",
    "terms.card4Label": "Payment",
    "terms.card4": "Buyer requirements के आधार पर T/T और L/C",
    "terms.card4Note": "Payment method आपकी procurement policy और risk control process के अनुसार align किया जा सकता है।",
    "oem.eyebrow": "OEM / private label",
    "oem.title": "आपके target market के लिए private label packaging।",
    "oem.copy": "Greenie jars, kraft pouches, vacuum packs, label language requirements और export documentation पर buyer-brand packaging चर्चा में सहायता करता है।",
    "oem.step1Title": "Requirements brief",
    "oem.step1Copy": "Product, target market, packaging format, pack size, documents और estimated volume।",
    "oem.step2Title": "Packaging confirmation",
    "oem.step2Copy": "Buyer brand, label language, carton या pouch format और compliance requirements।",
    "oem.step3Title": "Sample approval",
    "oem.step3Copy": "Buyer evaluation ज़रूरी होने पर production से पहले samples arrange किए जा सकते हैं।",
    "oem.step4Title": "Production",
    "oem.step4Copy": "Lead time product, stock status और packaging complexity पर निर्भर करता है।",
    "oem.step5Title": "Inspection & shipment",
    "oem.step5Copy": "Optional third-party testing, final documents और FOB/CIF shipment support।",
    "samples.eyebrow": "नमूने मांगें",
    "samples.title": "थोक ऑर्डर से पहले product quality evaluate करें।",
    "samples.copy": "Cashew kernels, artisan cane sugar या mixed sample pack मांगें। उपलब्ध होने पर technical documents शामिल किए जा सकते हैं।",
    "samples.badge1": "Courier-ready samples",
    "samples.badge2": "COA अनुरोध पर",
    "samples.badge3": "Buyer evaluation support",
    "samples.formTitle": "Sample request brief",
    "samples.formCopy": "जब आपको केवल उत्पाद नमूने चाहिए तो इस फॉर्म का उपयोग करें। वही सेल्स टीम सैंपल और थोक दोनों अनुरोध संभालेगी।",
    "quote.eyebrow": "थोक कोट लें",
    "quote.title": "Quote-ready inquiry भेजें।",
    "quote.copy": "Greenie Vietnam 24-48 घंटे में जवाब देता है। कृपया volume, destination, documents और packaging details शामिल करें ताकि sales team जल्दी जवाब दे सके।",
    "quote.needTitle": "आपकी inquiry में चाहिए",
    "quote.needCopy": "Product, estimated quantity in MT, packaging preference, incoterm, destination और required documents।",
    "form.company": "Company name *",
    "form.country": "Country *",
    "form.person": "Contact person *",
    "form.role": "Role",
    "form.email": "Email *",
    "form.whatsapp": "WhatsApp / phone",
    "form.product": "Product interest *",
    "form.selectProduct": "Product चुनें",
    "form.cashew": "Cashew Kernels",
    "form.sugar": "Artisan Cane Sugar",
    "form.both": "Cashew + Cane Sugar",
    "form.oem": "OEM / Private Label",
    "form.quantity": "Estimated quantity (MT) *",
    "form.packaging": "Packaging preference",
    "form.incoterms": "Incoterms",
    "form.notSure": "अभी निश्चित नहीं",
    "form.destination": "Destination",
    "form.notes": "Required documents or notes",
    "form.submit": "Inquiry भेजें",
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
    "footer.copy": "वैश्विक थोक खरीदारों और private label brands के लिए निर्यात-तैयार वियतनामी कृषि उत्पाद।",
    "footer.products": "Products",
    "footer.cashew": "Cashew Kernels",
    "footer.sugar": "Artisan Cane Sugar",
    "footer.sales": "Sales",
    "footer.rights": "© 2026 Greenie Vietnam Agricultural Exports."
  }
};

document.addEventListener("DOMContentLoaded", () => {
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
    AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 90 });
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
      if (!target) return;
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
    if (!target) return;
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
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (!isEmailJsConfigured()) {
        setStatus(statusElement, translate("status.notConfigured"), "text-amber-700");
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
});

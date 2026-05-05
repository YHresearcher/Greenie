/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MapPin, 
  ShieldCheck, 
  Leaf, 
  Award, 
  ArrowRight,
  Mail,
  Phone,
  Globe,
  Instagram,
  Facebook
} from 'lucide-react';

// SEO Constants
const APP_NAME = "Quang Ngai Heritage Sugar";
const PRIMARY_KEYWORD = "Đường Phổi Quảng Ngãi";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2d241e] font-sans selection:bg-[#c5a059] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-[#2d241e]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#2d241e]">
              QUANG NGAI <span className="text-[#c5a059]">HERITAGE</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#heritage" className="hover:text-[#c5a059] transition-colors">Heritage</a>
            <a href="#quality" className="hover:text-[#c5a059] transition-colors">Quality</a>
            <a href="#sourcing" className="hover:text-[#c5a059] transition-colors">Sourcing</a>
            <a href="#inquiry" className="bg-[#2d241e] text-white px-6 py-2.5 rounded-full hover:bg-[#c5a059] transition-all transform active:scale-95">
              Wholesale Inquiry
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#fdfbf7] pt-28 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif">
              <a href="#heritage" onClick={() => setIsMenuOpen(false)}>The Heritage</a>
              <a href="#quality" onClick={() => setIsMenuOpen(false)}>Artisan Quality</a>
              <a href="#sourcing" onClick={() => setIsMenuOpen(false)}>Sourcing & B2B</a>
              <a href="#inquiry" onClick={() => setIsMenuOpen(false)} className="text-[#c5a059]">Wholesale Inquiry</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#c5a059] font-serif italic text-xl mb-4">
                The Essence of Central Vietnam
              </span>
              <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-8 italic">
                Purity in Every <br/> 
                <span className="not-italic font-bold text-[#c5a059]">Crystal.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#2d241e]/70 max-w-lg mb-10 leading-relaxed">
                Bringing the authentic {PRIMARY_KEYWORD} to global B2B markets. Hand-crafted using century-old methods in the heart of Quang Ngai.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#inquiry" className="group flex items-center gap-2 bg-[#2d241e] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#c5a059]">
                  Request Catalog
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#heritage" className="px-8 py-4 rounded-full border border-[#2d241e]/20 font-medium hover:bg-[#2d241e]/5 transition-colors">
                  Our Story
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] md:aspect-square"
            >
              <div className="absolute inset-0 bg-[#c5a059]/10 rounded-[40px] -rotate-3 transition-transform hover:rotate-0 duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1581005166318-7b98ec3be3b9?auto=format&fit=crop&q=80&w=1000" 
                alt="Quang Ngai Raw Sugar Crystals" 
                className="w-full h-full object-cover rounded-[40px] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-[#2d241e]/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center text-[#c5a059]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider">Certified Origin</p>
                    <p className="text-xs text-[#2d241e]/60">Quang Ngai Geographic Indicator</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Heritage Section */}
        <section id="heritage" className="py-24 bg-[#2d241e] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <motion.span 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  className="text-[#c5a059] font-serif italic text-lg block mb-4"
                >
                  Century-Old Tradition
                </motion.span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">
                  Born from the Soil <br/>of <span className="italic">Son Tinh.</span>
                </h2>
                <p className="text-[#fdfbf7]/70 text-lg leading-relaxed mb-8">
                  Quang Ngai has been Vietnam&apos;s "Sugar Capital" for generations. Our sugar isn&apos;t just a sweetener; it&apos;s a craft preserved by artisan families who understand the chemistry of cane juice like no one else.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-serif text-[#c5a059] mb-1">100%</p>
                    <p className="text-sm uppercase tracking-widest text-[#fdfbf7]/50 font-medium">Natural Cane</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-[#c5a059] mb-1">Hand</p>
                    <p className="text-sm uppercase tracking-widest text-[#fdfbf7]/50 font-medium">Crystallized</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=600" 
                    alt="Canefields in Quang Ngai" 
                    className="w-full h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" 
                    alt="Traditional Boiling Process" 
                    className="w-full h-80 object-cover rounded-2xl mt-12 grayscale hover:grayscale-0 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality/Process Section */}
        <section id="quality" className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl mb-6">The Artisan Signature</h2>
            <p className="text-[#2d241e]/60 max-w-2xl mx-auto text-lg italic uppercase tracking-widest font-medium">
              A process that honors time and nature
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Pure Sourcing",
                desc: "We only use mature sugar cane from the alluvial plains of the Tra Khuc River, known for its high brix content and mineral depth."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Traditional Cooking",
                desc: "Boiled in open copper pots and clarified using egg shells—a heritage technique that ensures perfect clarity and 'Lung' texture."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "QC Excellence",
                desc: "Every batch is inspected for consistency, crystal size, and flavor profile, meeting modern food safety standards for export."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-[32px] bg-white border border-[#2d241e]/5 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-[#c5a059]/10 rounded-2xl flex items-center justify-center text-[#c5a059] mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl mb-4 italic">{item.title}</h3>
                <p className="text-[#2d241e]/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* B2B / Wholesale Section */}
        <section id="sourcing" className="py-32 bg-[#f9f7f2] border-y border-[#2d241e]/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="flex-1 w-full">
                <h2 className="font-serif text-4xl md:text-5xl mb-8">Wholesale Solutions for <br/><span className="text-[#c5a059]">Global Partners.</span></h2>
                <div className="space-y-6 mb-12">
                  {[
                    "Standardized grading for international logistics",
                    "Customized packaging (Bulk 25kg to Retail 200g)",
                    "Year-round supply from authorized cooperatives",
                    "Complete traceability to the specific farm plot",
                    "Preferential rates for high-volume tea & pastry groups"
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#c5a059]/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
                      </div>
                      <p className="text-lg text-[#2d241e]/80">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-8 rounded-3xl border border-[#2d241e]/5 shadow-sm">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a059] mb-6">Technical Specifications</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Brix Content", value: "92% - 95%" },
                      { label: "Moisture", value: "< 2.5%" },
                      { label: "Appearance", value: "Porous crystals (Đường Phổi)" },
                      { label: "Shelf Life", value: "18 Months (Stored in dry cond.)" },
                      { label: "Origin", value: "Quang Ngai, Vietnam" }
                    ].map((spec, i) => (
                      <div key={i} className="flex justify-between border-b border-[#2d241e]/5 pb-3 last:border-0 last:pb-0">
                        <span className="text-sm text-[#2d241e]/50">{spec.label}</span>
                        <span className="text-sm font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full relative">
                <div className="sticky top-32">
                  <img 
                    src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800" 
                    alt="Sugar in B2B packaging" 
                    className="w-full rounded-[40px] shadow-lg mb-8"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-8 bg-[#2d241e] text-white rounded-3xl">
                    <p className="font-serif italic text-xl mb-4">"Our goal is to bring the sweetness of Quang Ngai to the world, one partnership at a time."</p>
                    <p className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">— Director of Exports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="inquiry" className="py-32 px-6">
          <div className="max-w-3xl mx-auto bg-white p-12 md:p-20 rounded-[40px] shadow-2xl border border-[#2d241e]/5 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Partner With Us</h2>
            <p className="text-[#2d241e]/60 mb-12 text-lg">
              Inquire about samples, pricing sheets, and distribution opportunities in your region.
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#2d241e]/50">Company Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl border border-[#2d241e]/10 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all" placeholder="Acme Confectionaries" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#2d241e]/50">Contact Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl border border-[#2d241e]/10 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#2d241e]/50">Business Email</label>
                <input type="email" className="w-full px-6 py-4 rounded-xl border border-[#2d241e]/10 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all" placeholder="partnerships@company.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#2d241e]/50">Inquiry Details</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-xl border border-[#2d241e]/10 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all" placeholder="Tell us about your volume requirements..."></textarea>
              </div>
              <button className="md:col-span-2 bg-[#2d241e] text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#c5a059] transition-all transform active:scale-[0.98] mt-4 shadow-xl">
                Send Wholesale Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2d241e] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <span className="font-serif text-3xl font-bold tracking-tight mb-8 block">
                QUANG NGAI <br/> <span className="text-[#c5a059]">HERITAGE SUGAR</span>
              </span>
              <p className="max-w-sm text-[#fdfbf7]/50 text-sm leading-relaxed mb-8">
                Preserving Vietnam&apos;s artisan sugar heritage through sustainable trade and global partnerships. Certified GI (Geographical Indicator) producer.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#c5a059] transition-colors"><Facebook className="w-5 h-5"/></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#c5a059] transition-colors"><Instagram className="w-5 h-5"/></a>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a059] mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm text-[#fdfbf7]/70">
                <li><a href="#heritage" className="hover:text-white transition-colors">Heritage Story</a></li>
                <li><a href="#quality" className="hover:text-white transition-colors">Artisan Process</a></li>
                <li><a href="#sourcing" className="hover:text-white transition-colors">B2B Sourcing</a></li>
                <li><a href="#inquiry" className="hover:text-white transition-colors">Contact Wholesale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a059] mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-[#fdfbf7]/70">
                <li className="flex gap-3"><MapPin className="w-4 h-4 shrink-0 text-[#c5a059]"/> Son Tinh Dist, Quang Ngai, VN</li>
                <li className="flex gap-3"><Mail className="w-4 h-4 shrink-0 text-[#c5a059]"/> export@qngheritagesugar.vn</li>
                <li className="flex gap-3"><Phone className="w-4 h-4 shrink-0 text-[#c5a059]"/> +84 (255) 3822 456</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-[#fdfbf7]/30">
            <p>&copy; 2024 QUANG NGAI HERITAGE SUGAR. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Trade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

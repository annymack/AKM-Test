// bondstone-clone.jsx
// Single-file React component (default export) that recreates a modern corporate landing page
// Tech: React + Tailwind CSS + Framer Motion (optional)
// How to use:
// 1) Create a React app (Vite or Create React App). Install TailwindCSS per their docs.
// 2) Install framer-motion if you want animations: `npm install framer-motion`
// 3) Save this file as `src/App.jsx` and run the app.
// 4) This is a single-file starting point. Split into components and add images/assets for production.

import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-gray-800 bg-white">
      {/* NAV */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <div className="text-xl font-bold text-indigo-700">Bondstone<span className="text-gray-400">.</span></div>
              <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                <a href="#solution" className="hover:text-indigo-700">Solution</a>
                <a href="#products" className="hover:text-indigo-700">Products</a>
                <a href="#about" className="hover:text-indigo-700">About</a>
                <a href="#insights" className="hover:text-indigo-700">Insights</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <a href="#contact" className="hidden md:inline-block px-4 py-2 border border-indigo-700 text-indigo-700 rounded-md text-sm">Contact</a>
              <button className="inline-block px-4 py-2 bg-indigo-700 text-white rounded-md text-sm">Client Login</button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
              <div>
                <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-bold leading-tight">Digital investing, tailored for institutional clients</motion.h1>
                <p className="mt-6 text-gray-600 max-w-xl">We design, launch and operate digital investment products and platforms so institutions and private clients can access modern alternatives.</p>

                <div className="mt-8 flex gap-4 flex-wrap">
                  <a href="#products" className="px-5 py-3 bg-indigo-700 text-white rounded-md shadow-sm text-sm">Our solutions</a>
                  <a href="#contact" className="px-5 py-3 border border-gray-200 rounded-md text-sm">Get in touch</a>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="text-center">
                    <div className="text-2xl font-semibold">€3B+</div>
                    <div className="text-xs text-gray-500">Assets under admin</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold">10+</div>
                    <div className="text-xs text-gray-500">Years experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold">30+</div>
                    <div className="text-xs text-gray-500">Products delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold">100%</div>
                    <div className="text-xs text-gray-500">Regulatory-first</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60" alt="office" className="w-full h-80 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solution" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold">What we do</h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">We partner with asset managers, banks and insurers to design and operate digital investment products — from concept to scale.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card title="End-to-end product development" text="Product strategy, structuring, regulatory setup and launch support for digital investment products." />
              <Card title="Platform & tech" text="Modular tech and integrations to operate funds, ETPs and tokenized assets at scale." />
              <Card title="Operations & servicing" text="Custody, reporting, compliance and middle-office operations tailored to modern asset classes." />
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Products & Services</h3>
              <a href="#insights" className="text-sm text-indigo-700">View case studies →</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProductCard title="ETP Structuring" desc="Design and distribution support for exchange traded products across Europe." />
              <ProductCard title="Digital Funds" desc="From SICAVs to on-chain funds — compliant and scalable fund infrastructure." />
              <ProductCard title="Custom Solutions" desc="Bespoke platforms, APIs and white-label services for financial institutions." />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-white py-16 border-t">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold">About Bondstone</h3>
                <p className="mt-4 text-gray-600">A team of product, regulatory and operations experts helping incumbents navigate the digital asset transition with institutional-grade solutions.</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <MiniStat label="Offices" value="3 (DE, UK, CH)" />
                  <MiniStat label="Team" value="80+" />
                </div>
              </div>

              <div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60" alt="team" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section id="insights" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold">Insights</h3>
              <p className="text-gray-600 mt-2">Latest thinking and case studies from our teams.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InsightCard title="How to launch an ETP" excerpt="A practical guide for asset managers planning their first ETP." />
              <InsightCard title="Operationalising tokenized assets" excerpt="Key operational considerations for tokenized product launches." />
              <InsightCard title="Regulatory checklist" excerpt="What institutions need to prepare for digital investment products." />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold">Start a conversation</h3>
            <p className="text-gray-600 mt-3">Reach out to discuss product ideas, partnerships or distribution.</p>
            <div className="mt-6 flex justify-center gap-4">
              <a className="px-6 py-3 bg-indigo-700 text-white rounded-md" href="#">Contact us</a>
              <a className="px-6 py-3 border rounded-md" href="#">Request a deck</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white border-t py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} Bondstone — Made with care</div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


function Card({ title, text }){
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-3 text-gray-600 text-sm">{text}</p>
    </div>
  );
}

function ProductCard({ title, desc }){
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-3 text-gray-600 text-sm">{desc}</p>
      <a className="mt-4 inline-block text-sm text-indigo-700">Learn more →</a>
    </div>
  );
}

function MiniStat({ label, value }){
  return (
    <div className="p-4 bg-gray-50 rounded-lg text-sm">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function InsightCard({ title, excerpt }){
  return (
    <article className="p-6 bg-white rounded-xl shadow-sm">
      <h5 className="font-semibold text-sm">{title}</h5>
      <p className="mt-3 text-gray-600 text-sm">{excerpt}</p>
      <div className="mt-4 text-xs text-indigo-700">Read →</div>
    </article>
  );
}

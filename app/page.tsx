'use client'; // O folosim pentru interactivitate (ex: butoane, search)

import Link from "next/link";
import { Search, MapPin } from "lucide-react"; // Asigură-te că ai rulat: npm install lucide-react

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navbar simplu de homepage */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border h-[70px] flex items-center justify-between px-[5%]">
        <div className="font-serif text-2xl font-bold">
          Zervo<span className="text-accent">.</span>
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard" className="hidden md:flex items-center text-sm font-medium hover:text-accent transition">
            Pentru Saloane
          </Link>
          <button className="bg-surface border border-border px-4 py-2 rounded-full text-sm font-semibold hover:border-text transition">
            Autentificare
          </button>
        </div>
      </nav>

      {/* Hero Section B2C */}
      <section className="pt-32 pb-20 px-[5%] text-center bg-gradient-to-b from-blue-50 to-background">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
          Găsește specialiști și<br />saloane în orașul tău
        </h1>
        <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
          Programări rapide, fără telefoane, confirmate instant. Peste 200 de saloane de înfrumusețare.
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto bg-white rounded-full flex flex-col md:flex-row shadow-lg border border-border p-2 relative">
          <div className="flex-1 flex items-center px-4 py-2 md:border-r border-border">
            <Search className="w-5 h-5 text-text-muted mr-3" />
            <input 
              type="text" 
              placeholder="Ce serviciu cauți? (ex: Tuns)" 
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex-[0.6] flex items-center px-4 py-2">
            <MapPin className="w-5 h-5 text-brand mr-3" />
            <div className="flex flex-col text-left">
              <span className="text-[11px] text-text-muted font-bold uppercase tracking-wider">Locație detectată</span>
              <span className="text-sm font-medium">Suceava</span>
            </div>
          </div>
          <button className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full font-semibold transition mt-2 md:mt-0">
            Caută
          </button>
        </div>
      </section>

      {/* Apel B2B Footer */}
      <section className="bg-text text-white py-20 px-[5%] text-center mt-20">
        <h2 className="font-serif text-3xl mb-4">Ești proprietar de salon?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Transformă-ți afacerea cu Zervo. Sistem complet de programări, calendar inteligent și notificări automate.
        </p>
        <Link href="/register" className="bg-white text-text px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
          Înregistrează-ți salonul gratuit
        </Link>
      </section>
    </main>
  );
}
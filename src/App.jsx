import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Leaderboard from './components/Leaderboard';

function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-emerald-900/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} EcoPoint+. Edukasi bank sampah berbasis poin, rank, dan reward.
        </p>
        <p>
          Dibuat dengan React & Tailwind.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      <Hero />
      <Features />
      <Leaderboard />
      <Footer />
    </div>
  );
}

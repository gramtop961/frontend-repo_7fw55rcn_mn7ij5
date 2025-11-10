import { Leaf, Trophy, User } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-emerald-700 font-semibold">
          <Leaf className="h-6 w-6" />
          <span>EcoPoint+</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-emerald-900/80 hover:text-emerald-900">Fitur</a>
          <a href="#ranks" className="text-emerald-900/80 hover:text-emerald-900">Rank</a>
          <a href="#leaderboard" className="text-emerald-900/80 hover:text-emerald-900">Leaderboard</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-emerald-200 px-3 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50">
            <User className="h-4 w-4" /> Masuk
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700">
            <Trophy className="h-4 w-4" /> Daftar
          </button>
        </div>
      </nav>
    </header>
  );
}

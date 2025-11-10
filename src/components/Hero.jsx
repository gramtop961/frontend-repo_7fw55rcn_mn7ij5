import React from 'react';
import { ArrowRight, Leaf, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5" /> Anti-cheat & verifikasi admin
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-900">
              EcoPoint+ — Game Edukasi Bank Sampah
            </h1>
            <p className="mt-4 text-emerald-900/80 text-lg leading-relaxed">
              Setor sampah, kumpulkan poin, naikkan rank, dan raih reward. Belajar kelola sampah sambil seru-seruan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow hover:bg-emerald-700">
                Mulai Jelajah <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#leaderboard" className="inline-flex items-center gap-2 rounded-md border border-emerald-200 px-5 py-3 text-emerald-700 font-medium bg-white hover:bg-emerald-50">
                Lihat Leaderboard
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              <div>
                <dt className="text-3xl font-bold text-emerald-900">10+</dt>
                <dd className="text-sm text-emerald-900/70">Jenis sampah didukung</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-emerald-900">100%</dt>
                <dd className="text-sm text-emerald-900/70">Perhitungan di server</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-emerald-900">24/7</dt>
                <dd className="text-sm text-emerald-900/70">Pantauan admin</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 p-2">
              <div className="h-full w-full rounded-xl bg-white p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {["Plastik","Kertas","Logam","Kaca"].map((j, i) => (
                    <div key={i} className="rounded-lg border border-emerald-100 p-4 flex items-center gap-3">
                      <Leaf className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="text-sm font-medium text-emerald-900">{j}</p>
                        <p className="text-xs text-emerald-900/60">Poin otomatis</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

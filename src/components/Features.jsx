import React from 'react';
import { CheckCircle2, ShieldCheck, Crown, Camera } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Anti-Cheat & Verifikasi',
    desc: 'Batas setoran harian, validasi foto, dan verifikasi admin agar adil dan aman.'
  },
  {
    icon: CheckCircle2,
    title: 'Poin Otomatis',
    desc: 'Plastik, kertas, logam memiliki nilai poin berbeda dan dihitung otomatis.'
  },
  {
    icon: Crown,
    title: 'Sistem Rank',
    desc: 'Naikkan rank dari Pemilah Pemula hingga Zero Waste Master untuk reward.'
  },
  {
    icon: Camera,
    title: 'Upload Bukti',
    desc: 'Unggah foto bukti setoran, tampilkan thumbnail, dan lihat ukuran penuh.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-emerald-50/50 border-t border-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-emerald-900">Fitur Utama</h2>
          <p className="mt-2 text-emerald-900/80">Semua yang kamu butuhkan untuk mengelola bank sampah berbasis poin.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl bg-white border border-emerald-100 p-5 shadow-sm">
              <f.icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-3 font-semibold text-emerald-900">{f.title}</h3>
              <p className="mt-1 text-sm text-emerald-900/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

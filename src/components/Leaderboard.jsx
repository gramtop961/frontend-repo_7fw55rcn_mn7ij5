import React from 'react';
import { Trophy, Medal } from 'lucide-react';

const sample = [
  { name: 'Ayu Pratiwi', points: 2140, rank: 'Zero Waste Master' },
  { name: 'Rizky Putra', points: 1730, rank: 'Eco Warrior' },
  { name: 'Bima Saputra', points: 980, rank: 'Pejuang Hijau' },
  { name: 'Siti Rahma', points: 440, rank: 'Pemilah Pemula' },
];

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-emerald-900">Leaderboard</h2>
            <p className="mt-2 text-emerald-900/80">10 pengguna dengan poin tertinggi setiap minggu.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-emerald-700">
            <Trophy className="h-5 w-5" />
            <span className="text-sm font-medium">Top Players</span>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-emerald-100">
            <thead className="bg-emerald-50/60">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-emerald-700 uppercase tracking-wider">Peringkat</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-emerald-700 uppercase tracking-wider">Nama</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-emerald-700 uppercase tracking-wider">Rank</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-emerald-700 uppercase tracking-wider">Poin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {sample.map((row, idx) => (
                <tr key={row.name} className="hover:bg-emerald-50/40">
                  <td className="px-4 py-3 text-sm font-semibold text-emerald-900">
                    <span className="inline-flex items-center gap-2">
                      {idx < 3 ? <Medal className={`h-4 w-4 ${idx===0 ? 'text-yellow-500' : idx===1 ? 'text-slate-400' : 'text-amber-700'}`} /> : <span className="w-4" />}
                      #{idx + 1}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-emerald-900">{row.name}</td>
                  <td className="px-4 py-3 text-sm text-emerald-900/80">{row.rank}</td>
                  <td className="px-4 py-3 text-sm font-medium text-emerald-900">{row.points.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

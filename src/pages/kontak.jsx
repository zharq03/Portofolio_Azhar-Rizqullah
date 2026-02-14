'use client';
import { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  Twitter,  // untuk X/Twitter
  Github, 
  Facebook, 
  Youtube,  // bisa dipakai buat TikTok sementara
  Link2     // alternatif generic link untuk Strava/Threads/Medium
} from 'lucide-react';

const socials = [
  { name: 'Email', icon: Mail, url: 'mailto:azharrizqullah@gmail.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/azharrizqullah' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/azharrizqullah' },
  { name: 'TikTok', icon: Youtube, url: 'https://tiktok.com/@azharrizqullah' },          // pakai Youtube sebagai placeholder
  { name: 'X (Twitter)', icon: Twitter, url: 'https://x.com/azharrizqullah' },
  { name: 'Threads', icon: Link2, url: 'https://threads.net/@azharrizqullah' },          // pakai Link2 generic
  { name: 'Strava', icon: Link2, url: 'https://strava.com/athletes/azharrizqullah' },    // pakai Link2 generic
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/azharrizqullah' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/azharrizqullah' },
  { name: 'Medium', icon: Link2, url: 'https://medium.com/@azharrizqullah' },            // pakai Link2 generic
];

export default function KontakPage() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan berhasil terkirim! (demo – nanti bisa pakai EmailJS)');
    setForm({ nama: '', email: '', pesan: '' });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-6xl font-bold text-center mb-3">Mari Berkolaborasi</h1>
      <p className="text-center mb-16 text-xl">Saya selalu terbuka untuk diskusi proyek baru</p>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Form kontak */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full text-black rounded-2xl px-8 py-5 focus:outline-none focus:border-red-600"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full text-black rounded-2xl px-8 py-5 focus:outline-none focus:border-red-600"
              required
            />
            <textarea
              rows={7}
              placeholder="Pesan / Ide proyek kamu..."
              value={form.pesan}
              onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              className="w-full text-black rounded-2xl px-8 py-5 focus:outline-none focus:border-red-600"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition py-6 rounded-2xl font-bold"
            >
              KIRIM PESAN
            </button>
          </form>
        </div>

        {/* Daftar Sosmed */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-8">Atau hubungi saya di</h3>
          <div className="grid grid-cols-2 gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5  border border-transparent hover:border-red-600 rounded-3xl p-6 transition group"
              >
                <s.icon className="w-10 h-10 text-red-600" strokeWidth={1.5} />
                <div>
                  <div className="font-medium group-hover:text-red-600 transition">{s.name}</div>
                  <div className="text-xs">klik untuk buka</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
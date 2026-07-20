'use client';
import { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  Twitter,  
  Github, 
  Facebook, 
  Youtube,  
  Link2   
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const socials = [
  { name: 'Email', icon: Mail, url: 'mailto:azhar.rizqullah135@gmail.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/azhar-rizqullah-535447309' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/_azhar_riz/' },
  { name: 'TikTok', icon: Youtube, url: 'https://www.tiktok.com/@atzh22' },        
  { name: 'X (Twitter)', icon: Twitter, url: 'https://x.com/Zharq03' },        
  { name: 'Strava', icon: Link2, url: 'https://strava.app.link/pa8DW68v53b' },  
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/people/Azhar-Rizqullah/61550235112183/?locale=id_ID' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/zharq03' },
];

export default function KontakPage() {
  const { language } = useLanguage();
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(language === 'id' ? 'Pesan berhasil terkirim! (demo – nanti bisa pakai EmailJS)' : 'Message sent successfully! (demo – integration with EmailJS coming soon)');
    setForm({ nama: '', email: '', pesan: '' });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-3">
        {language === 'id' ? 'Mari Berkolaborasi' : 'Let\'s Collaborate'}
      </h1>
      <p className="text-center mb-16 text-xl text-zinc-500 dark:text-zinc-400">
        {language === 'id' ? 'Saya selalu terbuka untuk diskusi proyek baru' : 'I am always open to discussing new projects'}
      </p>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Form kontak */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder={language === 'id' ? 'Nama Lengkap' : 'Full Name'}
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full text-black rounded-2xl px-8 py-5 focus:outline-none focus:border-violet-600"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full text-black rounded-2xl px-8 py-5 focus:outline-none focus:border-violet-600"
              required
            />
            <textarea
              rows={7}
              placeholder={language === 'id' ? 'Pesan / Ide proyek Anda...' : 'Your message / project idea...'}
              value={form.pesan}
              onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              className="w-full text-black rounded-2xl px-8 py-5 focus:outline-none focus:border-violet-600"
              required
            />
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 transition py-6 rounded-2xl font-bold text-white uppercase tracking-wider"
            >
              {language === 'id' ? 'KIRIM PESAN' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>

        {/* Daftar Sosmed */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-8">
            {language === 'id' ? 'Atau hubungi saya di' : 'Or reach out to me at'}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5  border border-transparent hover:border-violet-600 rounded-3xl p-6 transition group bg-zinc-100 dark:bg-zinc-900"
              >
                <s.icon className="w-10 h-10 text-violet-600 animate-pulse group-hover:scale-105 transition-transform" strokeWidth={1.5} />
                <div>
                  <div className="font-medium group-hover:text-violet-600 transition">{s.name}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {language === 'id' ? 'klik untuk buka' : 'click to open'}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
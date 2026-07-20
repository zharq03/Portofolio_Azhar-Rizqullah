import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { language } = useLanguage();

  const educationHistory = [
    {
      year: '2022 - 2026',
      name: 'Universitas Amikom Yogyakarta',
      role: language === 'id' ? 'Sarjana Informatika, Fakultas Ilmu Komputer' : 'Bachelor of Informatics, Faculty of Computer Science',
      achievement: 'GPA 3.78 (Cumlaude)',
      details: language === 'id' 
        ? 'Mata kuliah relevan: Manajemen Proyek, Rekayasa Perangkat Lunak, Analisis Kebutuhan, Analisis & Desain Sistem'
        : 'Relevant coursework: Project Management, Software Engineering, Requirements Analysis, System Analysis and Design'
    },
    {
      year: '2024',
      name: 'Studi Independen — Infinite Learning',
      role: 'UI/UX Web Development',
      details: language === 'id'
        ? 'Termasuk metodologi Agile, riset pengguna, siklus hidup desain produk, dan pengiriman proyek berbasis sprint'
        : 'Included Agile methodology, user research, product design lifecycle, and sprint-based project delivery'
    }
  ];

  const workHistory = [
    {
      year: 'Sep – Nov 2025',
      name: 'Scholarstoday.id',
      role: 'Project & Product Support Intern',
      location: language === 'id' 
        ? 'Remot · Tim Agile 5 orang · Platform beasiswa aktif melayani 1.000+ pengguna' 
        : 'Remote · Agile team of 5 · Live educational scholarship platform serving 1,000+ users',
      achievements: language === 'id' ? [
        'Berpartisipasi dalam perencanaan sprint, membantu menentukan prioritas tugas, estimasi lini masa, dan melacak penyelesaian target di setiap siklus pengembangan.',
        'Menjembatani tim desainer dan developer dengan menerjemahkan prototipe Figma menjadi spesifikasi siap implementasi, mengurangi pengerjaan ulang.',
        'Memfasilitasi riset pengguna dan pengujian kegunaan (usability testing) dengan 50+ pengguna akhir, menyintesis temuan menjadi perbaikan produk yang meningkatkan efisiensi navigasi sebesar 25% dan interaksi sebesar 20%.',
        'Membuat dokumentasi proyek berupa spesifikasi fitur, catatan rapat, dan laporan sprint untuk menjaga keselarasan pemangku kepentingan.',
        'Berkontribusi langsung dalam pengiriman profil penerima beasiswa, dashboard acara, dan modul donasi menggunakan React dan Tailwind CSS tepat waktu dengan rilis tanpa kendala.'
      ] : [
        'Participated in sprint planning, helping define task priorities, estimate timelines, and track milestone completion across development cycles.',
        'Bridged design and development teams by translating Figma prototypes into implementation-ready specifications, reducing rework.',
        'Facilitated user research and usability testing with 50+ end users, synthesizing findings into product improvements that lifted navigation efficiency by 25% and engagement by 20%.',
        'Produced project documentation feature specs, meeting notes, and sprint reports to keep stakeholders aligned.',
        'Contributed hands-on to shipping scholar profiles, event dashboards, and donation modules using React and Tailwind CSS, on schedule with zero downtime deployment.'
      ]
    },
    {
      year: 'Jun – Sep 2024',
      name: 'PT. Babylahap Indonesia',
      role: 'Digital Marketing Division Lead',
      location: language === 'id' 
        ? 'Remot · Magang Virtual, Komunikasi Pemasaran' 
        : 'Remote · Virtual Internship, Marketing Communication',
      achievements: language === 'id' ? [
        'Memimpin perencanaan dan eksekusi aktivitas pemasaran digital dalam divisi Komunikasi Pemasaran selama 3 bulan program magang virtual.',
        'Mengoordinasikan strategi konten dan output tim, memperkuat komunikasi lintas divisi dan keterampilan eksekusi kampanye.',
        'Menerapkan praktik komunikasi pemasaran yang nantinya digunakan untuk membangun dan menjalankan kehadiran media sosial Kabar Baik Studio.'
      ] : [
        'Led planning and execution of digital marketing activities within the Marketing Communication division during a 3-month virtual internship.',
        'Coordinated content strategy and team output, strengthening cross-functional communication and campaign execution skills.',
        'Applied marketing communication practices later reused to build and run the social media presence of Kabar Baik Studio.'
      ]
    }
  ];

  const orgHistory = [
    {
      year: '2023 – 2024',
      name: 'AMIKOM Table Tennis Association',
      role: language === 'id' ? 'Koordinator Divisi Kreatif' : 'Creative Division Coordinator',
      achievements: language === 'id' ? [
        'Memimpin dan mengoordinasikan tim kreatif, mengelola perencanaan konten, pendelegasian tugas, dan lini masa pengiriman untuk kampanye media sosial; meningkatkan interaksi sebesar 30%.'
      ] : [
        'Led and coordinated a creative team, managing content planning, task delegation, and delivery timelines for social media campaigns; grew engagement by 30%.'
      ]
    },
    {
      year: '2023 – 2024',
      name: 'Sambas Regency Students Dormitory',
      role: language === 'id' ? 'Sekretaris' : 'Secretary',
      achievements: language === 'id' ? [
        'Mengelola operasional administratif, dokumentasi, dan komunikasi pemangku kepentingan untuk 20+ anggota komunitas; membuat notulensi rapat dan melacak tindak lanjut poin aksi.'
      ] : [
        'Managed administrative operations, documentation, and stakeholder communications for a 20+ member community; produced meeting minutes and tracked follow-through on action items.'
      ]
    }
  ];

  return (
    <section id="pengalaman" className="space-y-16 max-w-5xl mx-auto">
      {/* Pengalaman Bekerja */}
      <div className="card">
        <h3 className="text-3xl font-bold text-accent-red mb-10 text-center md:text-left border-b border-gray-200 dark:border-gray-800 pb-4">
          {language === 'id' ? 'Pengalaman Kerja' : 'Work Experience'}
        </h3>
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-zinc-300 dark:before:bg-zinc-800">
          {workHistory.map((item, i) => (
            <div key={i} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
              {/* Marker dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent-red border-4 border-zinc-100 dark:border-zinc-950 transform -translate-x-1.5 md:-translate-x-2"></div>
              
              <div className="pl-10 md:pl-0 md:w-[45%] text-left md:text-right">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-red bg-violet-100 dark:bg-violet-950/50 rounded-full mb-2">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-semibold">{item.role}</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 italic">{item.location}</p>
              </div>

              <div className="pl-10 md:pl-0 md:w-[45%] mt-4 md:mt-0 text-left">
                <ul className="list-disc pl-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="leading-relaxed">{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Riwayat Pendidikan */}
      <div className="card">
        <h3 className="text-3xl font-bold text-accent-red mb-10 text-center md:text-left border-b border-gray-200 dark:border-gray-800 pb-4">
          {language === 'id' ? 'Riwayat Pendidikan' : 'Education History'}
        </h3>
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-zinc-300 dark:before:bg-zinc-800">
          {educationHistory.map((item, i) => (
            <div key={i} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
              {/* Marker dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent-red border-4 border-zinc-100 dark:border-zinc-950 transform -translate-x-1.5 md:-translate-x-2"></div>
              
              <div className="pl-10 md:pl-0 md:w-[45%] text-left md:text-right">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-red bg-violet-100 dark:bg-violet-950/50 rounded-full mb-2">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-semibold">{item.role}</p>
              </div>

              <div className="pl-10 md:pl-0 md:w-[45%] mt-2 md:mt-0 text-left">
                {item.achievement && (
                  <p className="text-sm font-semibold text-accent-red mb-1">{item.achievement}</p>
                )}
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pengalaman Organisasi */}
      <div className="card">
        <h3 className="text-3xl font-bold text-accent-red mb-10 text-center md:text-left border-b border-gray-200 dark:border-gray-800 pb-4">
          {language === 'id' ? 'Pengalaman Organisasi' : 'Organizational Experience'}
        </h3>
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-zinc-300 dark:before:bg-zinc-800">
          {orgHistory.map((item, i) => (
            <div key={i} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
              {/* Marker dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent-red border-4 border-zinc-100 dark:border-zinc-950 transform -translate-x-1.5 md:-translate-x-2"></div>
              
              <div className="pl-10 md:pl-0 md:w-[45%] text-left md:text-right">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-red bg-violet-100 dark:bg-violet-950/50 rounded-full mb-2">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-semibold">{item.role}</p>
              </div>

              <div className="pl-10 md:pl-0 md:w-[45%] mt-2 md:mt-0 text-left">
                <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="leading-relaxed">{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
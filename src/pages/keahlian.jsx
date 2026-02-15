'use client';
import { html, u } from 'framer-motion/client';
import { useState } from 'react';
import arduino from '../assets/icons/arduino.png';
import css from '../assets/icons/css3.png';
import flask from '../assets/icons/flask.png';
import flutter from '../assets/icons/flutter.png';
import htmll from '../assets/icons/html5.png';
import js from '../assets/icons/js.png';
import kotlin from '../assets/icons/kotlin.png';
import laravel from '../assets/icons/laravel.png';
import mysql from '../assets/icons/mysql.png';
import nextjs from '../assets/icons/nextjs.png';
import nodejs from '../assets/icons/nodejs.png';
import php from '../assets/icons/php.png';
import python from '../assets/icons/python.png';
import react from '../assets/icons/reactjs.png';
import ui from '../assets/icons/ui.png';
import ux from '../assets/icons/ux.png';
import vuejs from '../assets/icons/vuejs.png';

const tabs = [
  { id: 'frontend', label: 'FRONT END' },
  { id: 'backend', label: 'BACK END' },
  { id: 'mobile', label: 'MOBILE' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'iot', label: 'IOT' },
];

const skillsData = {
  frontend: [
    {
      name: 'HTML',
      image: htmll,
      desc: 'HTML, atau HyperText Markup Language, adalah bahasa markup yang digunakan untuk membuat struktur dasar sebuah halaman web. Dengan HTML, Anda dapat menentukan bagaimana konten pada halaman web Anda akan diorganisir dan ditampilkan di browser.',
    },
    {
      name: 'CSS',
      image: css,
      desc: 'CSS, atau Cascading Style Sheets, adalah bahasa yang digunakan untuk memberikan gaya atau tata letak (styling) pada elemen-elemen HTML. Dengan CSS, Anda dapat mengendalikan tampilan visual dari halaman web Anda secara terpisah dari struktur.',
    },
    {
      name: 'JavaScript',
      image: js,
      desc: 'JavaScript adalah bahasa pemrograman dinamis yang membuat website interaktif. Saya menggunakannya untuk menangani logika sisi klien, manipulasi DOM, event handling, serta integrasi API dan state management pada aplikasi web modern.',
    },
    {
      name: 'React',
      image: react,
      desc: 'React adalah library JavaScript open-source yang populer untuk membangun antarmuka pengguna (user interface) yang interaktif, cepat, dan reusable. Cocok untuk aplikasi web modern dan single-page application (SPA). Saya sering menggunakannya bersama hooks, context, dan state management seperti Zustand atau Redux.',
    },
    {
      name: 'Next.js',
      image: nextjs,
      desc: 'Next.js adalah framework React full-stack yang powerful untuk membangun aplikasi web performa tinggi dengan fitur seperti Server-Side Rendering (SSR), Static Site Generation (SSG), API Routes, dan App Router. Saya menggunakannya untuk proyek yang butuh SEO baik dan loading cepat.',
    },
    {
      name: 'Vue.js',
      image: vuejs,
      desc: 'Vue.js adalah framework JavaScript progresif yang ringan dan fleksibel untuk membangun UI. Saya menggunakannya untuk proyek-proyek yang membutuhkan komponen reaktif, two-way data binding, dan kemudahan integrasi dengan library lain seperti Pinia untuk state management.',
    },
  ],
  backend: [
    {
      name: 'MySQL',
      image: mysql,
      desc: 'MySQL adalah sistem manajemen database relasional open-source yang andal dan performan tinggi. Saya menggunakannya untuk merancang skema database, query kompleks dengan JOIN, indexing, serta integrasi dengan backend PHP, Laravel, atau Node.js.',
    },
    {
      name: 'PHP',
      image: php,
      desc: 'PHP adalah bahasa scripting server-side yang masih sangat populer untuk pengembangan web dinamis. Saya menggunakannya untuk membangun backend sederhana hingga menengah, terutama dikombinasikan dengan framework Laravel untuk aplikasi yang lebih scalable.',
    },
    {
      name: 'Python',
      image: python,
      desc: 'Python adalah bahasa pemrograman serbaguna yang saya gunakan untuk backend (Flask), scripting, otomatisasi, data processing, dan eksplorasi data mining. Sintaksnya yang bersih membuatnya sangat cepat untuk prototyping dan pengembangan.',
    },
    {
      name: 'Laravel',
      image: laravel,
      desc: 'Laravel adalah framework PHP elegan dengan fitur MVC, Eloquent ORM, Blade templating, routing, authentication, dan queue system. Saya menggunakannya untuk membangun aplikasi web full-stack dengan backend yang aman, scalable, dan mudah dikelola.',
    },
    {
      name: 'Flask',
      image: flask,
      desc: 'Flask adalah micro-framework Python yang ringan dan fleksibel untuk membangun API RESTful atau aplikasi web kecil hingga menengah. Cocok untuk proyek cepat, integrasi machine learning, atau backend yang tidak butuh fitur berat seperti Laravel.',
    },
    {
      name: 'Node.js',
      image: nodejs,
      desc: 'Node.js memungkinkan saya menjalankan JavaScript di server-side. Saya menggunakannya untuk membangun API cepat dengan Express.js, real-time features dengan Socket.io, serta integrasi database dan microservices.',
    },
  ],
  mobile: [
    {
      name: 'Flutter',
      image: flutter,
      desc: 'Flutter adalah UI toolkit dari Google untuk membangun aplikasi mobile native yang indah dari satu codebase (Android & iOS). Saya menggunakannya dengan Dart untuk membuat aplikasi cross-platform dengan performa tinggi dan animasi halus.',
    },
    {
      name: 'Kotlin',
      image: kotlin,
      desc: 'Kotlin adalah bahasa modern untuk pengembangan Android native. Saya menggunakannya untuk membangun aplikasi Android dengan sintaks yang lebih ringkas dan aman dibanding Java, serta integrasi dengan Jetpack Compose untuk UI modern.',
    },
  ],
  uiux: [
    {
      name: 'UI Design',
      image: ui,
      desc: 'UI Design fokus pada elemen visual dan interaksi pengguna. Saya merancang antarmuka yang intuitif, konsisten, dan estetis menggunakan prinsip desain seperti hierarchy, alignment, contrast, dan accessibility untuk meningkatkan user experience.',
    },
    {
      name: 'UX Design',
      image: ux,
      desc: 'UX Design berfokus pada pengalaman pengguna secara keseluruhan. Saya melakukan user research, membuat wireframe, user flow, prototype, dan usability testing untuk memastikan aplikasi mudah digunakan, efisien, dan memuaskan bagi pengguna.',
    },
  ],
  iot: [
    {
      name: 'Arduino',
      image: arduino,
      desc: 'Arduino adalah platform open-source untuk prototipe IoT dan embedded system. Saya menggunakannya untuk membangun proyek sensor, kontrol perangkat, monitoring data real-time, serta integrasi dengan aplikasi mobile atau web melalui komunikasi serial/WiFi.',
    },
  ],
};

export default function KeahlianPage() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tight">
        Tech Stack Expertise
      </h1>
      <p className="text-center text-gray-400 mb-16 text-lg md:text-xl">
        Teknologi yang saya kuasai dan suka pakai sehari-hari
      </p>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-16 md:mb-20">
        <div className="inline-flex bg-zinc-900/80 backdrop-blur-sm rounded-full p-1.5 border border-zinc-800/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Cards - Alternating Layout + Alternating Text Alignment */}
      <div className="space-y-16 md:space-y-24">
        {skillsData[activeTab]?.map((skill, index) => {
          const isEven = index % 2 === 0; // true = foto kiri + teks rata kiri

          return (
            <div
              key={skill.name}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
            >
              {/* Logo */}
              <div
                className={`w-48 h-48 md:w-64 md:h-64 flex-shrink-0 transition-transform duration-500 group-hover:scale-105 ${
                  isEven ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Teks */}
              <div
                className={`flex-1 space-y-4 ${
                  isEven
                    ? 'md:order-2 md:text-left'   // ← foto kiri → teks rata kiri
                    : 'md:order-1 md:text-right'  // ← foto kanan → teks rata kanan
                }`}
              >
                <div
                  className={`text-xs uppercase tracking-widest text-gray-500 font-medium ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  Keahlian {index + 1}
                </div>

                <h3
                  className={`text-4xl md:text-5xl font-bold text-white tracking-tight ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  {skill.name}
                </h3>

                <p
                  className={`text-gray-300 leading-relaxed text-base md:text-lg ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  {skill.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {(!skillsData[activeTab] || skillsData[activeTab].length === 0) && (
        <div className="text-center py-20 text-gray-400 text-xl">
          Belum ada data keahlian untuk kategori ini.
        </div>
      )}
    </div>
  );
}
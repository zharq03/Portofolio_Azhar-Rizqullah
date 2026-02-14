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
      name: 'js',
      logo: js,
      desc: '',
    },
    {
      name: 'React',
      logo: react,
      desc: 'React adalah library JavaScript open-source yang populer untuk membangun antarmuka pengguna (user interface) yang interaktif, cepat, dan reusable. Cocok untuk aplikasi web modern dan single-page application (SPA).',
    },
    {
      name: 'nextjs',
      logo: nextjs,
      desc: '',
    },
    {
      name: 'vuejs',
      logo: vuejs,
      desc: '',
    },
  ],
  backend: [
    {
      name: 'Mysql',
      image: mysql,
      desc: '.',
    },
    {
      name: 'php',
      logo: php,
      desc: '',
    },
    {
      name: 'python',
      logo: python,
      desc: '',
    },
    {
      name: 'laravel',
      image: laravel,
      desc: '.',
    },
    {
      name: 'flask',
      logo: flask,
      desc: '',
    },
    {
      name: 'nodejs',
      logo: nodejs,
      desc: '',
    },
  ],
  mobile: [

    {
      name: 'kotlin',
      image: kotlin,
      desc: '',
    },
    {
      name: 'flutter',
      image: flutter,
      desc: '',
    },
  ],
  uiux: [
    {
      name: 'ui',
      image: ui,
      desc: '',
    },
    {
      name: 'ux',
      image: ux,
      desc: '',
    },

  ],
  iot: [
    {
      name: 'arduino',
      image: arduino,
      desc: '',
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
                  src={skill.logo}
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
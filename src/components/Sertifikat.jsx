import React from 'react';
import amksImage from '../assets/images/amks.png';
import babylahapImage from '../assets/images/babylahap.png';
import travelImage from '../assets/images/travel.png';
import kressImage from '../assets/images/kress.png';
import amkssImage from '../assets/images/Amkss.png';
import sonbrosImage from '../assets/images/sonbros.png';
import facedx from '../assets/images/FaceDX.png';
import Edufarm from '../assets/images/EduFarm.png';

const sertifikat = [
  {
    image: facedx,
    alt: 'FaceDX Certificate',
    title: 'FaceDX Development',
    date: 'Januari 2023',
    description: 'Diberikan atas keberhasilan merancang dan mengembangkan aplikasi perawatan wajah berbasis deep learning dengan fitur chatbot kecantikan.',
  },
  {
    image: amkssImage,
    alt: 'AMKS Portfolio Certificate',
    title: 'Profile AMKS Website',
    date: 'Maret 2023',
    description: 'Diberikan atas kontribusi dalam merancang dan mengembangkan website portofolio AMKS dengan desain modern menggunakan React.js dan Tailwind CSS.',
  },
  {
    image: Edufarm,
    alt: 'Edufarm Certificate',
    title: 'WebAPP Edufarm',
    date: 'Juni 2023',
    description: 'Diberikan atas kerja tim dalam mengembangkan aplikasi pembelajaran pertanian Edufarm, dengan fokus pada desain UI/UX dan pengembangan frontend.',
  },
  {
    image: sonbrosImage,
    alt: 'Sonbros Wedding Certificate',
    title: 'Website Katalog Sonbros',
    date: 'September 2023',
    description: 'Diberikan atas pendirian dan pengembangan website katalog undangan pernikahan Sonbros sebagai full-stack developer.',
  },
  {
    image: kressImage,
    alt: 'Kress Catalog Certificate',
    title: 'Website Katalog Kress',
    date: 'Desember 2023',
    description: 'Diberikan atas pengembangan website katalog untuk proyek kripik singkong Kress dengan antarmuka dinamis menggunakan React.js.',
  },
  {
    image: amksImage,
    alt: 'AMKS Yearbook Certificate',
    title: 'Website Yearbook AMKS',
    date: 'Februari 2024',
    description: 'Diberikan atas pengembangan website yearbook responsif untuk Asrama AMKS dengan desain UI/UX yang mencerminkan semangat komunitas.',
  },
  {
    image: babylahapImage,
    alt: 'Baby Lahap Certificate',
    title: 'Pemasaran Baby Lahap',
    date: 'Mei 2024',
    description: 'Diberikan atas kepemimpinan dalam mengelola acara Instagram Live tentang nutrisi anak dan strategi pemasaran konten.',
  },
  {
    image: travelImage,
    alt: 'Wisata Lokal Certificate',
    title: 'Website Wisata Lokal',
    date: 'Agustus 2024',
    description: 'Diberikan atas pengembangan website wisata lokal dengan desain responsif dan pengalaman pengguna intuitif menggunakan PHP dan Bootstrap.',
  },
];

const Sertifikat = () => (
  <section id="sertifikat" className="py-12">
    <div className="mx-auto max-w-6xl text-center">
      <h3 className="text-lg text-blue-500">Sertifikat Pengalaman</h3>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Sertifikat Pengalaman</h1>
      <div className="mt-8 grid grid-cols-1 gap-8">
        {sertifikat.map((sertifikat, index) => (
          <div
            key={sertifikat.title}
            className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700 flex flex-col md:flex-row"
          >
            <img
              src={sertifikat.image}
              alt={sertifikat.alt}
              className={`h-48 w-full md:w-[35%] object-cover ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}
            />
            <div
              className={`p-6 w-full md:w-[65%] ${index % 2 === 0 ? 'md:order-last text-left' : 'md:order-first text-right'}`}
            >
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{sertifikat.title}</h4>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{sertifikat.date}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{sertifikat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Sertifikat;
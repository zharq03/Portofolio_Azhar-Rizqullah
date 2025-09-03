import React, { useState, useEffect } from 'react';
import ciscoImage from '../assets/images/cisco.png';
import infiniteImage from '../assets/images/infinite.png';
import msibImage from '../assets/images/msib.png';
import devvestImage from '../assets/images/devvest.png';
import babylahapImage1 from '../assets/images/babylahap.png';
import babylahapImage2 from '../assets/images/surat.png';

const sertifikat = [
  {
    image: msibImage,
    alt: 'MSIB Batch 7 Certificate',
    title: 'Peserta MSIB Batch 7 - PT Kinema Systrans Multimedia',
    date: 'Januari 2025',
    description: 'Diberikan atas keberhasilan menyelesaikan program MSIB Batch 7 di PT Kinema Systrans Multimedia.',
  },
  {
    image: infiniteImage,
    alt: 'Infinite Learning Internship Certificate',
    title: 'Magang Web Development - Infinite Learning',
    date: '6 September - 31 Desember 2024',
    description: 'Diberikan atas penyelesaian magang di Infinite Learning sebagai pengembang web, dengan kontribusi pada pembangunan aplikasi web menggunakan React.js, Tailwind CSS, dan Node.js, serta merancang antarmuka pengguna yang responsif untuk proyek klien nyata.',
  },
  {
    image: devvestImage,
    alt: 'Devvest Coder Competition Certificate',
    title: 'Apresiasi Peserta Devvest Coder Competition',
    date: '28-29 November 2024',
    description: 'Diberikan atas partisipasi aktif dalam lomba Devvest oleh Innoverse di Batam, dengan menyelesaikan tantangan pengembangan aplikasi berbasis web, merancang solusi kode yang efisien, dan mempresentasikan proyek kepada panel juri.',
  },
  {
    images: [babylahapImage1, babylahapImage2],
    alt: 'Baby Lahap Internship Certificate',
    title: 'Magang Marketing Communication - Baby Lahap',
    date: '9 September 2024',
    description: 'Diberikan atas keberhasilan memimpin Divisi Marketing Communication di Baby Lahap, dengan tugas merancang strategi pemasaran digital, mengelola acara Instagram Live tentang nutrisi anak, membuat konten promosi menggunakan Canva, dan memperoleh surat rekomendasi dari PT Baby Lahap Indonesia atas kinerja luar biasa.',
  },
  {
    image: ciscoImage,
    alt: 'Cisco Networking Academy Certificate',
    title: 'Cisco Networking Academy',
    date: '5 Januari 2024',
    description: 'Diberikan atas keberhasilan menyelesaikan pelatihan Cisco Networking Academy, termasuk konfigurasi jaringan, manajemen perangkat jaringan menggunakan Cisco Packet Tracer, dan pemahaman protokol jaringan seperti TCP/IP dan OSPF.',
  },
];

const Sertifikat = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <section id="sertifikat" className="py-12">
      <div className="mx-auto max-w-6xl text-center">
        <h3 className="text-lg text-blue-500">Pencapaian Profesional</h3>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">Sertifikat & Pengalaman</h1>
        <div className="mt-8 grid grid-cols-1 gap-8">
          {sertifikat.map((sertifikat, index) => (
            <div
              key={sertifikat.title}
              className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700 flex flex-col md:flex-row"
            >
              {sertifikat.images ? (
                <a
                  href={sertifikat.images[currentImageIndex]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-[35%] aspect-[4/3] md:aspect-[3/2]"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(sertifikat.images[currentImageIndex]);
                  }}
                >
                  <img
                    src={sertifikat.images[currentImageIndex]}
                    alt={sertifikat.alt}
                    className={`w-full h-full object-cover ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}
                  />
                </a>
              ) : (
                <a
                  href={sertifikat.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-[35%] aspect-[4/3] md:aspect-[3/2]"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(sertifikat.image);
                  }}
                >
                  <img
                    src={sertifikat.image}
                    alt={sertifikat.alt}
                    className={`w-full h-full object-cover ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}
                  />
                </a>
              )}
              <div
                className={`p-6 w-full md:w-[65%] flex flex-col justify-center ${index % 2 === 0 ? 'md:order-last text-right' : 'md:order-first text-left'}`}
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{sertifikat.title}</h4>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{sertifikat.date}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{sertifikat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Zoom Effect */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Zoomed Certificate"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black hover:bg-gray-200 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sertifikat;
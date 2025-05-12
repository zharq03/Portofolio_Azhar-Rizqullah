import React from 'react';

const Hero = () => (
  <section id="hero" className="flex flex-col md:flex-row items-center justify-between p-8 max-w-6xl mx-auto">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h3 className="text-lg text-blue-500">Nama saya</h3>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        Azhar <span className="text-blue-500">Rizqullah</span>
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Mahasiswa semester Enam jurusan Informatika di Universitas AMIKOM Yogyakarta. Saya memiliki pengalaman dalam komunikasi pemasaran dan manajemen proyek, dan saat ini sedang memperluas keterampilan saya di pengembangan web dan desain UI/UX melalui program Studi Independen dengan Infinite Learning.
      </p>
    </div>
    <div className="md:w-1/2">
      <img src="/images/Azhar.png" alt="Azhar Rizqullah" className="w-full h-auto" />
    </div>
  </section>
);

export default Hero;
import React from 'react';

const Projects = () => (
  <section id="projects" className="py-12">
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-lg text-blue-500">Proyek Saya</h3>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Proyek Terbaru</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
          <img src="/images/amks.png" alt="Website Yearbook" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Proyek Website Yearbook untuk Asrama AMKS</h4>
            <div className="flex space-x-2 mt-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 rounded">Full-Stack Developer</span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 rounded">Desainer UI/UX</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Mengembangkan website yearbook responsif untuk Asrama AMKS menggunakan HTML dan CSS, mencapai desain UI/UX dengan fidelitas tinggi yang mencerminkan semangat komunitas.</p>
            <h4 className="mt-4 text-gray-800 dark:text-white">HTML, CSS</h4>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
          <img src="/images/babylahap.png" alt="Baby Lahap" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Proyek Pemasaran Baby Lahap</h4>
            <div className="flex space-x-2 mt-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 rounded">Pemimpin Tim Komunikasi Pemasaran</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Menyelenggarakan dan mengelola acara Instagram Live tentang nutrisi anak. Mengawasi strategi konten, interaksi audiens, dan analisis performa.</p>
            <h4 className="mt-4 text-gray-800 dark:text-white">Canva, Instagram Insights, Pengeditan Video</h4>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
          <img src="/images/travel.png" alt="Wisata Lokal" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Proyek Website Wisata Lokal</h4>
            <div className="flex space-x-2 mt-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 rounded">Front End</span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 rounded">Desainer UI/UX</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Mengembangkan website wisata lokal yang di-host di localhost, menggunakan PHP, HTML, CSS, dan Bootstrap untuk desain responsif. Membuat UI/UX untuk pengalaman pengguna yang intuitif.</p>
            <h4 className="mt-4 text-gray-800 dark:text-white">PHP, HTML, CSS, Bootstrap</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
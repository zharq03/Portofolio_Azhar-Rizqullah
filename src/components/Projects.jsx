import React from 'react';
import amksImage from '../assets/images/amks.png';
import babylahapImage from '../assets/images/babylahap.png';
import travelImage from '../assets/images/travel.png';
import kressImage from '../assets/images/kress.png';
import amkssImage from '../assets/images/Amkss.png';
import sonbrosImage from '../assets/images/sonbros.png';
import facedx from '../assets/images/FaceDX.png';
import Edufarm from '../assets/images/EduFarm.png';


const Projects = () => (
  <section id="projects" className="py-12">
    <div className="mx-auto max-w-6xl text-center">
      <h3 className="text-lg text-blue-500">Proyek Saya</h3>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Proyek Terbaru</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700">
          <img src={facedx} alt="FaceDX" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">FaceDX</h4>
            <div className="mt-2 flex space-x-2">
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Mengembangkan Deep learning</span>
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Membuat Chatbot</span>
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Desainer UI/UX</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Merancang dan mengembangkan aplikasi perawatan wajah yang berbasi deep learning dan dengan tambahan asisten khusus kecantikan berupa chatbot.
            </p>
            <h4 className="mt-4 text-gray-800 dark:text-white">Figma, Flowise, Kotlin dan Mobilenet</h4>
            <a
              href="https://github.com/RivalRasyid/mobile-app-dev/releases/download/FaceDXv2/FaceDX.V2.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              Download Aplikasinya
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700">
          <img src={amkssImage} alt="AMKS Portofolio" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Profile AMKS</h4>
            <div className="mt-2 flex space-x-2">
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Front-End Developer</span>
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Desainer UI/UX</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Merancang dan mengembangkan website portofolio untuk AMKS menggunakan React.js dan Tailwind CSS, dengan desain UI/UX di Figma untuk tampilan modern.
            </p>
            <h4 className="mt-4 text-gray-800 dark:text-white">Figma, React.js, Tailwind CSS</h4>
            <a
              href="https://www.amks.web.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              Kunjungi Website
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700">
          <img src={Edufarm} alt="Edufarm" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">WebAPP Edufarm</h4>
            <div className="mt-2 flex space-x-2">
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Desainer UI/UX</span>
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Frontent Developer Web</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Berkerja dalam tim Merge web dan mobile mengembangkan aplikasi Edufarm, seperti namanya. sebuah aplikasi pembelajaran terkait materi materi di bidang pertanian.
            </p>
            <h4 className="mt-4 text-gray-800 dark:text-white">React.js, Tailwind CSS, Figma</h4>
            <a
              href="https://appetize.io/app/b_f74czjtfovtbemmnhbh3xrug2m"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              Kunjungi Aplikasinya
            </a>
            <p>
            </p>
            <a
              href="https://edufarm-ramas-projects-5fc87afb.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              Kunjungi Websitenya
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700">
          <img src={sonbrosImage} alt="Sonbros Wedding" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Website Katalog Sonbros</h4>
            <div className="mt-2 flex space-x-2">
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Founder</span>
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Full-Stack Developer</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Mendirikan dan mengembangkan website katalog undangan pernikahan Sonbros menggunakan React.js, Tailwind CSS, dan desain UI/UX di Figma.
            </p>
            <h4 className="mt-4 text-gray-800 dark:text-white">React.js, Tailwind CSS, Figma</h4>
            <a
              href="https://www.sonbrosweding.my.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              Kunjungi Website
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700">
          <img src={kressImage} alt="Kress Catalog" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Website Katalog Kress</h4>
            <div className="mt-2 flex space-x-2">
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Full-Stack Developer</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Mengembangkan website katalog untuk Kress, sebuah proyek kripik singkong, menggunakan React.js untuk antarmuka dinamis dan fungsionalitas full-stack.
            </p>
            <h4 className="mt-4 text-gray-800 dark:text-white">React.js</h4>
            <a
              href="https://kress.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              Kunjungi Website
            </a>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700">
          <img src={amksImage} alt="Website Yearbook" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Proyek Website Yearbook untuk Asrama AMKS</h4>
            <div className="mt-2 flex space-x-2">
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Full-Stack Developer</span>
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Desainer UI/UX</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Mengembangkan website yearbook responsif untuk Asrama AMKS menggunakan HTML dan CSS, mencapai desain UI/UX dengan fidelitas tinggi yang mencerminkan semangat komunitas.
            </p>
            <h4 className="mt-4 text-gray-800 dark:text-white">HTML, CSS</h4>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700">
          <img src={babylahapImage} alt="Baby Lahap" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Proyek Pemasaran Baby Lahap</h4>
            <div className="mt-2 flex space-x-2">
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Pemimpin Tim Komunikasi Pemasaran</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Menyelenggarakan dan mengelola acara Instagram Live tentang nutrisi anak. Mengawasi strategi konten, interaksi audiens, dan analisis performa.
            </p>
            <h4 className="mt-4 text-gray-800 dark:text-white">Canva, Instagram Insights, Pengeditan Video</h4>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700">
          <img src={travelImage} alt="Wisata Lokal" className="h-48 w-full object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Proyek Website Wisata Lokal</h4>
            <div className="mt-2 flex space-x-2">
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Front End</span>
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800 dark:bg-blue-600 dark:text-blue-200">Desainer UI/UX</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Mengembangkan website wisata lokal yang di-host di localhost, menggunakan PHP, HTML, CSS, dan Bootstrap untuk desain responsif. Membuat UI/UX untuk pengalaman pengguna yang intuitif.
            </p>
            <h4 className="mt-4 text-gray-800 dark:text-white">PHP, HTML, CSS, Bootstrap</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
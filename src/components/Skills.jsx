import React from 'react';

const Skills = () => (
  <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Keterampilan & Pendidikan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="flex mb-6">
            <div className="w-4 bg-blue-500 rounded-full"></div>
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Studi Independen - Infinite Learning</h4>
              <p className="text-gray-600 dark:text-gray-300">Pengembang Web UI/UX</p>
              <h4 className="text-gray-800 dark:text-white">2024 - ...</h4>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="w-4 bg-blue-500 rounded-full"></div>
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Universitas AMIKOM - Yogyakarta</h4>
              <p className="text-gray-600 dark:text-gray-300">Mahasiswa Informatika</p>
              <h4 className="text-gray-800 dark:text-white">2022 - ...</h4>
            </div>
          </div>
          <div className="flex">
            <div className="w-4 bg-blue-500 rounded-full"></div>
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Madrasah Aliyah Negri - Sambas</h4>
              <p className="text-gray-600 dark:text-gray-300">Matematika dan Ilmu Pengetahuan Alam</p>
              <h4 className="text-gray-800 dark:text-white">2019 - 2022</h4>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Saya sedang mengejar gelar Sarjana di bidang Informatika. Saya telah mempelajari berbagai bahasa pemrograman dan alat, termasuk PHP, Python, Git, HTML, CSS, C++, dan C#. Saya juga meningkatkan keterampilan saya melalui studi di Infinite Learning, dengan fokus pada JavaScript dan React.js. Berikut adalah ringkasan keterampilan teknis saya.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>React JS</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>PHP</li>
            </ul>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>MySQL</li>
              <li>Python</li>
              <li>C#</li>
              <li>C++</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
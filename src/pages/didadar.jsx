// src/pages/didadar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import AzharImage from '../assets/images/amikom.jpeg';
import zhar from '../assets/images/last.png';

const Didadar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-01-15T11:00:00+07:00'); // WIB = UTC+7

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <>
      {/* Pesan desktop - tetap */}
      <div className="hidden md:flex min-h-screen items-center justify-center bg-purple-950 p-6">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-purple-300 mb-4">
            Undangan Sidang Pendadaran
          </h2>
          <p className="text-lg text-purple-200">
            Buka di handphone untuk pengalaman terbaik ya
          </p>
        </div>
      </div>

      {/* Mobile view - dominan ungu, modern */}
      <div className="md:hidden min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-purple-900/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-purple-700/30">
          {!isOpen ? (
            // Cover modern
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-[100vh] flex flex-col items-center justify-center px-6 text-center space-y-8"
            >
              <motion.img
                src={AzharImage}
                alt="Azhar Rizqullah"
                className="w-44 h-44 object-cover rounded-full border-4 border-purple-500/50 shadow-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              />

              <h1 className="text-4xl font-bold text-yellow-300">
                Sidang Pendadaran
              </h1>
              <h2 className="text-5xl font-extrabold text-white bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Azhar Rizqullah
              </h2>

              <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Buka Undangan
              </motion.button>
            </motion.div>
          ) : (
            // Halaman isi - modern, ungu dominan
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="min-h-[100vh] flex flex-col py-10 px-6 text-center space-y-10 text-purple-100"
            >
              <motion.img
                src={zhar}
                alt="Azhar Rizqullah"
                className="w-32 h-32 object-cover rounded-full border-4 border-purple-500/40 shadow-lg mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              />

              <p className="text-xl font-medium">
                Assalamu'alaikum warahmatullahi wabarakatuh
              </p>

              <p className="text-base leading-relaxed">
                Dengan penuh syukur, saya mengundang Teman Teman seperjuangan saya yang terkasih untuk hadir di momen berharga ini.
              </p>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-yellow-500">Sidang Pendadaran</h3>
                <p className="text-lg font-semibold text-white">Kamis, 15 Januari 2026</p>
                <p className="text-lg font-semibold text-white">Pukul 11:00 WIB</p>
              </div>

              {/* Countdown modern */}
              <div className="bg-purple-800/40 rounded-2xl p-6 border border-yellow-600/30">
                <h4 className="text-lg font-medium text-yellow-500 mb-4">Hitung Mundur Acara</h4>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">{pad(timeLeft.days)}</div>
                    <div className="text-xs text-white">Hari</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{pad(timeLeft.hours)}</div>
                    <div className="text-xs text-white">Jam</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{pad(timeLeft.minutes)}</div>
                    <div className="text-xs text-white">Menit</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{pad(timeLeft.seconds)}</div>
                    <div className="text-xs text-white">Detik</div>
                  </div>
                </div>
              </div>

              {/* Card Lokasi */}
              <div className="bg-purple-800/40 rounded-2xl p-6 border border-yellow-600/30">
                <h3 className="text-xl font-semibold text-white mb-4">Lokasi</h3>
                <img
                  src={AzharImage}
                  alt="Gedung Sidang"
                  className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
                />
                <div className="flex items-center justify-center gap-2 text-yellow-300">
                  <MapPin size={20} />
                  <a
                    href="https://maps.app.goo.gl/t8ZHT8Bk2tVStKEN8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium hover:text-yellow-300 transition"
                  >
                    Buka Google Maps
                  </a>
                </div>
              </div>

              <p className="text-base leading-relaxed">
                Kehadiran Anda adalah anugerah terbesar. Anda adalah orang spesial yang telah menemani perjalanan saya.
              </p>

              <p className="text-base text-yellow-300 leading-relaxed">
                Tidak perlu hadiah, cukup bawa amplop doa dan senyuman saja. Terima kasih banyak.
              </p>

              <p className="text-base leading-relaxed">
                Terima kasih telah menjadi teman perantauan di Jogja — penuh cerita, tawa, dan kehangatan. Kalian seperti keluarga bagiku di tanah ini.
              </p>

              <p className="text-xl font-medium text-yellow-300 mt-6">
                Jangan lupa berfoto bareng nanti ya 📸✨
              </p>

              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                className="mt-8 bg-purple-700 hover:bg-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-md transition"
              >
                Kembali
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Didadar;
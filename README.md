Portofolio Azhar Rizqullah
Portofolio pribadi Azhar Rizqullah, dibuat menggunakan React.js, Vite, dan Tailwind CSS.
Prasyarat

Node.js (versi 18 atau lebih tinggi)
npm (biasanya terinstal bersama Node.js)

Cara Menjalankan Proyek

Clone repositori (jika menggunakan Git):
git clone <repository-url>
cd Portofolio_Azhar-Rizqullah


Instal dependensi:
npm install


Jalankan server pengembangan:
npm run dev


Buka browser dan akses http://localhost:5173 (atau port yang ditampilkan di terminal).


Struktur Folder

images/ - Berisi file gambar (amks.png, Azhar.png, babylahap.png, travel.png).
public/ - Berisi file CV.pdf.
src/ - Berisi kode sumber React:
components/ - Komponen UI (Nav, Hero, Passion, dll.).
pages/ - Halaman utama (Home.jsx).
App.jsx - Komponen utama.
main.jsx - Titik masuk aplikasi.
index.css - File CSS untuk Tailwind.



Fitur

Dark Mode: Toggle untuk mengubah tema terang/gelap.
Responsive Navigation: Menu burger untuk tampilan mobile.
Welcome Popup: Muncul saat halaman dimuat, otomatis tertutup setelah 5 detik.
Smooth Scrolling: Navigasi halus ke bagian tertentu.
Aset: Gambar dan CV tersedia di folder images dan public.

Build untuk Produksi
Untuk membuat versi produksi:
npm run build

File hasil build akan ada di folder dist.
Pratinjau Build
Untuk melihat pratinjau build:
npm run preview

Catatan

Pastikan folder images dan public/CV.pdf ada di direktori proyek.
Jika gambar atau CV tidak dimuat, periksa path di kode dan pastikan file ada.


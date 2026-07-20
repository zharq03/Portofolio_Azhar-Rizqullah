import { useLanguage } from '../context/LanguageContext';

export default function Certificates() {
  const { language } = useLanguage();

  const certs = [
    {
      name: 'Devvest Coder Competition',
      description: language === 'id'
        ? 'Apresiasi atas partisipasi dan prestasi dalam kompetisi coding Devvest • November 2024'
        : 'Recognition for participation and achievement in the Devvest coding competition • November 2024',
      image: '/assets/images/devvest.png',
      pdf: '/assets/certificates/Devest.pdf',
    },
    {
      name: 'Cisco Networking Academy',
      description: language === 'id'
        ? 'Sertifikat penyelesaian kursus Cisco Networking Academy • Januari 2024'
        : 'Course completion certificate from Cisco Networking Academy • January 2024',
      image: '/assets/images/cisco.png',
      pdf: '/assets/certificates/cisco.pdf',
    },
    {
      name: 'MSIB Batch 7',
      description: language === 'id'
        ? 'Sertifikat Magang dan Studi Independen Bersertifikat (MSIB) Batch 7'
        : 'Certified Internship and Independent Study (MSIB) Batch 7 Certificate',
      image: '/assets/images/msib.png',
      pdf: '/assets/certificates/Msibbatch7.pdf',
    },
    {
      name: 'Schoolars Today Placement & IELTS Test',
      description: language === 'id'
        ? 'Sertifikat kontribusi dalam pengembangan platform Schoolars Today untuk placement test dan persiapan IELTS'
        : 'Certificate of contribution in developing the Schoolars Today platform for placement tests and IELTS preparation',
      image: '/assets/images/schtdy.png',
      pdf: '/assets/certificates/sch.pdf',
    },
    {
      name: 'Internship IL (Internship Infinite Learning)',
      description: language === 'id'
        ? 'Sertifikat magang di Internship Infinite Learning • Pengalaman kerja profesional di bidang teknologi'
        : 'Internship certificate from Infinite Learning • Professional work experience in technology',
      image: '/assets/images/internIL.png',
      pdf: '/assets/certificates/internshipIL.pdf',
    },
    {
      name: 'Baby Lahap Marketing Project',
      description: language === 'id'
        ? 'Sertifikat atau apresiasi atas proyek pemasaran Baby Lahap (Instagram Live & strategi konten nutrisi anak)'
        : 'Certificate of recognition for the Baby Lahap marketing project (Instagram Live & child nutrition content strategy)',
      image: '/assets/images/babylahap.png',
      pdf: '/assets/certificates/babylahap.pdf',
    },
  ];

  return (
    <section className="space-y-16 pb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {language === 'id' ? 'Sertifikat & Penghargaan' : 'Certificates & Awards'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {certs.map((cert, i) => (
          <div
            key={i}
            className="group relative border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-violet-600/50 hover:shadow-2xl hover:shadow-violet-900/20 transition-all duration-300 flex flex-col min-h-[420px] md:min-h-[460px] h-full"
          >
            {/* Gambar */}
            {cert.image && (
              <div className="relative w-full h-56 md:h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-w-full max-h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* Konten teks */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                  {cert.name}
                </h3>
                <p className=" text-sm md:text-base leading-relaxed line-clamp-5 md:line-clamp-none">
                  {cert.description}
                </p>
              </div>

              {/* Tombol PDF */}
              {cert.pdf && (
                <div className="mt-6">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-red text-white font-semibold rounded-lg hover:bg-violet-700 transition w-full md:w-auto justify-center md:justify-start"
                  >
                    {language === 'id' ? 'Lihat PDF Lengkap' : 'View Full PDF'}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from 'react';
import { 
  ClipboardList, GitBranch, Target, FileText,
  Code2, Palette, BarChart2, Users,
  GraduationCap, Zap, PenTool, Rocket
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { language } = useLanguage();

  const coreSkills = [
    {
      icon: ClipboardList,
      label: 'Requirements Analysis',
      desc: language === 'id' ? 'BRD, User Stories, Acceptance Criteria' : 'BRD, User Stories, Acceptance Criteria',
    },
    {
      icon: GitBranch,
      label: 'Business Process Mapping',
      desc: language === 'id' ? 'AS-IS / TO-BE, BPMN, Diagram Alir' : 'AS-IS / TO-BE, BPMN, Flow Diagrams',
    },
    {
      icon: Target,
      label: 'Agile & Sprint Planning',
      desc: 'Scrum, Backlog Grooming, MoSCoW, RICE',
    },
    {
      icon: Users,
      label: 'Stakeholder Management',
      desc: language === 'id' ? 'Fasilitasi, UAT, Laporan Sprint' : 'Facilitation, UAT, Sprint Reports',
    },
    {
      icon: Palette,
      label: 'UI/UX Design',
      desc: 'Figma, Wireframe, Usability Testing',
    },
    {
      icon: Code2,
      label: 'Technical Literacy',
      desc: 'HTML, CSS, JavaScript, React.js',
    },
    {
      icon: BarChart2,
      label: 'Tools & Platforms',
      desc: 'Notion, Trello, Miro, Draw.io, Git',
    },
    {
      icon: FileText,
      label: 'Documentation',
      desc: language === 'id' ? 'Notulensi Rapat, Log Perubahan, Spek Fitur' : 'Meeting Minutes, Change Logs, Feature Specs',
    },
  ];

  const valueProps = [
    { icon: GraduationCap, text: 'Informatika Cumlaude GPA 3.78' },
    { 
      icon: Zap, 
      text: language === 'id' ? 'Bisa koding — komunikasi lebih lancar dengan developer' : 'Technical literacy — smoother communication with developers' 
    },
    { 
      icon: PenTool, 
      text: language === 'id' ? 'Background UI/UX — bisa review desain secara kritis' : 'UI/UX background — critical design review capabilities' 
    },
    { 
      icon: Rocket, 
      text: language === 'id' ? 'Founder digital product (Kabar Baik Studio)' : 'Founder of digital product (Kabar Baik Studio)' 
    },
  ];

  return (
    <section id="keahlian" className="space-y-14">

      {/* Value Props */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          {language === 'id' ? 'Nilai Lebih Saya' : 'My Value Proposition'}
        </h2>
        <p className="text-center text-zinc-500 dark:text-zinc-400 mb-8 text-base">
          {language === 'id' ? 'BA dengan latar belakang teknis — menjembatani bisnis & teknologi secara nyata' : 'BA with a technical background — bridging business and technology effectively'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProps.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="card flex items-start gap-3 group hover:border-accent-red/60 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-violet-50 dark:bg-violet-950/30 flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-accent-red" strokeWidth={2} />
                </div>
                <p className="text-sm font-medium leading-snug">{v.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Skills Grid */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Core Competencies
        </h2>
        <p className="text-center text-zinc-500 dark:text-zinc-400 mb-8 text-base">
          {language === 'id' ? (
            <>Klik <a href="/keahlian" className="text-accent-red underline underline-offset-2 font-medium hover:opacity-80 transition">halaman Keahlian</a> untuk detail lengkap setiap kompetensi</>
          ) : (
            <>Click the <a href="/keahlian" className="text-accent-red underline underline-offset-2 font-medium hover:opacity-80 transition">Skills page</a> for full details of each competency</>
          )}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="card group flex flex-col gap-3 hover:border-accent-red/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900/40">
                  <Icon className="w-5 h-5 text-accent-red" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">{skill.label}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
'use client';
import { useState } from 'react';
import { 
  ClipboardList, Users, GitBranch, Search, 
  Figma, TestTube, LineChart, MessageSquare,
  Code2, Database, Layout, Palette,
  Target, BarChart2, FileText, Layers
} from 'lucide-react';
import css from '../assets/icons/css3.png';
import htmll from '../assets/icons/html5.png';
import js from '../assets/icons/js.png';
import react from '../assets/icons/reactjs.png';
import ui from '../assets/icons/ui.png';
import ux from '../assets/icons/ux.png';

const tabs = [
  { id: 'ba', label: 'Business Analysis' },
  { id: 'product', label: 'Product & UX' },
  { id: 'technical', label: 'Technical Literacy' },
  { id: 'tools', label: 'Tools & Platforms' },
];

// SVG/Icon-based skill card for BA and Tools
function IconSkillCard({ icon: Icon, name, desc, color = 'text-red-500', index }) {
  const isEven = index % 2 === 0;
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 group`}>
      <div
        className={`w-48 h-48 md:w-64 md:h-64 flex-shrink-0 flex items-center justify-center rounded-3xl bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 group-hover:border-accent-red/50 transition-all duration-500 group-hover:scale-105 ${
          isEven ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <Icon className={`w-24 h-24 md:w-32 md:h-32 ${color}`} strokeWidth={1.2} />
      </div>
      <div
        className={`flex-1 space-y-4 ${
          isEven ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'
        }`}
      >
        <div className={`text-xs uppercase tracking-widest font-medium text-accent-red ${isEven ? 'md:text-left' : 'md:text-right'}`}>
          Kompetensi {index + 1}
        </div>
        <h3 className={`text-4xl md:text-5xl font-bold tracking-tight ${isEven ? 'md:text-left' : 'md:text-right'}`}>
          {name}
        </h3>
        <p className={`leading-relaxed text-base md:text-lg text-zinc-600 dark:text-zinc-300 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
          {desc}
        </p>
      </div>
    </div>
  );
}

// Image-based skill card for tech skills
function ImageSkillCard({ image, name, desc, index }) {
  const isEven = index % 2 === 0;
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
      <div
        className={`w-48 h-48 md:w-64 md:h-64 flex-shrink-0 transition-transform duration-500 group-hover:scale-105 ${
          isEven ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <img src={image} alt={name} className="w-full h-full object-contain drop-shadow-2xl" />
      </div>
      <div
        className={`flex-1 space-y-4 ${
          isEven ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'
        }`}
      >
        <div className={`text-xs uppercase tracking-widest font-medium text-accent-red ${isEven ? 'md:text-left' : 'md:text-right'}`}>
          Keahlian {index + 1}
        </div>
        <h3 className={`text-4xl md:text-5xl font-bold tracking-tight ${isEven ? 'md:text-left' : 'md:text-right'}`}>
          {name}
        </h3>
        <p className={`leading-relaxed text-base md:text-lg text-zinc-600 dark:text-zinc-300 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
          {desc}
        </p>
      </div>
    </div>
  );
}

const skillsData = {
  ba: [
    {
      icon: ClipboardList,
      name: 'Requirements Gathering',
      desc: 'Conducting structured interviews, workshops, and stakeholder sessions to elicit, document, and validate both functional and non-functional requirements. I translate ambiguous business needs into clear, actionable specification documents (BRD, FSD, user stories).',
      color: 'text-accent-red',
    },
    {
      icon: FileText,
      name: 'User Stories & Acceptance Criteria',
      desc: 'Writing precise user stories in "As a [user], I want [action] so that [benefit]" format, accompanied by well-defined acceptance criteria using Gherkin (Given/When/Then) syntax. Ensures development teams and stakeholders share a single source of truth.',
      color: 'text-orange-500',
    },
    {
      icon: GitBranch,
      name: 'Business Process Mapping',
      desc: 'Creating AS-IS and TO-BE process flows using BPMN notation and tools like Draw.io and Miro. I identify bottlenecks, redundancies, and improvement opportunities to streamline operations and support digital transformation initiatives.',
      color: 'text-blue-500',
    },
    {
      icon: Target,
      name: 'Sprint Planning & Prioritization',
      desc: 'Collaborating with product owners and development teams in Agile/Scrum ceremonies — sprint planning, backlog grooming, and retrospectives. I help prioritize features using MoSCoW and RICE frameworks to maximize business value delivered each sprint.',
      color: 'text-green-500',
    },
  ],
  product: [
    {
      type: 'image',
      image: ux,
      name: 'User Research & Testing',
      desc: 'Conducting usability testing sessions with 50+ users, synthesizing qualitative findings into actionable product improvements. I use journey mapping, empathy maps, and task analysis to deeply understand user mental models and pain points.',
    },
    {
      type: 'image',
      image: ui,
      name: 'UI Design Collaboration',
      desc: 'Partnering with UI/UX designers to translate requirements into Figma prototypes, annotating wireframes with interaction specs and edge cases. I bridge the gap between business requirements and visual design, ensuring feature completeness at design review.',
    },
    {
      icon: LineChart,
      name: 'Product Metrics & Analytics',
      desc: 'Defining and tracking key success metrics (DAU, task completion rate, funnel drop-off) to evaluate feature impact. I use data insights to build business cases for prioritization decisions and present findings clearly to stakeholders.',
      color: 'text-purple-500',
    },
    {
      icon: MessageSquare,
      name: 'Stakeholder Communication',
      desc: 'Producing sprint reports, feature change logs, and status updates that keep product, engineering, and business stakeholders aligned. I facilitate requirements review sessions and ensure sign-off before development begins to minimize late-stage changes.',
      color: 'text-teal-500',
    },
  ],
  technical: [
    {
      type: 'image',
      image: htmll,
      name: 'HTML',
      desc: 'Proficient in semantic HTML structure — enabling direct, credible technical conversation with developers when reviewing implementation against specifications. I can inspect and validate rendered markup to confirm requirements are correctly implemented.',
    },
    {
      type: 'image',
      image: css,
      name: 'CSS',
      desc: 'Understanding of CSS layout systems (Flexbox, Grid), responsive design, and Tailwind CSS utility classes. This allows me to accurately describe UI requirements and verify visual specifications against implemented designs.',
    },
    {
      type: 'image',
      image: js,
      name: 'JavaScript',
      desc: 'Working knowledge of JavaScript fundamentals, enabling meaningful technical dialogue with developers about feasibility, complexity, and implementation trade-offs during requirements discussions.',
    },
    {
      type: 'image',
      image: react,
      name: 'React',
      desc: 'Hands-on experience building React applications (Scholars Today, Kabar Baik Studio). This front-end literacy gives me the ability to assess technical complexity of feature requests and contribute directly when needed.',
    },
  ],
  tools: [
    {
      icon: Figma,
      name: 'Figma',
      desc: 'Proficient in reviewing and annotating Figma prototypes, extracting interaction specifications, and collaborating in design files. I use Figma to create high-fidelity requirement illustrations and align design output with business requirements before handoff.',
      color: 'text-pink-500',
    },
    {
      icon: Layers,
      name: 'Notion & Confluence',
      desc: 'Structuring product wikis, BRD documents, sprint notes, and feature specs in Notion. I design documentation templates that make requirements discoverable, versioned, and easy to maintain across product iterations.',
      color: 'text-gray-500',
    },
    {
      icon: BarChart2,
      name: 'Trello & Jira',
      desc: 'Managing backlogs, sprint boards, and task tracking in Trello and Jira. I configure workflows, define ticket templates, and maintain board hygiene to keep development teams unblocked and stakeholders informed.',
      color: 'text-blue-400',
    },
    {
      icon: Search,
      name: 'Miro & Draw.io',
      desc: 'Creating collaborative process maps, user journey diagrams, system context diagrams, and BPMN flows. I use these tools to facilitate discovery workshops and present complex workflows in formats accessible to both technical and non-technical audiences.',
      color: 'text-yellow-500',
    },
  ],
};

export default function KeahlianPage() {
  const [activeTab, setActiveTab] = useState('ba');

  const currentSkills = skillsData[activeTab] || [];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tight">
        Core Competencies
      </h1>
      <p className="text-center mb-16 text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
        Keahlian dan kompetensi yang saya bawa sebagai Business Analyst
      </p>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-16 md:mb-20 overflow-x-auto">
        <div className="inline-flex bg-zinc-900/80 backdrop-blur-sm rounded-full p-1.5 border border-zinc-800/50 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Cards */}
      <div className="space-y-16 md:space-y-24">
        {currentSkills.map((skill, index) => {
          if (skill.type === 'image' || skill.image) {
            return <ImageSkillCard key={skill.name} image={skill.image} name={skill.name} desc={skill.desc} index={index} />;
          }
          return <IconSkillCard key={skill.name} icon={skill.icon} name={skill.name} desc={skill.desc} color={skill.color} index={index} />;
        })}
      </div>

      {currentSkills.length === 0 && (
        <div className="text-center py-20 text-xl">
          Belum ada data keahlian untuk kategori ini.
        </div>
      )}
    </div>
  );
}
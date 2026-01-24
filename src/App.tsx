import { useState, useEffect } from 'react';
import img from "./assets/figma/github.png";
import img1 from "./assets/figma/linkedin.png";
import img2 from "./assets/figma/email.png";
import img3 from "./assets/figma/soundethics.png";

function NavigationMenu() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex gap-8 items-center">
      <button 
        onClick={() => scrollToSection('about')}
        className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#576f87] text-[19.379px] hover:text-[#43729c] transition-colors"
      >
        About
      </button>
      <button 
        onClick={() => scrollToSection('skills')}
        className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#576f87] text-[19.379px] hover:text-[#43729c] transition-colors"
      >
        Skills
      </button>
      <button 
        onClick={() => scrollToSection('experience')}
        className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#576f87] text-[19.379px] hover:text-[#43729c] transition-colors"
      >
        Experience
      </button>
      <button 
        onClick={() => scrollToSection('projects')}
        className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#576f87] text-[19.379px] hover:text-[#43729c] transition-colors"
      >
        Projects
      </button>
    </div>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-8 h-[76px] flex items-center justify-between">
        <div className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#576f87] text-[19.379px]">
          Tiana Zhen
        </div>
        <NavigationMenu />
      </div>
    </nav>
  );
}

function Header() {
  return (
    <section id="about" className="bg-[#576f87] py-20 px-8 mt-[76px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#d9d9d9] rounded-[40px] p-10 max-w-[856px]">
          <div className="mb-6">
            <h1 className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[64px] text-black leading-[86.364px] mb-2">
              Tiana Zhen
            </h1>
            <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[24px] text-black leading-[86.364px] mb-4">
              Software Engineer / ML Engineer
            </p>
            <div className="flex gap-[15px] items-center">
              <a 
                href="https://github.com/tzhen12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] hover:opacity-80 transition-opacity"
              >
                <img alt="GitHub" className="w-full h-full object-cover" src={img} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tianazhen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] hover:opacity-80 transition-opacity"
              >
                <img alt="LinkedIn" className="w-full h-full object-contain" src={img1} />
              </a>
              <a 
                href="https://tzhen12.github.io/assets/Tiana_Zhen_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] hover:opacity-80 transition-opacity"
              >
                <img alt="Resume" className="w-full h-full object-contain" src={img2} />
              </a>
            </div>
          </div>
          
          <div className="font-['Epilogue:Regular',sans-serif] font-normal text-[#62676d] text-[24px] leading-[27px]">
            <p className="mb-0">Hello Everyone, welcome to my portfolio website!</p>
            <p className="mb-0">I recently graduated from UC Irvine with a major</p>
            <p className="mb-0">in Computer Science and a minor in statistics.</p>
            <p className="mb-0">I enjoy creating impactful solutions through programming.</p>
            <p>I mainly focus on back-end development and ML/AI roles while developing my full-stack skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#d9d9d9] rounded-[35px] p-8 flex-1 min-w-[300px] max-w-[350px]">
      <h3 className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[25px] text-black text-center mb-6">
        {title}
      </h3>
      <ul className="font-['Epilogue:Medium',sans-serif] font-medium text-[#62676d] text-[26px] space-y-1">
        {items.map((item, index) => (
          <li key={index} className="leading-[30px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const programmingLanguages = [
    "Python", "Java", "C/C++", "SQL", "R", "JavaScript", "CSS", "HTML", "Ruby", "Assembly (MIPS)"
  ];
  
  const tools = [
    "Git", "AWS", "Google Cloud", "Linux", "Excel", "TensorFlow", "NumPy", "Matplotlib", "Jira"
  ];
  
  const softSkills = [
    "Agile Method", "Team Work", "Mentoring", "Problem Solving", "Communication"
  ];

  return (
    <section id="skills" className="bg-[#576f87] py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-['Epilogue:Bold',sans-serif] font-bold text-[#d9d9d9] text-[40px] leading-[30px] mb-16">
          Skills
        </h2>
        <div className="flex flex-wrap gap-[71px] justify-center">
          <SkillCard title="Programming Languages" items={programmingLanguages} />
          <SkillCard title="Technology / Tools" items={tools} />
          <SkillCard title="Soft Skills" items={softSkills} />
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ 
  company, 
  period, 
  title, 
  description 
}: { 
  company: string; 
  period: string; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-[#d9d9d9] rounded-[40px] p-6 mb-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-[280px] shrink-0">
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#43729c] text-[24px] leading-[25px] mb-2">
            {company}
          </p>
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#62676d] text-[24px] leading-[25px]">
            {period}
          </p>
        </div>
        <div className="flex-1">
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-black text-[24px] leading-[25px] mb-4">
            {title}
          </p>
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#62676d] text-[20px] leading-[25px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      company: "Sound Ethics",
      period: "01/2025 – 06/2025",
      title: "Student Software Engineer (Capstone)",
      description: "Developed an AI-driven audio deepfake detection system that authenticates audio content through machine learning and is deployed on a full-stack web application. Built back-end preprocessing pipelines in Python to clean dataset and train ML/AI models."
    },
    {
      company: "Cognitive Anteater Robotics Laboratory",
      period: "01/2025 – 06/2025",
      title: "Student Researcher",
      description: "Enhanced the software development of CuttleBot, a biometric robot designed to replicate cuttlefish movement and behavior. Implemented machine learning models to improve its learning capabilities and enable more adaptive, lifelike responses."
    },
    {
      company: "UC Irvine Information & Computer Science",
      period: "01/2025 – 06/2025",
      title: "Learning Assistant",
      description: "Provided tutoring support for multiple computer science courses with over 250 undergraduate students. Conducted lab sessions to help students understand course material and collaborated with them to debug and test code, ensuring functional and well-structured program development."
    }
  ];

  return (
    <section id="experience" className="bg-[#576f87] py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#d9d9d9] text-[40px] leading-[38px] mb-16">
          Experience
        </h2>
        <div className="max-w-[1200px]">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              company={exp.company}
              period={exp.period}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ 
  title, 
  subtitle, 
  skills, 
  link, 
  imageUrl,
  backgroundColor 
}: { 
  title: string; 
  subtitle?: string;
  skills: string; 
  link: string; 
  imageUrl?: string;
  backgroundColor?: string;
}) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#d9d9d9] rounded-[30px] overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-[472px]"
    >
      {imageUrl ? (
        <div className="h-[290px] overflow-hidden">
          <img 
            alt={title} 
            className="w-full h-full object-cover" 
            src={imageUrl} 
          />
        </div>
      ) : (
        <div className={`h-[270px] flex items-center justify-center ${backgroundColor || 'bg-[#5497d9]'} mx-8 my-4 rounded-[40px]`}>
          <h3 className="font-['Epilogue:ExtraBold',sans-serif] font-extrabold text-white text-[64px] text-center">
            {title}
          </h3>
        </div>
      )}
      <div className="p-6 text-center">
        {subtitle && (
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-black text-[24px] leading-[normal] mb-1">
            {subtitle}
          </p>
        )}
        <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-black text-[24px] leading-[normal] mb-3">
          {title}
        </p>
        <ul className="list-none">
          <li className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#62676d] text-[24px] leading-[normal]">
            • Skills: {skills}
          </li>
        </ul>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-[#576f87] py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#d9d9d9] text-[40px] leading-[normal] mb-16">
          Projects
        </h2>
        <div className="flex flex-wrap gap-[150px] justify-center items-start">
          <ProjectCard 
            title="Audio Deepfake Detection System"
            subtitle="Sound Ethic's"
            skills="Python, Machine Learning/AI, Figma, GCP, Vercel"
            link="https://uci-cap.vercel.app/"
            imageUrl={img3}
          />
          <ProjectCard 
            title="Fabflix"
            subtitle="Fabflix Full-Stack Movie Web Application"
            skills="Java, Javascript, HTML, CSS, SQL, Database, Docker"
            link="https://www.youtube.com/watch?v=RcY18-ggd_M"
            backgroundColor="bg-[#5497d9]"
          />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Header />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

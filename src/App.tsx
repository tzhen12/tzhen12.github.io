import { useState, useEffect } from 'react';
import img from "./assets/figma/github.png";
import img1 from "./assets/figma/linkedin.png";
import img2 from "./assets/figma/email.png";
import img3 from "./assets/figma/soundethics.png";

// Custom SVG Icons
function MenuIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

function NavigationMenu({
  isMobile = false,
  onItemClick,
}: {
  isMobile?: boolean;
  onItemClick?: () => void;
}) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = window.innerWidth < 768 ? 64 : 76;
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (onItemClick) {
        onItemClick();
      }
    }
  };

  const buttonClass = isMobile
    ? "font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#576f87] text-xl hover:text-[#43729c] transition-colors py-3 w-full text-left"
    : "font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#576f87] text-base md:text-[19.379px] hover:text-[#43729c] transition-colors";

  return (
    <div
      className={
        isMobile
          ? "flex flex-col gap-2"
          : "flex gap-4 md:gap-8 items-center"
      }
    >
      <button
        onClick={() => scrollToSection("about")}
        className={buttonClass}
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("skills")}
        className={buttonClass}
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection("experience")}
        className={buttonClass}
      >
        Experience
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className={buttonClass}
      >
        Projects
      </button>
    </div>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${isScrolled ? "bg-white shadow-md" : "bg-[#576f87]"}`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-[64px] md:h-[76px] flex items-center justify-between w-full">
          <div className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#576f87] text-base md:text-[19.379px]">
            Tiana Zhen
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#576f87] hover:text-[#43729c] transition-colors"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-[64px] right-0 w-64 h-[calc(100vh-64px)] bg-white shadow-lg z-40 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <NavigationMenu
            isMobile
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <section
      id="about"
      className="bg-[#576f87] py-10 md:py-20 px-4 md:px-8 mt-[64px] md:mt-[76px] w-full box-border"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="bg-[#d9d9d9] rounded-[20px] md:rounded-[40px] p-6 md:p-10 max-w-[856px]">
          <div className="mb-6">
            <h1 className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[36px] sm:text-[48px] md:text-[64px] text-black leading-tight md:leading-[86.364px] mb-2">
              Tiana Zhen
            </h1>
            <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[18px] sm:text-[20px] md:text-[24px] text-black leading-tight md:leading-[86.364px] mb-4">
              Software Engineer / ML Engineer
            </p>
            <div className="flex gap-[15px] items-center">
              <a
                href="https://github.com/tzhen12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] hover:opacity-80 transition-opacity"
              >
                <img
                  alt="GitHub"
                  className="w-full h-full object-cover"
                  src={img}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/tianazhen/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] hover:opacity-80 transition-opacity"
              >
                <img
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                  src={img1}
                />
              </a>
              <a
                href="https://tzhen12.github.io/assets/Tiana_Zhen_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] hover:opacity-80 transition-opacity"
              >
                <img
                  alt="Resume"
                  className="w-full h-full object-contain"
                  src={img2}
                />
              </a>
            </div>
          </div>

          <div className="font-['Epilogue:Regular',sans-serif] font-normal text-[#62676d] text-[16px] sm:text-[20px] md:text-[24px] leading-[1.3] md:leading-[27px] space-y-1">
            <p>
              Hello Everyone, welcome to my portfolio website!
            </p>
            <p>
              I recently graduated from UC Irvine with a major
              in Computer Science and a minor in statistics.
            </p>
            <p>
              I enjoy creating impactful solutions through
              programming.
            </p>
            <p>
              I mainly focus on back-end development and ML/AI
              roles while developing my full-stack skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-[#d9d9d9] rounded-[25px] md:rounded-[35px] p-6 md:p-8 flex-1 min-w-[280px] sm:min-w-[320px] max-w-[380px] w-full h-[450px] sm:h-[450px] md:h-[520px]">
      <h3 className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[20px] md:text-[25px] text-black text-center mb-4 md:mb-6">
        {title}
      </h3>
      <ul className="font-['Epilogue:Medium',sans-serif] font-medium text-[#62676d] text-[18px] sm:text-[22px] md:text-[26px] space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            className="leading-[26px] md:leading-[30px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const programmingLanguages = [
    "Python",
    "Java",
    "C/C++",
    "SQL",
    "R",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "Ruby",
    "Assembly (MIPS)",
  ];

  const tools = [
    "Git",
    "AWS",
    "Google Cloud",
    "Linux",
    "Excel",
    "TensorFlow",
    "NumPy",
    "Matplotlib",
    "Jira",
  ];

  const softSkills = [
    "Agile Method",
    "Team Work",
    "Mentoring",
    "Problem Solving",
    "Communication",
  ];

  return (
    <section
      id="skills"
      className="bg-[#576f87] py-10 md:py-20 px-4 md:px-8 w-full box-border"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <h2 className="font-['Epilogue:Bold',sans-serif] font-bold text-[#d9d9d9] text-[28px] md:text-[40px] leading-[30px] mb-8 md:mb-16">
          Skills
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-[71px] justify-center items-center">
          <SkillCard
            title="Programming Languages"
            items={programmingLanguages}
          />
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
  description,
}: {
  company: string;
  period: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#d9d9d9] rounded-[25px] md:rounded-[40px] p-5 md:p-6 mb-6 md:mb-10">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="md:w-[280px] shrink-0">
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#43729c] text-[18px] sm:text-[20px] md:text-[24px] leading-[1.2] md:leading-[25px] mb-2">
            {company}
          </p>
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#62676d] text-[16px] sm:text-[18px] md:text-[24px] leading-[1.2] md:leading-[25px]">
            {period}
          </p>
        </div>
        <div className="flex-1">
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-black text-[18px] sm:text-[20px] md:text-[24px] leading-[1.2] md:leading-[25px] mb-3 md:mb-4">
            {title}
          </p>
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#62676d] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.3] md:leading-[25px]">
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
      description:
        "Developed an AI-driven audio deepfake detection system that authenticates audio content through machine learning and is deployed on a full-stack web application. Built back-end preprocessing pipelines in Python to clean dataset and train ML/AI models.",
    },
    {
      company: "Cognitive Anteater Robotics Laboratory",
      period: "01/2025 – 06/2025",
      title: "Student Researcher",
      description:
        "Enhanced the software development of CuttleBot, a biometric robot designed to replicate cuttlefish movement and behavior. Implemented machine learning models to improve its learning capabilities and enable more adaptive, lifelike responses.",
    },
    {
      company: "UC Irvine Information & Computer Science",
      period: "01/2025 – 06/2025",
      title: "Learning Assistant",
      description:
        "Provided tutoring support for multiple computer science courses with over 250 undergraduate students. Conducted lab sessions to help students understand course material and collaborated with them to debug and test code, ensuring functional and well-structured program development.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#576f87] py-10 md:py-20 px-4 md:px-8 w-full box-border"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <h2 className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#d9d9d9] text-[28px] md:text-[40px] leading-[30px] md:leading-[38px] mb-8 md:mb-16">
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
  backgroundColor,
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
      className="bg-[#d9d9d9] rounded-[20px] md:rounded-[30px] overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-[472px]"
    >
      {imageUrl ? (
        <div className="h-[200px] sm:h-[250px] md:h-[290px] overflow-hidden">
          <img
            alt={title}
            className="w-full h-full object-cover"
            src={imageUrl}
          />
        </div>
      ) : (
        <div
          className={`h-[180px] sm:h-[220px] md:h-[280px] flex items-center justify-center ${backgroundColor || "bg-[#5497d9]"} mx-4 md:mx-8 mt-3 md:mt-4 rounded-[25px] md:rounded-[40px] px-4`}
        >
          <h3 className="font-['Epilogue:ExtraBold',sans-serif] font-extrabold text-white text-[32px] sm:text-[48px] md:text-[64px] text-center leading-tight">
            {title}
          </h3>
        </div>
      )}
      <div className="px-4 md:px-6 pb-4 md:pb-6 pt-3 md:pt-4 text-center">
        <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-black text-[18px] sm:text-[20px] md:text-[24px] leading-[normal] mb-2 md:mb-3">
          {title}
        </p>
        {subtitle && (
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-black text-[18px] sm:text-[20px] md:text-[24px] leading-[normal] mb-1">
            {subtitle}
          </p>
        )}
        <ul className="list-none">
          <li className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#62676d] text-[16px] sm:text-[20px] md:text-[24px] leading-[normal]">
            • Skills: {skills}
          </li>
        </ul>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#576f87] py-10 md:py-20 px-4 md:px-8 w-full min-h-[50vh] box-border"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <h2 className="font-['Epilogue:SemiBold',sans-serif] font-semibold text-[#d9d9d9] text-[28px] md:text-[40px] leading-[normal] mb-8 md:mb-16">
          Projects
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-12 lg:gap-20 xl:gap-[150px] justify-center items-stretch pb-10">
          <ProjectCard
            title="Sound Ethics"
            subtitle="Audio Deepfake Detection System"
            skills="Python, Machine Learning/AI, Figma, GCP, Vercel"
            link="https://uci-cap.vercel.app/"
            imageUrl={img3}
          />
          <ProjectCard
            title="Fabflix"
            subtitle="Full Stack Movie Web Application"
            skills="Java, Javascript, HTML, CSS, SQL, AWS, Database, Docker"
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
    <div className="bg-[#576f87] min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Header />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
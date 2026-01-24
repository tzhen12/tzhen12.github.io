import img from "./assets/figma/github.png";
import img1 from "./assets/figma/linkedin.png";
import img2 from "./assets/figma/email.png";
import img3 from "./assets/figma/soundethics.png";

function NavigationMenu() {
  return (
    <div className="absolute cursor-pointer h-[35px] left-[974px] overflow-clip top-[20px] w-[435px]" data-name="Navigation Menu">
      <button className="absolute block h-[20px] left-[118px] top-[9px] w-[49px]" data-name="Skills">
        <p className="absolute css-ew64yg font-['Epilogue:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#576f87] text-[19.379px] text-left">Skills</p>
      </button>
      <button className="absolute block h-[20px] left-[193.79px] top-[9px] w-[111px]" data-name="Experience">
        <p className="absolute css-ew64yg font-['Epilogue:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#576f87] text-[19.379px] text-left">Experience</p>
      </button>
      <button className="absolute block h-[20px] left-[332px] top-[9px] w-[83px]" data-name="Projects">
        <p className="absolute css-ew64yg font-['Epilogue:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#576f87] text-[19.379px] text-left">Projects</p>
      </button>
      <button className="absolute block h-[20px] left-[31px] top-[9px] w-[60px]" data-name="About">
        <div className="absolute css-g0mm18 font-['Epilogue:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#576f87] text-[19.379px] text-left">
          <p className="css-ew64yg mb-0">About</p>
          <p className="css-ew64yg">&nbsp;</p>
        </div>
      </button>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[56px] left-[28px] overflow-clip top-[10px] w-[270px]">
      <p className="absolute css-4hzbpn font-['Epilogue:SemiBold',sans-serif] font-semibold h-[23px] leading-[normal] left-[24px] text-[#576f87] text-[19.379px] top-[18px] w-[183px]">Tiana Zhen</p>
    </div>
  );
}

function Navigation({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Navigation">
      <NavigationMenu />
      <Frame />
    </div>
  );
}

function NameHeader() {
  return (
    <div className="h-[181px] overflow-clip relative shrink-0 w-[844px]" data-name="name header">
      <p className="absolute css-4hzbpn font-['Epilogue:SemiBold',sans-serif] font-semibold h-[75px] leading-[86.364px] left-[39px] text-[64px] text-black top-[30px] w-[523px]">Tiana Zhen</p>
      <p className="absolute css-4hzbpn font-['Epilogue:SemiBold',sans-serif] font-semibold h-[76px] leading-[86.364px] left-[39px] text-[24px] text-black top-[105px] w-[686px]">Software Engineer / ML Engineer</p>
      <div className="absolute left-[475px] size-[40px] top-[123px]" data-name="github">
        <a className="absolute block cursor-pointer inset-0" data-name="github" href="https://github.com/tzhen12">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
        </a>
      </div>
      <div className="absolute left-[530px] size-[40px] top-[123px]" data-name="linkedin">
        <a className="absolute block cursor-pointer inset-0" data-name="linkedin" href="https://www.linkedin.com/in/tianazhen/">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[136.7%] left-[-45.08%] max-w-none top-[-17.54%] w-[209.17%]" src={img1} />
          </div>
        </a>
      </div>
      <div className="absolute left-[585px] size-[40px] top-[123px]" data-name="email">
        <a className="absolute block cursor-pointer inset-0" data-name="email" href="https://tzhen12.github.io/assets/Tiana_Zhen_Resume.pdf">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[101.54%] left-[-13.46%] max-w-none top-[-1.54%] w-[126.92%]" src={img2} />
          </div>
        </a>
      </div>
    </div>
  );
}

function Bio() {
  return (
    <div className="h-[233px] overflow-clip relative shrink-0 w-[844px]" data-name="bio">
      <div className="absolute font-['Epilogue:Regular',sans-serif] font-normal h-[216px] leading-[27px] left-[26px] text-[#62676d] text-[24px] top-0 w-[765px]">
        <p className="css-4hzbpn mb-0">Hello Everyone, welcome to my portfolio website!</p>
        <p className="css-4hzbpn mb-0">I recently graduated from UC Irvine with a major</p>
        <p className="css-4hzbpn mb-0">in Computer Science and a minor in statistics.</p>
        <p className="css-4hzbpn mb-0">{`I enjoy creating impactful solutions through programming. `}</p>
        <p className="css-4hzbpn">I mainly focus on back-end development and ML/AI roles while developing my full-stack skills.</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex flex-col gap-[23px] h-[544px] items-start overflow-clip px-px py-[5px] relative rounded-[40px] shrink-0 w-[856px]" data-name="left">
      <NameHeader />
      <Bio />
    </div>
  );
}

function CombinedHeader() {
  return (
    <div className="absolute bg-[#576f87] content-stretch flex h-[554px] items-start left-[37px] overflow-clip p-[10px] top-[42px] w-[1363px]" data-name="Combined Header">
      <Left />
    </div>
  );
}

function Header({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Header">
      <CombinedHeader />
    </div>
  );
}

function Language() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex flex-col gap-[24.96px] h-[420px] items-end overflow-clip relative rounded-[35.657px] shrink-0 w-[350px]" data-name="Language">
      <div className="font-['Epilogue:SemiBold',sans-serif] font-semibold h-[53.485px] leading-[22.971px] relative shrink-0 text-[25.524px] text-black text-center w-[353px]">
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">Programming Languages</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
      <ul className="block font-['Epilogue:Medium',sans-serif] font-medium h-[435.01px] leading-[0] relative shrink-0 text-[#62676d] text-[26.742px] w-[352.109px]">
        <li className="css-4hzbpn mb-0 ms-[40.113px]">
          <span className="leading-[30px]">Python</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[40.113px]">
          <span className="leading-[30px]">Java</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[40.113px]">
          <span className="leading-[30px]">C/C++</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[40.113px]">
          <span className="leading-[30px]">SQL</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[40.113px]">
          <span className="leading-[30px]">R</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[40.113px]">
          <span className="leading-[30px]">JavaScript</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[40.113px]">
          <span className="leading-[30px]">CSS</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[40.113px]">
          <span className="leading-[30px]">HTML</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[40.113px]">
          <span className="leading-[30px]">Ruby</span>
        </li>
        <li className="css-4hzbpn ms-[40.113px]">
          <span className="leading-[30px]">Assembly (MIPS)</span>
        </li>
      </ul>
    </div>
  );
}

function Tools() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex flex-col gap-[27.79px] h-[420px] items-end overflow-clip relative rounded-[39.7px] shrink-0 w-[350px]" data-name="Tools">
      <div className="font-['Epilogue:SemiBold',sans-serif] font-semibold h-[53.03px] leading-[22.776px] relative shrink-0 text-[25.307px] text-black text-center w-full">
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">Technology / Tools</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
      <div className="font-['Epilogue:Medium',sans-serif] font-medium h-[422.661px] leading-[0] relative shrink-0 text-[#62676d] text-[25.983px] w-[342.113px]">
        <ul className="list-disc mb-0">
          <li className="css-4hzbpn mb-0 ms-[38.9745px]">
            <span className="leading-[30px]">Git</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[38.9745px]">
            <span className="leading-[30px]">AWS</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[38.9745px]">
            <span className="leading-[30px]">Google Cloud</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[38.9745px]">
            <span className="leading-[30px]">Linux</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[38.9745px]">
            <span className="leading-[30px]">Excel</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[38.9745px]">
            <span className="leading-[30px]">TensorFlow</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[38.9745px]">
            <span className="leading-[30px]">NumPy</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[38.9745px]">
            <span className="leading-[30px]">Matplotlib</span>
          </li>
          <li className="css-4hzbpn ms-[38.9745px]">
            <span className="leading-[30px]">Jira</span>
          </li>
        </ul>
        <p className="css-4hzbpn leading-[30px] mb-0">&nbsp;</p>
        <p className="css-4hzbpn leading-[30px]">&nbsp;</p>
      </div>
    </div>
  );
}

function SoftSkills() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex flex-col gap-[24.792px] h-[420px] items-end overflow-clip relative rounded-[35.417px] shrink-0 w-[350px]" data-name="Soft Skills">
      <div className="font-['Epilogue:SemiBold',sans-serif] font-semibold h-[53.125px] leading-[22.817px] relative shrink-0 text-[25.352px] text-black text-center w-[350.625px]">
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">Soft Skills</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
      <ul className="block font-['Epilogue:Medium',sans-serif] font-medium h-[432.083px] leading-[0] relative shrink-0 text-[#62676d] text-[26.563px] w-[349.74px]">
        <li className="css-4hzbpn mb-0 ms-[39.8445px]">
          <span className="leading-[30px]">Agile Method</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[39.8445px]">
          <span className="leading-[30px]">Team Work</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[39.8445px]">
          <span className="leading-[30px]">Mentoring</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[39.8445px]">
          <span className="leading-[30px]">Problem Solving</span>
        </li>
        <li className="css-4hzbpn ms-[39.8445px]">
          <span className="leading-[30px]">Communication</span>
        </li>
      </ul>
    </div>
  );
}

function SkillBlock() {
  return (
    <div className="absolute content-stretch flex gap-[71px] h-[543px] items-start left-[123px] overflow-clip top-[118px] w-[1192px]" data-name="Skill Block">
      <Language />
      <Tools />
      <SoftSkills />
    </div>
  );
}

function Skills({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Skills">
      <SkillBlock />
      <p className="absolute css-4hzbpn font-['Epilogue:Bold',sans-serif] font-bold h-[40px] leading-[30px] left-[54px] text-[#d9d9d9] text-[40px] top-[47px] w-[227px]">Skills</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[220px] overflow-clip relative shrink-0 w-full">
      <div className="absolute bg-[#d9d9d9] h-[220px] left-[5px] rounded-[40px] top-0 w-[1191px]" />
      <div className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold h-[356px] leading-[25px] left-[25px] text-[0px] text-black top-0 w-[263px]">
        <p className="css-4hzbpn mb-0 text-[20px]">&nbsp;</p>
        <p className="css-4hzbpn mb-0 text-[#43729c] text-[24px]">{`Sound Ethics             `}</p>
        <p className="css-4hzbpn text-[#62676d] text-[24px]">01/2025 – 06/2025</p>
      </div>
      <div className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold h-[170px] leading-[25px] left-[323px] text-[#43729c] text-[0px] top-[18px] w-[826px]">
        <p className="css-4hzbpn mb-0 text-[24px] text-black">Student Software Engineer (Capstone)</p>
        <p className="css-4hzbpn mb-0 text-[24px]">&nbsp;</p>
        <p className="css-4hzbpn mb-0 text-[#62676d] text-[20px]">{`Developed an AI-driven audio deepfake detection system that authenticates audio content through machine learning and is deployed on a full-stack web application. Built back-end preprocessing pipelines in Python to clean dataset and train ML/AI models. `}</p>
        <p className="css-4hzbpn text-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[220px] overflow-clip relative shrink-0 w-full">
      <div className="absolute bg-[#d9d9d9] h-[220px] left-[5px] rounded-[40px] top-0 w-[1191px]" />
      <div className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold h-[356px] leading-[25px] left-[25px] text-[0px] text-black top-0 w-[263px]">
        <p className="css-4hzbpn mb-0 text-[20px]">&nbsp;</p>
        <p className="css-4hzbpn mb-0 text-[#43729c] text-[24px]">{`Cognitive Anteater Robotics Laboratory             `}</p>
        <p className="css-4hzbpn text-[#62676d] text-[24px]">01/2025 – 06/2025</p>
      </div>
      <div className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold h-[170px] leading-[25px] left-[323px] text-[#43729c] text-[0px] top-[18px] w-[826px]">
        <p className="css-4hzbpn mb-0 text-[24px] text-black">Student Researcher</p>
        <p className="css-4hzbpn mb-0 text-[24px]">&nbsp;</p>
        <p className="css-4hzbpn mb-0 text-[#62676d] text-[20px]">Enhanced the software development of CuttleBot, a biometric robot designed to replicate cuttlefish movement and behavior. Implemented machine learning models to improve its learning capabilities and enable more adaptive, lifelike responses.</p>
        <p className="css-4hzbpn text-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[241px] overflow-clip relative shrink-0 w-full">
      <div className="absolute bg-[#d9d9d9] h-[220px] left-[5px] rounded-[40px] top-0 w-[1191px]" />
      <div className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold h-[267px] leading-[25px] left-[25px] text-[0px] text-black top-0 w-[263px]">
        <p className="css-4hzbpn mb-0 text-[20px]">&nbsp;</p>
        <p className="css-4hzbpn mb-0 text-[#43729c] text-[24px]">{`UC Irvine Information & Computer Science`}</p>
        <p className="css-4hzbpn text-[#62676d] text-[24px]">01/2025 – 06/2025</p>
      </div>
      <div className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold h-[170px] leading-[25px] left-[323px] text-[#43729c] text-[0px] top-[18px] w-[826px]">
        <p className="css-4hzbpn mb-0 text-[24px] text-black">Learning Assistant</p>
        <p className="css-4hzbpn mb-0 text-[24px]">&nbsp;</p>
        <p className="css-4hzbpn text-[#62676d] text-[20px]">Provided tutoring support for multiple computer science courses with over 250 undergraduate students. Conducted lab sessions to help students understand course material and collaborated with them to debug and test code, ensuring functional and well-structured program development.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[38px] items-start left-[54px] overflow-clip top-[111px] w-[1196px]">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Experience({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Experience">
      <p className="absolute css-4hzbpn font-['Epilogue:SemiBold',sans-serif] font-semibold h-[62px] leading-[38.143px] left-[54px] text-[#d9d9d9] text-[40px] top-[37px] w-[606px]">Experience</p>
      <Frame1 />
    </div>
  );
}

function SoundEthicsFrame() {
  return (
    <div className="cursor-pointer h-[428.407px] overflow-clip relative shrink-0 w-[472.013px]" data-name="Sound Ethics Frame">
      <div className="absolute h-[428.407px] left-[0.38px] overflow-clip top-0 w-[472.013px]" data-name="Sound Ethics Instance">
        <a className="absolute bg-[#d9d9d9] block h-[425.73px] left-[0.38px] rounded-[30.601px] top-0 w-[470.865px]" href="https://uci-cap.vercel.app/" />
        <a className="absolute block font-['Epilogue:SemiBold',sans-serif] font-semibold h-[140px] leading-[0] left-[236.99px] text-[0px] text-black text-center top-[286px] translate-x-[-50%] w-[471px]" href="https://uci-cap.vercel.app/">
          <p className="css-4hzbpn leading-[normal] mb-0 text-[22.95px]">&nbsp;</p>
          <p className="css-4hzbpn leading-[normal] mb-0 text-[24px]">Sound Ethic’s</p>
          <p className="css-4hzbpn leading-[normal] mb-0 text-[24px]">Audio Deepfake Detection System</p>
          <ul>
            <li className="css-4hzbpn css-fm2jt4 list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[normal] text-[#62676d] text-[24px]">Skills: Python, Machine Learning/AI, Figma, GCP, Vercel</span>
            </li>
          </ul>
        </a>
        <a className="absolute block h-[290px] left-[18.49px] top-[11px] w-[427px]" data-name="image 12" href="https://uci-cap.vercel.app/">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[115.17%] left-[-0.04%] max-w-none top-[-10%] w-[102.43%]" src={img3} />
          </div>
        </a>
      </div>
      <a className="absolute block font-['Epilogue:SemiBold',sans-serif] font-semibold h-[140px] leading-[0] left-[236.99px] text-[0px] text-black text-center top-[286px] translate-x-[-50%] w-[471px]" href="https://uci-cap.vercel.app/">
        <p className="css-4hzbpn leading-[normal] mb-0 text-[22.95px]">&nbsp;</p>
        <p className="css-4hzbpn leading-[normal] mb-0 text-[24px]">Sound Ethic’s</p>
        <p className="css-4hzbpn leading-[normal] mb-0 text-[24px]">Audio Deepfake Detection System</p>
        <ul>
          <li className="css-4hzbpn css-fm2jt4 list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[#62676d] text-[24px]">Skills: Python, Machine Learning/AI, Figma, GCP, Vercel</span>
          </li>
        </ul>
      </a>
      <a className="absolute block h-[290px] left-[18.49px] top-[11px] w-[427px]" data-name="Sound Ethics Image" href="https://uci-cap.vercel.app/">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.17%] left-[-0.04%] max-w-none top-[-10%] w-[102.43%]" src={img3} />
        </div>
      </a>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[270px] left-[0.48px] overflow-clip top-[0.75px] w-[470px]">
      <div className="absolute bg-[#5497d9] h-[240px] left-[38px] rounded-[40px] top-[30px] w-[395px]" />
      <div className="absolute font-['Epilogue:ExtraBold',sans-serif] font-extrabold h-[174px] leading-[normal] left-[235.5px] text-[0px] text-center text-white top-[66px] translate-x-[-50%] w-[349px]">
        <p className="css-4hzbpn mb-0 text-[40px]">&nbsp;</p>
        <p className="css-4hzbpn text-[64px]">Fabflix</p>
      </div>
    </div>
  );
}

function FabflixDesign() {
  return (
    <div className="absolute h-[270px] left-[0.48px] overflow-clip top-[0.75px] w-[470px]" data-name="Fabflix Design">
      <div className="absolute bg-[#5497d9] h-[240px] left-[38px] rounded-[40px] top-[30px] w-[395px]" />
      <div className="absolute font-['Epilogue:ExtraBold',sans-serif] font-extrabold h-[174px] leading-[normal] left-[235.5px] text-[0px] text-center text-white top-[66px] translate-x-[-50%] w-[349px]">
        <p className="css-4hzbpn mb-0 text-[40px]">&nbsp;</p>
        <p className="css-4hzbpn text-[64px]">Fabflix</p>
      </div>
    </div>
  );
}

function FabflixFrame() {
  return (
    <div className="h-[425.903px] overflow-clip relative shrink-0 w-[470.97px]" data-name="Fabflix Frame">
      <div className="absolute h-[425.903px] left-[0.38px] overflow-clip top-0 w-[470.97px]" data-name="Fabflix Instance">
        <a className="absolute bg-[#d9d9d9] block cursor-pointer h-[426.112px] left-[0.38px] rounded-[30.601px] top-0 w-[470.483px]" href="https://www.youtube.com/watch?v=RcY18-ggd_M" />
        <div className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold h-[118px] leading-[0] left-[236.48px] text-[24px] text-black text-center top-[307.75px] translate-x-[-50%] w-[468px]">
          <p className="css-4hzbpn leading-[normal] mb-0">{`Fabflix Full-Stack `}</p>
          <p className="css-4hzbpn leading-[normal] mb-0">{`Movie Web Application `}</p>
          <ul>
            <li className="css-4hzbpn css-fm2jt4 list-disc ms-[36px]">
              <span className="leading-[normal] text-[#62676d]">Skills: Java, Javascript, HTML, CSS, SQL, Database, Docker</span>
            </li>
          </ul>
        </div>
        <Frame5 />
      </div>
      <div className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold h-[118px] leading-[0] left-[236.48px] text-[24px] text-black text-center top-[307.75px] translate-x-[-50%] w-[468px]">
        <p className="css-4hzbpn leading-[normal] mb-0">{`Fabflix Full-Stack `}</p>
        <p className="css-4hzbpn leading-[normal] mb-0">{`Movie Web Application `}</p>
        <ul>
          <li className="css-4hzbpn css-fm2jt4 list-disc ms-[36px]">
            <span className="leading-[normal] text-[#62676d]">Skills: Java, Javascript, HTML, CSS, SQL, Database, Docker</span>
          </li>
        </ul>
      </div>
      <FabflixDesign />
    </div>
  );
}

function ProjectFrame() {
  return (
    <div className="absolute content-stretch flex gap-[150px] h-[497px] items-center justify-center left-[-1px] overflow-clip top-[103px] w-[1440px]" data-name="Project Frame">
      <SoundEthicsFrame />
      <FabflixFrame />
    </div>
  );
}

function Projects({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Projects">
      <p className="absolute css-4hzbpn font-['Epilogue:SemiBold',sans-serif] font-semibold h-[55px] leading-[normal] left-[54px] text-[#d9d9d9] text-[40px] top-[48px] w-[328px]">Projects</p>
      <ProjectFrame />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 1">
      <Navigation />
      <Header />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
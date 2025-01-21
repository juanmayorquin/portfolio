import {
  SiPython,
  SiUnity,
  SiMysql,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiFigma,
  SiBlender,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiTableau,
  SiGooglecloud,
  SiAdobeaftereffects,
} from "react-icons/si";

import SkillCard from "../components/SkillCard";
import { useRef, useState } from "react";

const HardSkillsSection = () => {
  const skills = [
    {
      Icon: SiHtml5,
      name: "HTML5",
      color: "#E34F26",
      categories: ["Front-End"],
    },
    { Icon: SiCss3, name: "CSS3", color: "#1572B6", categories: ["Front-End"] },
    {
      Icon: SiGit,
      name: "Git",
      color: "#F05032",
      categories: ["Back-End", "Front-End"],
    },
    {
      Icon: SiJavascript,
      name: "JavaScript",
      color: "#F7DF1E",
      categories: ["Front-End"],
    },
    { Icon: SiFigma, name: "Figma", color: "#A259FF", categories: ["Design"] },
    {
      Icon: SiAdobephotoshop,
      name: "Photoshop",
      color: "#31A8FF",
      categories: ["Design"],
    },
    {
      Icon: SiAdobeillustrator,
      name: "Illustrator",
      color: "#FF9A00",
      categories: ["Design"],
    },
    {
      Icon: SiAdobepremierepro,
      name: "Premiere",
      color: "#9999FF",
      categories: ["Design"],
    },
    {
      Icon: SiAdobeaftereffects,
      name: "After Effects",
      color: "#bd65f7",
      categories: ["Design"],
    },
    {
      Icon: SiTailwindcss,
      name: "TailwindCSS",
      color: "#06B6D4",
      categories: ["Front-End"],
    },
    {
      Icon: SiTypescript,
      name: "TypeScript",
      color: "#3178C6",
      categories: ["Front-End"],
    },
    {
      Icon: SiPython,
      name: "Python",
      color: "#3776AB",
      categories: ["Back-End", "Data Analysis"],
    },
    {
      Icon: SiReact,
      name: "React",
      color: "#61DAFB",
      categories: ["Front-End"],
    },
    {
      Icon: SiFirebase,
      name: "Firebase",
      color: "#FFCA28",
      categories: ["Back-End"],
    },
    {
      Icon: SiMysql,
      name: "MySQL",
      color: "#4479A1",
      categories: ["Back-End"],
    },
    {
      Icon: SiPostgresql,
      name: "PostgreSQL",
      color: "#336791",
      categories: ["Back-End"],
    },
    {
      Icon: SiNodedotjs,
      name: "Node.js",
      color: "#339933",
      categories: ["Back-End"],
    },
    {
      Icon: SiExpress,
      name: "Express.js",
      color: "#FFFFFF",
      categories: ["Back-End"],
    },
    {
      Icon: SiMongodb,
      name: "MongoDB",
      color: "#47A248",
      categories: ["Back-End"],
    },
    {
      Icon: SiBlender,
      name: "Blender",
      color: "#F5792A",
      categories: ["Design"],
    },
    { Icon: SiUnity, name: "Unity", color: "#FFFFFF", categories: ["Design"] },
    {
      Icon: SiTableau,
      name: "Tableau",
      color: "#E97627",
      categories: ["Data Analysis"],
    },
    {
      Icon: SiGooglecloud,
      name: "Google Cloud",
      color: "#4285F4",
      categories: ["Back-End", "Data Analysis"],
    },
  ];

  let categories = [];
  skills.forEach((skill) => {
    categories.push(...skill.categories);
  });
  const skillsCategories = ["All", ...new Set(categories)];
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleHover = (e) => {
    const sectionLeft = sectionRef.current.getBoundingClientRect().left;
    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    setBackDropStyle({
      transform: `translate(${-(sectionLeft - left)}px)`,
      top: `${-(sectionTop - top)}px`,
      width: width,
      height: height,
      opacity: 100,
    });
  };

  const [backDropStyle, setBackDropStyle] = useState({});
  const sectionRef = useRef();

  return (
    <section id="skills" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        Technical
        <span className="text-neutral-700 inline-block">Toolbox</span>
      </h2>
      <div
        onMouseLeave={() => {
          setBackDropStyle((prevStyle)=>({...prevStyle, opacity: 0}));
        }}
        ref={sectionRef}
        className="flex flex-wrap gap-4 relative"
      >
        <div
          className="absolute backdrop-blur rounded bg-white/5 transition-all ease-in-out"
          style={backDropStyle}
        ></div>
        {skillsCategories.map((category) => (
          <button
            key={category}
            className="z-10 min-w-20 opacity-100 font-medium text-lg aria-pressed:border-b-4 border-transparent rounded py-2 px-3 aria-pressed:bg-white/5 aria-pressed:border-orange-600 border-b-0 text-neutral-200 hover:text-white transition-all"
            onClick={() => {
              setCategoryFilter(category);
            }}
            onMouseEnter={handleHover}
            aria-pressed={categoryFilter === category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 mt-3">
        {categoryFilter !== "All"
          ? skills
              .filter((skill) => skill.categories.includes(categoryFilter))
              .map((skill) => <SkillCard {...skill} key={skill.name} />)
          : skills.map((skill) => <SkillCard {...skill} key={skill.name} />)}
      </div>
    </section>
  );
};

export default HardSkillsSection;

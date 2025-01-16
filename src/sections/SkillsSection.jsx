import {
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import SkillCard from "../components/SkillCard";
const SkillsSection = () => {
  const skills = [
    { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { Icon: SiGit, name: "Git", color: "#F05032" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiTailwindcss, name: "TailwindCSS", color: "#06B6D4" },
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiRedux, name: "Redux", color: "#764ABC" },
    { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { Icon: SiExpress, name: "Express.js", color: "#FFFFFF" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  ];  

  return (
    <section id="education" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        Strengths
        <span className="text-neutral-700 inline-block">& Skills</span>
      </h2>
      <div className="flex flex-wrap gap-5">
        {skills.map((skill) => (
          <SkillCard {...skill} key={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

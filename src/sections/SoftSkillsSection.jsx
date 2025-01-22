import {
  LuBookOpen,
  LuBrain,
  LuClock,
  LuLightbulb,
  LuMessageCircle,
  LuShuffle,
  LuSmile,
  LuUsers,
  LuZoomIn,
} from "react-icons/lu";
import SkillCard from "../components/SkillCard";
import Section from "../components/Section";

const SoftSkillsSection = () => {
  const softSkills = [
    { name: "Team Collaboration", Icon: LuUsers, color: "#00FF00" }, // Verde neón
    { name: "Problem Solving", Icon: LuBrain, color: "#FF4500" }, // Naranja rojizo brillante
    {
      name: "Effective Communication",
      Icon: LuMessageCircle,
      color: "#00BFFF",
    }, // Azul neón
    { name: "Continuous Learning", Icon: LuBookOpen, color: "#9400D3" }, // Violeta brillante
    { name: "Time Management", Icon: LuClock, color: "#FFD700" }, // Amarillo vivo
    { name: "Critical Thinking", Icon: LuLightbulb, color: "#FF6347" }, // Rojo tomate
    { name: "Attention to Detail", Icon: LuZoomIn, color: "#00FFFF" }, // Cian neón
    { name: "Adaptability", Icon: LuShuffle, color: "#FF00FF" }, // Fucsia
    { name: "Customer Focus", Icon: LuSmile, color: "#1E90FF" }, // Azul real saturado
  ];

  return (
    <Section id={"soft-skills"} title={"Personal Strengths"}>
      <div className="flex flex-wrap gap-4">
        {softSkills.map((skill) => (
          <SkillCard {...skill} key={skill.name} />
        ))}
      </div>
    </Section>
  );
};

export default SoftSkillsSection;

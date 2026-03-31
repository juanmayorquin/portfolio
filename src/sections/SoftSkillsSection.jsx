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
import { useTranslation } from "react-i18next";

const SoftSkillsSection = () => {
  const { t } = useTranslation();

  const softSkills = [
    { nameKey: "sections.softSkills.teamCollaboration", Icon: LuUsers, color: "#00FF00" },
    { nameKey: "sections.softSkills.problemSolving", Icon: LuBrain, color: "#FF4500" },
    { nameKey: "sections.softSkills.effectiveCommunication", Icon: LuMessageCircle, color: "#00BFFF" },
    { nameKey: "sections.softSkills.continuousLearning", Icon: LuBookOpen, color: "#9400D3" },
    { nameKey: "sections.softSkills.timeManagement", Icon: LuClock, color: "#FFD700" },
    { nameKey: "sections.softSkills.criticalThinking", Icon: LuLightbulb, color: "#FF6347" },
    { nameKey: "sections.softSkills.attentionToDetail", Icon: LuZoomIn, color: "#00FFFF" },
    { nameKey: "sections.softSkills.adaptability", Icon: LuShuffle, color: "#FF00FF" },
    { nameKey: "sections.softSkills.customerFocus", Icon: LuSmile, color: "#1E90FF" },
  ];

  return (
    <Section id="soft-skills" title={t("sections.softSkills.sectionTitle")}>
      <div className="flex flex-wrap justify-center items-center lg:justify-normal lg:items-start gap-4 mt-3">
        {softSkills.map((skill) => (
          <SkillCard {...skill} name={t(skill.nameKey)} key={skill.nameKey} />
        ))}
      </div>
    </Section>
  );
};

export default SoftSkillsSection;

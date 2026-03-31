import SkillCard from "../components/SkillCard";
import { useRef, useState } from "react";
import Section from "../components/Section";
import { skills } from "../data/skills";
import { useTranslation } from "react-i18next";

const HardSkillsSection = () => {
  const { t } = useTranslation();

  const categoryKeyMap = {
    All: "sections.skills.categories.all",
    "Front-End": "sections.skills.categories.frontEnd",
    "Back-End": "sections.skills.categories.backEnd",
    "Data Analysis": "sections.skills.categories.dataAnalysis",
    Design: "sections.skills.categories.design",
    Automation: "sections.skills.categories.automation",
  };

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
    <Section id="skills" title={t("sections.skills.sectionTitle")}>
      <div
        onMouseLeave={() => {
          setBackDropStyle((prevStyle) => ({ ...prevStyle, opacity: 0 }));
        }}
        ref={sectionRef}
        className="flex flex-wrap gap-4 relative"
      >
        <div
          className="hidden lg:block absolute backdrop-blur rounded bg-white/5 transition-all ease-in-out"
          style={backDropStyle}
        ></div>
        {skillsCategories.map((category) => (
          <button
            key={category}
            className="z-10 min-w-20 opacity-100 font-medium text-sm md:text-lg aria-pressed:border-b-4 border-transparent rounded py-2 px-3 aria-pressed:bg-white/5 aria-pressed:border-orange-600 border-b-0 text-neutral-200 hover:text-white transition-all"
            onClick={() => {
              setCategoryFilter(category);
            }}
            onMouseEnter={handleHover}
            aria-pressed={categoryFilter === category}
          >
            {t(categoryKeyMap[category] ?? category)}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center lg:justify-normal lg:items-start gap-4 mt-3">
        {categoryFilter !== "All"
          ? skills
              .filter((skill) => skill.categories.includes(categoryFilter))
              .map((skill) => <SkillCard {...skill} key={skill.name} />)
          : skills.map((skill) => <SkillCard {...skill} key={skill.name} />)}
      </div>
    </Section>
  );
};

export default HardSkillsSection;

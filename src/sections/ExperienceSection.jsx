import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/experience";

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="experience" title={t("sections.experience.sectionTitle")}>
      <div className="timeline relative flex flex-col gap-6">
        <div
          className="w-1 h-full absolute left-[0.33rem] md:left-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(234, 88, 12, 0) 0%, rgba(234, 88, 12, 1) 10%, rgba(234, 88, 12, 1) 90%, rgba(234, 88, 12, 0) 100%)",
          }}
        />
        {experience.map((job, index) => (
          <TimelineItem
            key={index}
            title={t(job.titleKey)}
            school={job.company}
            initYear={job.dateRange.split(" – ")[0]}
            finishYear={job.dateRange.split(" – ")[1]}
            bullets={t(job.bulletsKey, { returnObjects: true })}
          />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;

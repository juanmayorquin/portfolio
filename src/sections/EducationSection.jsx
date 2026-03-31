import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import { education } from "../data/education";

const EducationSection = () => {
  const { t } = useTranslation();

  const courses = education.map((item) => ({
    title: t(item.titleKey),
    school: t(item.schoolKey),
    skills: item.skills,
    initDate: item.initDate,
    finishDate: item.finishDate,
    gpa: item.gpa,
  }));

  return (
    <Section id="education" title={t("sections.education.sectionTitle")}>
      <Timeline events={courses} />
    </Section>
  );
};

export default EducationSection;

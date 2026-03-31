import { useTranslation } from "react-i18next";
import Project from "../components/Project";
import Section from "../components/Section";
import { projects } from "../data/projects";

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects" title={t("sections.projects.sectionTitle")}>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={t(project.titleKey)}
            description={t(project.descriptionKey)}
            deployLink={project.deployLink}
            gitHubLink={project.gitHubLink}
            tags={project.tags}
          />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;

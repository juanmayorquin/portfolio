import Project from "../components/Project";
import Section from "../components/Section";

const ProjectsSection = () => {
  const projects = [
    {
      img: "/projectsImg/screenshot.png",
      title: "Project Title",
      description: "Short and clear project description",
      deployLink: "#",
      gitHubLink: "#",
      tags: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Redux"],
    },
    {
      img: "/projectsImg/screenshot.png",
      title: "Another Project Title",
      description: "Another short and clear project description",
      deployLink: "#",
      gitHubLink: "#",
      tags: ["HTML", "CSS", "TypeScript", "Preact"],
    },
    {
      img: "/projectsImg/screenshot.png",
      title: "A Random Project ",
      description: "Another short and clear project description",
      deployLink: "#",
      gitHubLink: "#",
      tags: ["HTML", "CSS", "TypeScript"],
    },
  ];
  return (
    <Section id={"projects"} title={"Recent Projects"}>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;

import Project from "../components/Project";

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
    <section id="projects" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        Recent
        <span className="text-neutral-700 block">Projects</span>
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

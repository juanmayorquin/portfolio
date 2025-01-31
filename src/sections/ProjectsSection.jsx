import Project from "../components/Project";
import Section from "../components/Section";

const ProjectsSection = () => {
  const projects = [
    {
      img: "/projectsImg/Vroom-co-ecommerce.webp",
      title: "Vroom Co. E-Commerce",
      description: "E-Commerce for a clothes brand",
      deployLink: "https://vroom-co.vercel.app/",
      gitHubLink: "https://github.com/juanmayorquin/vroom-co-ecommerce",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "TailwindCSS",
        "React",
        "Firebase",
        "Firestore",
      ],
    },
    {
      img: "/projectsImg/Memorias.webp",
      title: "Memorias | 50 años entre historias",
      description:
        "Sistema multimedia interactivo basado en Memorias, celebrando los 50 años de la UAO",
      deployLink: "https://juanmayorquin.github.io/memorias/",
      gitHubLink: "https://github.com/juanmayorquin/memorias",
      tags: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React"],
    },
    {
      img: "/projectsImg/BioARLab.webp",
      title: "BioARLab",
      description:
        "Sistema multimedia interactivo que permite vistas AR de elementos de laboratorio de la carrera Ing. BiomédicaF",
      deployLink: "https://juanmayorquin.github.io/visor-ar/",
      gitHubLink: "https://github.com/juanmayorquin/visor-ar",
      tags: ["HTML", "CSS", "TailwindCSS", "React"],
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

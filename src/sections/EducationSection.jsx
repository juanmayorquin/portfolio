import Timeline from "../components/Timeline";

const EducationSection = () => {
  const courses = [
    {
      title: "Ingeniería Multimedia",
      school: "Universidad Autónoma de Occidente",
      skills: ["HTML", "CSS", "JavaScript", "MySQL"],
      initDate: "Jul, 2021",
      finishDate: "May,2026",
    },
    {
      title: "Full Stack Open",
      school: "Helsinki University",
      skills: ["React", "MongoDB", "TypeScript"],
      initDate: "Jul, 2024",
      finishDate: "Dec, 2024",
    },
    {
      title: "Certificado profesional de Análisis de datos de Google",
      school: "Google Career Certificates",
      skills: ["PostgreSQL", "Tableau", "Data Analysis"],
      initDate: "Jan, 2025",
      finishDate: "Jul, 2025",
    },
  ];
  return (
    <section id="education" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        Learning
        <span className="text-neutral-700 inline-block">Path</span>
      </h2>
      <Timeline events={courses} />
    </section>
  );
};

export default EducationSection;

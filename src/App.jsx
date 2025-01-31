import EducationSection from "./sections/EducationSection";
import MainSection from "./sections/MainSection";
import Navbar from "./components/Navbar";
import PresentationCard from "./components/PresentationCard";
import ProjectsSection from "./sections/ProjectsSection";
import HardSkillsSection from "./sections/HardSkillsSection";
import ContactForm from "./sections/ContactForm";
import Footer from "./components/Footer";
import SoftSkillsSection from "./sections/SoftSkillsSection";
import AboutMeSection from "./sections/AboutMeSection";

function App() {
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#251917] via-black to-black">
        <Navbar />
        <div className="w-full p-0 lg:p-16 flex flex-none items-center justify-center">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-20 relative">
            <aside className="h-full w-10/12 lg:w-1/3 m-auto lg:m-0 lg:sticky lg:top-1/2 lg:-translate-y-1/2">
              <PresentationCard />
            </aside>
            <main className="h-full lg:w-2/3 flex flex-col gap-20">
              <MainSection />
              <ProjectsSection />
              <HardSkillsSection />
              <SoftSkillsSection />
              <EducationSection />
              <AboutMeSection />
              <ContactForm />
            </main>
          </div>
        </div>
              <Footer />
      </div>
    </>
  );
}

export default App;

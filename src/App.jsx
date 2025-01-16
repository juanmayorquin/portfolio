import EducationSection from "./sections/EducationSection";
import MainSection from "./sections/MainSection";
import Navbar from "./components/Navbar";
import PresentationCard from "./components/PresentationCard";
import RecentProjects from "./sections/RecentProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactForm from "./sections/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#12181f] from-10% to-neutral-950">
        <Navbar />
        <div className="w-full flex flex-none items-center justify-center mt-16">
          <div className="w-full max-w-6xl flex gap-20 relative">
            <div className="h-full w-1/3 sticky top-1/2 -translate-y-1/2">
              <PresentationCard />
            </div>
            <div className="h-full w-2/3 flex flex-col gap-20">
              <MainSection />
              <RecentProjects />
              <SkillsSection />
              <EducationSection />
              <ContactForm />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

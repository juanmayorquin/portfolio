import EducationSection from "./components/EducationSection";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import PresentationCard from "./components/PresentationCard";
import RecentProjects from "./components/RecentProjectsSection";

function App() {
  return (
    <>
      <div className="bg-[#151213]">
        <Navbar />
        <div className="w-full flex flex-none items-center justify-center mt-16">
          <div className="w-full max-w-6xl flex gap-20 relative">
            <div className="h-full w-1/3 sticky top-10">
              <PresentationCard />
            </div>
            <div className="h-full w-2/3 flex flex-col gap-20">
              <MainSection />
              <RecentProjects />
              <EducationSection/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

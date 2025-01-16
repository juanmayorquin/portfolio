import Stat from "../components/Stat";
import { Layers, PanelsTopLeft, ArrowRight } from "lucide-react";

const MainSection = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-8xl uppercase">
          <span className="inline-block text-white">Multimedia</span>
          <span className="text-neutral-700">Engineer</span>
        </h2>
        <p className="text-lg text-neutral-400 w-[28rem]">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="flex w-96 justify-between">
        <Stat number={2} label={"Years of Experience"} />
        <Stat number={20} label={"Projects Completed"} />
      </div>
      <div className="flex gap-8 group">
        {/* Card 1 */}
        <div
          className="py-8 px-5 flex flex-col gap-6 w-72 bg-gradient-to-br from-orange-600 to-rose-600 rounded-xl text-white"
        >
          <Layers size={36} />
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-semibold text-2xl">
              Web Development & Data Analysis
            </h3>
            <div
              className={`w-min border rounded-lg p-1 self-end hover:bg-white hover:text-rose-600 transition-all hover:cursor-pointer`}
            >
              <a href={"#"}>
                <ArrowRight size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="py-8 px-5 flex flex-col gap-6 w-96 bg-gradient-to-br from-lime-500 to-teal-500  rounded-xl text-neutral-900"
        >
          <PanelsTopLeft size={36} />
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-semibold text-2xl">
              React, TypeScript, Tableau, MongoDB, SQL
            </h3>
            <div
              className={`w-min border border-neutral-900 rounded-lg p-1 self-end hover:bg-neutral-900 hover:text-teal-500 transition-all hover:cursor-pointer`}
            >
              <a href={"#"}>
                <ArrowRight size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
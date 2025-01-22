import Stat from "../components/Stat";
import { LuLayers3, LuCodeXml, LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";

const MainSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col gap-20 w-10/12 m-auto lg:m-0 lg:w-auto"
    >
      <div className="w-full flex flex-col gap-3">
        <h2 className="font-bold text-[2.75rem] leading-[3rem] md:text-7xl xl:text-8xl uppercase">
          <span className="block text-white">Multimedia</span>
          <span className="text-neutral-700 block">Engineer</span>
        </h2>
        <p className="lg:text-lg text-neutral-400 w-full">
          Driven by a love for technology and problem-solving, I specialize in
          building seamless web solutions and crafting data-driven experiences
          that make an impact.
        </p>
      </div>
      <div className="flex w-full md:w-96 gap-12 md:justify-between">
        <Stat number={2} label={"Years of Experience"} />
        <Stat number={20} label={"Projects Completed"} />
      </div>
      <div className="flex flex-col md:flex-row gap-8 group">
        {/* Card 1 */}
        <div className="py-8 px-5 flex flex-col gap-6 w-full xl:w-72 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
          <LuLayers3 size={36} />
          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-semibold text-2xl">
              Web Development & Data Analysis
            </h4>
            <div
              className={`w-min border rounded-lg p-1 self-end hover:bg-white hover:text-rose-600 transition-all hover:cursor-pointer`}
            >
              <a href={"#projects"}>
                <LuArrowRight size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="py-8 px-5 flex flex-col gap-6 w-full xl:w-96 bg-gradient-to-br from-lime-500 to-teal-500  rounded-xl text-neutral-900">
          <LuCodeXml size={36} />
          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-semibold text-2xl">
              JavaScript, React, Node.js, Python, Cloud
            </h4>
            <div
              className={`w-min border border-neutral-900 rounded-lg p-1 self-end hover:bg-neutral-900 hover:text-teal-500 transition-all hover:cursor-pointer`}
            >
              <a href={"#skills"}>
                <LuArrowRight size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MainSection;

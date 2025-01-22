import { LuLinkedin, LuGithub, LuMail, LuDownload } from "react-icons/lu";
import { motion } from "motion/react";

const PresentationCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-white w-full max-w-md m-auto lg:m-0 p-8 px-12 h-max flex flex-col items-center rounded-2xl justify-between"
    >
      <div className="aspect-square w-full bg-gradient-to-tr from-orange-500 to-red-600 rounded-xl p-3 pt-6 pb-0">
        <img
          className="w-full h-full"
          src="/Memoji.webp"
          alt="Memoji de Juan Mayorquín"
        />
      </div>
      <div className="flex flex-col h-3/5 gap-6 justify-between mt-5 text-center">
        <h1 className="font-bold text-3xl">Juan Mayorquín</h1>
        <a className="w-min m-auto" href="#">
          <div className="flex items-center justify-center gap-4 bg-orange-600 p-4 rounded-xl hover:text-neutral-800 transition-all text-white font-semibold">
            <LuDownload size={24} strokeWidth={2.5} />
            <p className="w-36">Download CV</p>
          </div>
        </a>
        <div className="flex flex-col items-center gap-6">
          <p className="text-neutral-500 font-medium text-lg leading-5">
          Multimedia Engineer and Data Enthusiast, crafting dynamic digital solutions.
          </p>
          <div className="flex text-orange-600 justify-between w-2/3">
            <a target="_blank" href="https://www.linkedin.com/in/juan-jos%C3%A9-mayorqu%C3%ADn-cabrera-09920b275/">
              <div className="hover:bg-black/5 hover:text-red-500 p-3 rounded-xl transition-all">
                <LuLinkedin size={24} />
              </div>
            </a>
            <a target="_blank" href="https://github.com/juanmayorquin">
              <div className="hover:bg-black/5 hover:text-red-500 p-3 rounded-xl transition-all">
                <LuGithub size={24} />
              </div>
            </a>
            <a href="mailto:juanjosemayorquincabrera@gmail.com">
              <div className="hover:bg-black/5 hover:text-red-500 p-3 rounded-xl transition-all">
                <LuMail size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PresentationCard;

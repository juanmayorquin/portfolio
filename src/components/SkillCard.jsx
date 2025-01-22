import { motion } from "motion/react";

/* eslint-disable react/prop-types */
const SkillCard = ({ Icon, name, color }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      viewport={{ once: true }}
      animate
      className="flex aspect-square md:aspect-auto w-36 md:w-56 p-4 gap-6 border-2 border-white/5 hover:border-current rounded-lg saturate-150 hover:cursor-default transition-all duration-200 group ease-in-out"
      style={{ color }}
    >
      <div className="flex flex-col md:flex-row w-full gap-5 justify-center items-center lg:justify-start">
        <Icon className="min-w-min" size={38} />
        <p className="text-start text-neutral-200 group-hover:text-white font-medium text-xs md:text-base transition-all">
          {name}
        </p>
      </div>
    </motion.article>
  );
};

export default SkillCard;

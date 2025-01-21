import { motion } from "motion/react";

/* eslint-disable react/prop-types */
const SkillCard = ({ Icon, name, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      viewport={{ once: true }}
      animate
      className="flex h-36 w-36 items-center justify-center gap-6 p-4 hover:bg-white/5 rounded-lg hover:-translate-y-1 hover:cursor-default transition-all group ease-in-out"
      style={{ color }}
    >
      <div className="z-10 flex flex-col gap-3 justify-center items-center">
        <Icon size={50} />
        <p className="text-lg text-center text-neutral-200 group-hover:text-white font-medium transition-all">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;

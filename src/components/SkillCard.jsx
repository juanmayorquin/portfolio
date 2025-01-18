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
      className="flex h-36 w-36 items-center justify-center rounded-xl gap-6 p-4 hover:bg-white/5 hover:-translate-y-1 transition-all group"
      style={{ color }}
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <Icon className="group-hover:scale-105 transition-all" size={50} />
        <p className="text-lg text-neutral-300 group-hover:text-white font-medium transition-all">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;

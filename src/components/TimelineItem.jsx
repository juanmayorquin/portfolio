import Tag from "./Tag";
import { motion } from "motion/react";

/* eslint-disable react/prop-types */
const TimelineItem = ({ title, school, initYear, finishYear, skills, bullets, gpa }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      viewport={{ once: true }}
      animate
      className="timeline-item flex items-start gap-5 group"
    >
      <div className="timeline-item-dot mt-6 aspect-square h-4 w-4 md:h-5 md:w-5 shrink-0 rounded-full bg-neutral-900 border-4 border-orange-600 group-hover:border-neutral-100 z-10 group-hover:bg-orange-600 group-hover:scale-[1.33] group-hover:shadow-sm shadow-orange-600 transition-all"></div>
      <div className="timeline-item-content w-full flex flex-col gap-3 group-hover:bg-white/5 group-hover:translate-x-1 px-8 py-5 rounded-xl transition-all">
        <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">{title}</h3>
        <p className="text-neutral-400 md:text-lg font-medium">{school}</p>
        {gpa && (
          <span className="self-start text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-600/20 text-orange-400 border border-orange-600/30">
            GPA {gpa} · Excellence Scholarship
          </span>
        )}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Tag name={skill} key={index} />
            ))}
          </div>
        )}
        {bullets && bullets.length > 0 && (
          <ul className="flex flex-col gap-1.5 mt-1">
            {bullets.map((bullet, index) => (
              <li key={index} className="text-neutral-400 text-sm md:text-base flex gap-2">
                <span className="text-orange-600 mt-1 shrink-0">▸</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="text-neutral-500 text-sm">
          {initYear} – {finishYear}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;

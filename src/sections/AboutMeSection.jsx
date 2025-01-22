import { motion } from "motion/react";
import Section from "../components/Section";
const AboutMeSection = () => {
  return (
    <Section id={"about-me"} title={"My Story So Far"}>
      <div className="text-neutral-200 text-pretty leading-7 flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
          animate
        >
          Hello! My name is Juan Mayorquín, but my friends call me{" "}
          <span className="accent">&quot;Mayo&quot;</span>! Since I was 5 years
          old, when I got my first computer,{" "}
          <span className="accent">video games</span> were my first passion. But
          soon, I found myself exploring the world of{" "}
          <span className="accent">programming</span>. I started with{" "}
          <span className="accent">Scratch</span>, and then dove into game
          development and object-oriented programming with{" "}
          <span className="accent">Java</span>. However, it was{" "}
          <span className="accent">web development</span> and{" "}
          <span className="accent">data analysis</span> that truly captured my
          heart. I’ve worked on several projects, but one that stands out is the{" "}
          <span className="accent">management system</span> I developed for a
          family business of <span className="accent">custom swimsuits</span>,
          which replaced their old paper system and improved order management,
          significantly boosting production!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
          animate
        >
          I’m someone who enjoys constant learning, and while my focus is on{" "}
          <span className="accent">web development</span>, I’m passionate about
          areas like <span className="accent">data analysis</span> and{" "}
          <span className="accent">multimedia design</span>. I believe that the
          skills I acquire in one area can always contribute to another, and I
          love how this has enriched not only my work but also my personal life.
          Outside of coding, I enjoy <span className="accent">reading</span>,{" "}
          <span className="accent">photography</span>, and I’m fascinated by the
          world of <span className="accent">F1</span> (Lando Norris is my idol!).
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
          animate
        >
          Looking ahead, my goal is to continue growing professionally, perfect my
          skills in <span className="accent">human relations</span>,{" "}
          <span className="accent">project management</span>, and{" "}
          <span className="accent">cybersecurity</span>, and of course,{" "}
          <span className="accent">lead teams</span>. I always strive to work with
          the best attitude and do things the best way possible. In the end, I
          believe that things well done <span className="accent">look good</span>.
        </motion.p>
      </div>
    </Section>
  );
};

export default AboutMeSection;

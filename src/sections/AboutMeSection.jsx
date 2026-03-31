import { motion } from "motion/react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";

const AboutMeSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="about-me" title={t("sections.aboutMe.sectionTitle")}>
      <div className="text-neutral-200 text-pretty leading-7 text-sm md:text-base flex flex-col gap-6">
        {["p1", "p2", "p3"].map((key) => (
          <motion.p
            key={key}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
            animate
          >
            {t(`sections.aboutMe.${key}`)}
          </motion.p>
        ))}
      </div>
    </Section>
  );
};

export default AboutMeSection;

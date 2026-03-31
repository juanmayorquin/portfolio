import {
  LuHouse,
  LuFolder,
  LuBook,
  LuWrench,
  LuUser,
  LuMail,
  LuBriefcase,
  LuLanguages,
} from "react-icons/lu";
import NavbarItem from "./NavbarItem";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      animate
      className="p-6 grid place-items-center text-white"
    >
      <nav className="flex items-center justify-between gap-1 w-full lg:place-self-end xl:place-self-auto md:w-auto px-4 py-3 bg-white/[0.03] rounded-xl">
        <div className="flex items-center gap-1">
          <NavbarItem Icon={LuHouse} href={"/"} label={t("navbar.home")} />
          <NavbarItem Icon={LuBriefcase} href={"#experience"} label={t("navbar.experience")} />
          <NavbarItem Icon={LuFolder} href={"#projects"} label={t("navbar.projects")} />
          <NavbarItem Icon={LuWrench} href={"#skills"} label={t("navbar.skills")} />
          <NavbarItem Icon={LuBook} href={"#education"} label={t("navbar.education")} />
          <NavbarItem Icon={LuUser} href={"#about-me"} label={t("navbar.aboutMe")} />
          <NavbarItem Icon={LuMail} href={"#contact"} label={t("navbar.contact")} />
        </div>
        <button
          onClick={toggleLanguage}
          aria-label="Toggle language"
          className="ml-2 flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white border border-neutral-700 hover:border-orange-600 rounded-lg px-2.5 py-1.5 transition-all"
        >
          <LuLanguages size={14} />
          {t("navbar.langToggle")}
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;

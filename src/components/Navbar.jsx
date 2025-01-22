import {
  LuHouse,
  LuFolder,
  LuBook,
  LuWrench,
  LuUser,
  LuMail,
} from "react-icons/lu";
import NavbarItem from "./NavbarItem";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      animate
      className="p-6 grid place-items-center text-white"
    >
      <nav className="flex justify-between gap w-full lg:place-self-end xl:place-self-auto md:w-80 px-8 py-4 bg-white/[0.03] rounded-xl">
        <NavbarItem Icon={LuHouse} href={"/"} label={"Home"} />
        <NavbarItem Icon={LuFolder} href={"#projects"} label={"Projects"} />
        <NavbarItem Icon={LuWrench} href={"#skills"} label={"Skills"} />
        <NavbarItem Icon={LuBook} href={"#education"} label={"Education"} />
        <NavbarItem Icon={LuUser} href={"#about-me"} label={"About Me"} />
        <NavbarItem Icon={LuMail} href={"#contact"} label={"Contact"} />
      </nav>
    </motion.header>
  );
};

export default Navbar;

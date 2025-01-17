import { LuHouse, LuFolder, LuBook, LuWrench, LuUser } from "react-icons/lu";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="p-6 grid place-items-center text-white">
      <nav className="flex justify-between gap w-80 px-8 py-4 bg-white/[0.03] rounded-xl">
        <NavbarItem Icon={LuHouse} href={"/"} label={"Home"}/>
        <NavbarItem Icon={LuFolder} href={"#projects"} label={"Projects"}/>
        <NavbarItem Icon={LuWrench} href={"#skills"} label={"Skills"}/>
        <NavbarItem Icon={LuBook} href={"#education"} label={"Education"}/>
        <NavbarItem Icon={LuUser} href={"#contact"} label={"Contact"}/>
      </nav>
    </div>
  );
};

export default Navbar;

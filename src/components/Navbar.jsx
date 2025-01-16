import { LuHouse, LuFolder, LuBook, LuWrench } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="w-full h-min p-6 grid place-items-center text-white">
      <nav className="flex justify-between w-72 px-8 py-3 bg-white/[0.03] rounded-xl">
        <div className="hover:scale-110 transition-all">
          <a href="/">
            <LuHouse size={22} />
          </a>
        </div>
        <div className="hover:scale-110 transition-all">
          <a href="#projects">
            <LuFolder size={22} />
          </a>
        </div>
        <div className="hover:scale-110 transition-all">
          <a href="#education">
            <LuBook size={22} />
          </a>
        </div>
        <div className="hover:scale-110 transition-all">
          <a href="#">
            <LuWrench size={22} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

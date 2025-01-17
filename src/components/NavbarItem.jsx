/* eslint-disable react/prop-types */
const NavbarItem = ({ Icon, href, label }) => {
  return (
    <a href={href}>
      <div className="relative hover:scale-110 hover:-translate-y-1 group transition-all">
        <Icon className="group-hover:text-white" size={22} />
        <p className="bg-black/30 py-1 px-3 opacity-0 left-1/2 -translate-x-1/2 top-12 text-sm font-medium rounded cursor-default invisible group-hover:visible group-hover:opacity-100 absolute transition-all">
          {label}
        </p>
      </div>
    </a>
  );
};

export default NavbarItem;

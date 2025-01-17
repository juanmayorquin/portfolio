/* eslint-disable react/prop-types */
const NavbarItem = ({Icon, href, label}) => {
  return (
    <div className="relative hover:scale-110 group transition-all">
          <a href={href}>
            <Icon className="group-hover:text-white" size={22} />
          </a>
          <p className="bg-black/30 py-1 px-3 opacity-0 left-1/2 -translate-x-1/2 top-10 text-sm rounded cursor-default invisible group-hover:visible group-hover:opacity-100 absolute transition-all">
            {label}
          </p>
        </div>
  )
}

export default NavbarItem
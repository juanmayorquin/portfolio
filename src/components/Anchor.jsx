// eslint-disable-next-line react/prop-types
const Anchor = ({ LucideIcon, href }) => {
  return (
    <a href={href}>
      <div className="text-white bg-orange-600 p-3 rounded-xl hover:text-neutral-800 transition-all">
        <LucideIcon size={24} />
      </div>
    </a>
  );
};

export default Anchor;

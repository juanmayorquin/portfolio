// eslint-disable-next-line react/prop-types
const Anchor = ({ Icon, href }) => {
  return (
    <a href={href}>
      <div className="text-white bg-orange-600 p-3 rounded-xl hover:text-neutral-800 transition-all">
        <Icon size={24} />
      </div>
    </a>
  );
};

export default Anchor;

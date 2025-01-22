/* eslint-disable react/prop-types */
const Stat = ({number, label}) => {
  return (
    <div className="w-min text-white hover:text-orange-600 transition-all cursor-default">
      <p className="text-4xl md:text-7xl font-semibold">+{number}</p>
      <p className="uppercase text-sm md:text-base text-neutral-500">{label}</p>
    </div>
  );
};

export default Stat;

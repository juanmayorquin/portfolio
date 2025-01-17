/* eslint-disable react/prop-types */
const SkillCard = ({ Icon, name, color }) => {
  return (
    <div
      className="flex h-32 w-32 items-center justify-center rounded-xl gap-6 p-4 hover:bg-white/5 hover:-translate-y-1 transition-all group"
      style={{color}}
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <Icon className="group-hover:scale-105 transition-all" size={50} />
        <p className="text-lg text-neutral-300 group-hover:text-white font-medium transition-all">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;

import Stat from "./Stat";

const MainSection = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-8xl uppercase">
          <span className="bg-gradient-to-br from-orange-500 to-red-600 inline-block text-transparent bg-clip-text">
            Multimedia
          </span>
          <span className="text-neutral-700">
            Engineer
          </span>
        </h2>
        <p className="text-lg text-neutral-400 w-[28rem]">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="flex w-96 justify-between">
        <Stat number={2} label={"Years of Experience"} />
        <Stat number={20} label={"Projects Completed"} />
      </div>
    </section>
  );
};

export default MainSection;

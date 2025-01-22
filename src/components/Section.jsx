/* eslint-disable react/prop-types */
const SectionContainer = ({ id, title = "", children }) => {
  const titleWords = title.split(" ");
  const part1 = titleWords.slice(0, (titleWords.length + 1) / 2);
  const part2 = titleWords.splice((titleWords.length + 1) / 2);

  return (
    <section id={id} className="flex flex-col gap-10 w-10/12 m-auto lg:w-auto lg:m-0">
      <h2 className="uppercase text-white font-bold text-5xl md:text-7xl xl:text-8xl inline-block">
        {part1 && part1.join(" ")}
        <span className="text-neutral-700 block">
          {part1 && part2.join(" ")}
        </span>
      </h2>
      {children}
    </section>
  );
};

export default SectionContainer;

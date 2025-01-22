/* eslint-disable react/prop-types */
const Section = ({ id, title1, title2, children }) => {
  return (
    <section id={id} className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        {title1}
        <span className="text-neutral-700 block">{title2}</span>
      </h2>
      {children}
    </section>
  );
};

export default Section;

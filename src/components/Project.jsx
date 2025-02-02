/* eslint-disable react/prop-types */
import { LuGithub, LuGlobe } from "react-icons/lu";
import Anchor from "./Anchor";
import { motion } from "motion/react";
import Tag from "./Tag";

const Project = ({ img, title, description, gitHubLink, deployLink, tags }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      viewport={{ once: true }}
      animate
      className="flex flex-col xl:flex-row items-center border-l-4 border-transparent hover:border-orange-600 justify-between rounded-l rounded-r-xl px-8 p-4 gap-5 hover:bg-white/5 hover:translate-x-2 transition-all"
    >
      <div className="flex flex-col xl:flex-row gap-10 xl:items-center">
        <img
          className="object-cover rounded-md aspect-video xl:aspect-square xl:w-32 w-full min-h-32"
          height={100}
          width={100}
          src={img}
          alt={title}
        />
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-white font-semibold text-3xl">{title}</h3>
            <p className="text-neutral-500 mt-1 text-lg">{description}</p>
          </div>
          <div className="flex flex-wrap text-neutral-200 gap-2">
            {tags && tags.map((tag, index) => <Tag name={tag} key={index} />)}
          </div>
        </div>
      </div>
      <div className="flex w-full xl:w-auto gap-4">
        {deployLink !== undefined && deployLink !== "" ? (
          <Anchor Icon={LuGlobe} href={deployLink} />
        ) : (
          ""
        )}
        {gitHubLink !== undefined && gitHubLink !== "" ? (
          <Anchor Icon={LuGithub} href={gitHubLink} />
        ) : (
          ""
        )}
      </div>
    </motion.article>
  );
};

export default Project;

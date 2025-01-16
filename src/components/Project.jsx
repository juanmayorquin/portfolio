/* eslint-disable react/prop-types */
import { LuGithub, LuGlobe } from "react-icons/lu";
import Anchor from "./Anchor";
import Tag from "./Tag";

const Project = ({ img, title, description, gitHubLink, deployLink, tags }) => {
  return (
    <article className="flex items-center justify-between rounded-xl px-8 p-4 gap-5 hover:bg-white/5 border-2 border-white/10  transition-all duration-300">
      <div className="flex gap-10 items-center">
        <img
          className="object-cover rounded-md h-32 w-32"
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
      <div className="flex gap-4">
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
    </article>
  );
};

export default Project;

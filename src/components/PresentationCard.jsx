import { LuLinkedin, LuGithub, LuMail, LuDownload } from "react-icons/lu";

const PresentationCard = () => {
  return (
    <div className="bg-white w-full p-8 px-12 h-[640px] flex flex-col items-center sticky rounded-2xl justify-between">
      <div className="bg-gradient-to-tr from-orange-500 to-red-600 rounded-xl p-3 pt-6 pb-0">
        <img
          className="w-full h-full"
          src="/src/assets/Memoji.webp"
          alt="Memoji de Juan Mayorquín"
        />
      </div>
      <div className="flex flex-col h-3/5 justify-between mt-5 text-center">
        <h1 className="font-bold text-3xl">Juan Mayorquín</h1>
        <a className="w-min m-auto" href="#">
          <div className="flex items-center justify-center gap-4 bg-orange-600 p-4 rounded-xl text-white font-semibold">
            <LuDownload size={28} strokeWidth={2.5}/>
            <p className="w-[12ch]">Descargar CV</p>
          </div>
        </a>
        <div className="flex flex-col items-center gap-6">
          <p className="text-neutral-500 font-medium text-lg leading-5">
            A Multimedia Engineer who has developed countless innovative
            solutions.
          </p>
          <div className="flex text-orange-600 justify-between w-2/3">
            <a href="#">
              <div className="hover:bg-black/5 hover:text-red-500 p-3 rounded-xl transition-all">
                <LuLinkedin size={24} />
              </div>
            </a>
            <a href="#">
              <div className="hover:bg-black/5 hover:text-red-500 p-3 rounded-xl transition-all">
                <LuGithub size={24} />
              </div>
            </a>
            <a href="#">
              <div className="hover:bg-black/5 hover:text-red-500 p-3 rounded-xl transition-all">
                <LuMail size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;

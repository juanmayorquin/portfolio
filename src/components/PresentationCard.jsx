import { Linkedin, Github, Mail } from "lucide-react";

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
                  <div className="flex flex-col items-center gap-6">
                    <p className="text-neutral-500 font-medium text-lg leading-5">
                      A Multimedia Engineer who has developed countless
                      innovative solutions.
                    </p>
                    <div className="flex text-orange-600 justify-between w-2/3">
                      <div className="hover:bg-black/5 hover:text-red-500 p-2 rounded-md transition-all">
                        <a href="#">
                          <Linkedin />
                        </a>
                      </div>
                      <div className="hover:bg-black/5 hover:text-red-500 p-2 rounded-md transition-all">
                        <a href="#">
                          <Github />
                        </a>
                      </div>
                      <div className="hover:bg-black/5 hover:text-red-500 p-2 rounded-md transition-all">
                        <a href="#">
                          <Mail />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default PresentationCard
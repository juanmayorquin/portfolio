import { House, Folder, BookMarked, Wrench } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full h-min p-6 grid place-items-center text-white">
          <nav className='flex justify-between w-72 px-8 py-3 bg-white/[0.03] rounded-xl'>
            <div className='hover:scale-110 transition-all'><a href='/'><House size={22}/></a></div>
            <div className='hover:scale-110 transition-all'><a href='#projects'><Folder size={22}/></a></div>
            <div className='hover:scale-110 transition-all'><a href='#education'><BookMarked size={22}/></a></div>
            <div className='hover:scale-110 transition-all'><a href='#'><Wrench size={22}/></a></div>
          </nav>
        </div>
  )
}

export default Navbar
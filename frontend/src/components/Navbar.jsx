import { Link } from 'react-router-dom';
import tigerLogo from '../assets/tiger-emoji.png';

function Navbar() {
  return (
    <nav className="bg-blue-700 border-b-4 border-black">
      
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* LOGO */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="bg-white border-2 border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-none transition-all">
                <span className="text-2xl"><img src={tigerLogo} /></span>
            </div>
            <span className="text-3xl font-black text-white tracking-widest uppercase shadow-black drop-shadow-[4px_4px_0_#000]">
                BigCats<span className="text-yellow-300">Wiki</span>
            </span>
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="flex flex-wrap justify-center gap-4">
              
              {/* ABOUT BUTTON */}
              <Link 
                  to="/about" 
                  className="bg-white text-black font-bold border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wider text-xs md:text-sm"
              >
                  [About System]
              </Link>

              <Link 
                  to="/quiz" 
                  className="bg-green-400 text-black font-bold border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wider text-xs md:text-sm"
              >
                  Take Quiz
              </Link>

              <Link 
                  to="/add" 
                  className="bg-yellow-300 text-black font-bold border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wider text-xs md:text-sm flex items-center gap-2"
              >
                  <span>+</span> Add Entry
              </Link>

          </div>
          
        </div>
      </div>
      
      <div className="bg-black text-white py-1 px-4 text-xs font-mono overflow-hidden whitespace-nowrap border-t-2 border-white">
        WELCOME TO THE BIG CATS DATABASE /// EST. 2025 /// UNDER CONSTRUCTION
      </div>

    </nav>
  );
}

export default Navbar;

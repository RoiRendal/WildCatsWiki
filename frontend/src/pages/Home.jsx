import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cats as initialCats } from '../data/cats';

function Home() {
  const [allCats, setAllCats] = useState(initialCats);

  useEffect(() => {
    const savedCats = JSON.parse(localStorage.getItem('customCats') || '[]');
    if (savedCats.length > 0) {
      setAllCats([...initialCats, ...savedCats]);
    }
  }, []);

  return (
    <div className="space-y-8 pb-10">
      
      {/* 
        === HERO SECTION ===
      */}
      <div className="border-4 border-black bg-cyan-300 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <div className="text-8xl font-black font-mono leading-none select-none">
                X_X<br/>0_0
            </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left space-y-3">
                <div className="inline-block bg-yellow-300 border-2 border-black px-2 py-0.5 font-mono text-[10px] md:text-xs font-bold mb-1 transform -rotate-1">
                    /// EST. 2025 /// FINAL PROJECT
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none drop-shadow-[3px_3px_0_#FFF]">
                    The Big Cat <br/>
                    <span className="text-pink-600">Database</span>
                </h1>
                <p className="text-sm md:text-base font-serif font-bold bg-white inline-block border-2 border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    Welcome to the ultimate archive of wild felines.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
                    <Link to="/quiz" className="bg-pink-500 text-white border-2 border-black px-5 py-2 font-mono text-sm font-bold hover:bg-pink-600 hover:shadow-[3px_3px_0px_0px_#000] transition-all uppercase">
                        [Start Quiz]
                    </Link>
                    <Link to="/add" className="bg-white text-black border-2 border-black px-5 py-2 font-mono text-sm font-bold hover:bg-gray-100 hover:shadow-[3px_3px_0px_0px_#000] transition-all uppercase">
                        [+ Add Entry]
                    </Link>
                </div>
            </div>

            {/* Retro Image Frame - Slightly smaller max width */}
            <div className="w-full md:w-64 flex-shrink-0">
                <div className="bg-white border-4 border-black p-1.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img 
                        src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600&auto=format&fit=crop" 
                        alt="Lion Roar" 
                        className="w-full h-40 md:h-48 object-cover border-2 border-black grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="text-center font-mono text-[10px] font-bold mt-1 bg-black text-white py-0.5">
                        REF: LION_01.JPG
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 
        === THE GRID === 
      */}
      <div>
        <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-black text-black bg-yellow-300 border-2 border-black px-3 py-1 shadow-[3px_3px_0px_0px_#000] inline-block uppercase transform -rotate-1">
                Directory
            </h2>
            <div className="h-1 bg-black flex-1"></div>
            <div className="h-3 w-3 bg-black"></div>
            <div className="h-3 w-3 bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allCats.map((cat) => (
            <Link to={`/cat/${cat.id}`} key={cat.id} className="group block h-full">
                <div className="bg-white border-4 border-black h-full flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                
                {/* Header Bar */}
                <div className="bg-black text-white px-2 py-1 flex justify-between items-center border-b-4 border-black">
                    <span className="font-mono text-[10px] uppercase truncate">ID: {cat.id}</span>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 border border-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 border border-white"></div>
                    </div>
                </div>

                {/* Image Area */}
                <div className="aspect-[4/3] overflow-hidden border-b-4 border-black relative bg-gray-200">
                    <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {cat.isCustom && (
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 border-l-2 border-b-2 border-black animate-pulse">
                            NEW
                        </div>
                    )}
                </div>

                {/* Content Area - Compact Padding */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-black mb-0.5 font-serif group-hover:underline decoration-2 decoration-pink-500 underline-offset-2 uppercase leading-tight">
                            {cat.name}
                        </h2>
                        <p className="text-gray-500 text-[10px] font-mono mb-2 border-b-2 border-gray-200 pb-1 truncate">
                            {cat.scientificName}
                        </p>
                        {/* Smaller description text */}
                        <p className="text-black text-xs font-serif line-clamp-3 leading-snug">
                            {cat.description}
                        </p>
                    </div>
                    
                    {/* Stats - Compact Table */}
                    <div className="mt-3 pt-2 border-t-2 border-dashed border-black">
                        <div className="grid grid-cols-2 gap-1 text-[10px] font-mono">
                            <div className="bg-gray-100 p-0.5 border border-black text-center">
                                <span className="block font-bold">SPD</span>
                                {cat.stats.speed}
                            </div>
                            <div className="bg-gray-100 p-0.5 border border-black text-center">
                                <span className="block font-bold">WGT</span>
                                {cat.stats.weight}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Link>
            ))}
        </div>
      </div>

    </div>
  );
}

export default Home;

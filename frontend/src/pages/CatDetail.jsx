import { cats } from '../data/cats';
import { useParams, Link } from 'react-router-dom';

/*  HELPER FUNCTION  */
// "biteForce" -> "Bite Force" . "lifespan" -> "Lifespan" .
const formatLabel = (key) => {
    // Split them by capital letters (camelCase), join with space, and capitalize first letter
    const result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
};

function CatDetail() {
    // 1. Get the "id" from the URL (e.g., 'tiger')
    const { id } = useParams();

    // 2. Find the specific cat the component needs in the data array
    const cat = cats.find((c) => c.id === id);

    // 3. Sooo... what if the user types /cat/dinosaur?
    if (!cat) {
        return <div className="text-center text-2xl mt-10">😿 The cat isn't here!</div>;
    }

    return (
      /* One Parent Element ONLY */
      
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-block mb-6 text-orange-600 hover:underline font-medium">
          &larr; Back to Gallery
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        
          {/* Hero Image */}
          <div className="h-64 md:h-96 w-full relative">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-linear-to-t from-black/70 to-transparent w-full p-6 pt-20">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">{cat.name}</h1>
                  <p className="text-stone-200 italic text-xl">{cat.scientificName}</p>
              </div>
          </div>

          {/* Content Layout: 2 Columns on Desktop, 1 on Mobile */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
            {/* Left: Main Description (Takes up 2 columns space) */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-stone-800">About</h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                    {cat.description}
                </p>
              </div>

              {/* For Scalability:
                  CONDITIONAL RENDERING
                  Only render this section if 'funFacts' exists in the data. */}
              {cat.funFacts && (
                  <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                      <h3 className="font-bold text-orange-800 mb-2">Did You Know?</h3>
                      <ul className="list-disc list-inside space-y-1 text-stone-700">
                          {cat.funFacts.map((fact, index) => (
                            <li key={index}>{fact}</li>
                          ))}
                      </ul>
                  </div>
            )}
            </div>

            {/* Right: Info Box (Takes up 1 column space)
                       Dynamic Stats                      */}
            <div className="bg-stone-50 p-6 rounded-xl h-fit border border-stone-100">
              <h3 className="font-bold text-stone-400 uppercase tracking-widest text-sm mb-4">
                Vital Stats
              </h3>
              
              {/* For Scalability:
                  This loops through WHATEVER keys are in the stats object. 
                  If you add "biteForce" to the data, it appears here automatically. */}
              <ul className="space-y-3">
                  {Object.entries(cat.stats).map(([key, value]) => (
                    <li key={key} className="flex justify-between border-b border-stone-200 pb-2">
                        <span className="text-stone-600">{formatLabel(key)}</span>
                        <span className="font-semibold text-stone-900 text-right">{value}</span>
                    </li>
                  ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
}

export default CatDetail;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function App() {
//   const [showTrailer, setShowTrailer] = useState(false);
//   const [showPoster, setShowPoster] = useState(false);

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section with Backdrop */}
//       <div className="relative h-screen">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: 'url("https://github.com/user-attachments/assets/24dc6966-22cd-4082-85ee-70efa441ac28")',
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
//         </div>

//         {/* Content */}
//         <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
//           <div className="max-w-2xl">
//             <h1 className="text-5xl font-bold mb-4">Malam Terakhir</h1>
            
//             <div className="flex items-center space-x-4 mb-6">
//               <span className="px-3 py-1 border border-white/20 rounded-full text-sm">18+</span>
//               <span className="px-3 py-1 border border-white/20 rounded-full text-sm">2024</span>
//             </div>

//             <p className="text-lg text-gray-300 mb-8">
//             Film ini adalah kisah horor ekspedisi malam. Menggambarkan karakter yang menghadapi "Malam Terakhir" yang penuh teror, mereka kemudian menyadari bahwa cerita belum berakhir dan harus menghadapi kengerian yang lebih besar keesokan harinya. Judul ini mencerminkan siklus kengerian yang terus berulang.
//             </p>

//             <div className="flex space-x-4">
//               <Link 
//                 to="/watch"
//                 className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg flex items-center space-x-2 transition-colors"
//               >
//                 Watch Now
//               </Link>
//               <button 
//                 onClick={() => setShowTrailer(true)}
//                 className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg flex items-center space-x-2 transition-colors"
//               >
//                 Watch Trailer
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Movie Info Footer */}
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-6">
//           <div className="container mx-auto px-6">
//             <div className="flex items-center space-x-6">
//               <img 
//                 src="https://github.com/user-attachments/assets/c8637d18-798e-4313-aeb8-85996f4f97e7" 
//                 alt="Malam Terakhir"
//                 onClick={() => setShowPoster(true)}
//                 className="w-24 h-36 object-cover rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105" 
//               />
//               <div>
//                 <div className="flex items-center space-x-2 mb-2">
//                   <span className="text-yellow-500">Malam Terakhir</span>
//                 </div>
//                 <div className="text-sm text-gray-400">
//                   Director: | Cast: Fadhil Teguh Amara, Jabir Muhammad Nizar, Shidiq Nur Hasan, Farel Anugrah Al Fauzan, Rivan Dio Ferdinan
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {showTrailer && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//           <div className="relative w-full max-w-4xl aspect-video">
//             <button 
//               onClick={() => setShowTrailer(false)}
//               className="absolute -top-12 right-0 text-white hover:text-gray-300"
//             >
//               ✕
//             </button>
//             <iframe
//               className="w-full h-full rounded-lg"
//               src="https://www.youtube.com/embed/SiXWVx16-Xk?si=kW-aVQouMeEMLGKk&amp;controls=0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {showPoster && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-lg">
//             <button 
//               onClick={() => setShowPoster(false)}
//               className="absolute -top-12 right-0 text-white hover:text-gray-300"
//             >
//               ✕
//             </button>
//             <img
//               src="https://github.com/user-attachments/assets/c8637d18-798e-4313-aeb8-85996f4f97e7"
//               alt="Movie Poster"
//               className="w-full rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [showTrailer, setShowTrailer] = useState(false);
  const [showPoster, setShowPoster] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Vimeo Background */}
      <div className="relative h-screen">
        <iframe
          src="https://player.vimeo.com/video/1045508635?autoplay=1&muted=1&loop=1&background=1"
          className="absolute inset-0 w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        
        {/* Content */}
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Malam Terakhir</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 border border-white/20 rounded-full text-sm">18+</span>
              <span className="px-3 py-1 border border-white/20 rounded-full text-sm">2024</span>
            </div>

            <p className="text-lg text-gray-300 mb-8">
              Film ini adalah kisah horor ekspedisi malam. Menggambarkan karakter yang menghadapi "Malam Terakhir" yang penuh teror, mereka kemudian menyadari bahwa cerita belum berakhir dan harus menghadapi kengerian yang lebih besar keesokan harinya. Judul ini mencerminkan siklus kengerian yang terus berulang.
            </p>

            <div className="flex space-x-4">
              <Link 
                to="/watch"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg flex items-center space-x-2 transition-colors"
              >
                Watch Now
              </Link>
              <button 
                onClick={() => setShowTrailer(true)}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg flex items-center space-x-2 transition-colors"
              >
                Watch Trailer
              </button>
            </div>
          </div>
        </div>

        {/* Movie Info Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-6">
          <div className="container mx-auto px-6">
            <div className="flex items-center space-x-6">
              <img 
                src="https://github.com/user-attachments/assets/c8637d18-798e-4313-aeb8-85996f4f97e7" 
                alt="Malam Terakhir"
                onClick={() => setShowPoster(true)}
                className="w-24 h-36 object-cover rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105" 
              />
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-yellow-500">Malam Terakhir</span>
                </div>
                <div className="text-sm text-gray-400">
                  Cast: Fadhil Teguh Amara, Jabir Muhammad Nizar, Shidiq Nur Hasan, Farel Anugrah Al Fauzan, Rivan Dio Ferdinan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button 
              onClick={() => setShowTrailer(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/SiXWVx16-Xk?si=kW-aVQouMeEMLGKk&amp;controls=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {showPoster && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-lg">
            <button 
              onClick={() => setShowPoster(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              ✕
            </button>
            <img
              src="https://github.com/user-attachments/assets/c8637d18-798e-4313-aeb8-85996f4f97e7"
              alt="Movie Poster"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

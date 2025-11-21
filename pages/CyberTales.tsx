import React from 'react';
import { Play, Info } from 'lucide-react';
import { Episode } from '../types';

export const CyberTales: React.FC = () => {
  const episodes: Episode[] = [
    { id: 1, title: "The Fake Giveaway Message", thumbnail: "https://picsum.photos/seed/cyber1/400/250", lesson: "Always double-check links—free gifts rarely exist.", duration: "20s" },
    { id: 2, title: "Password Wahala", thumbnail: "https://picsum.photos/seed/cyber2/400/250", lesson: "Why 'Password123' is an open door to hackers.", duration: "25s" },
    { id: 3, title: "The Urgent CEO Email", thumbnail: "https://picsum.photos/seed/cyber3/400/250", lesson: "Verify urgent money requests offline.", duration: "22s" },
  ];

  return (
    <div className="bg-[#FFF8F3] min-h-screen font-sans">
      {/* Fun Header */}
      <div className="bg-cyber-lavender/40 py-20 text-center border-b-4 border-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-purple-600 font-bold tracking-widest text-xs uppercase mb-2 block">CyberTales Africa</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-6" style={{ fontFamily: 'Poppins' }}>
            Cyber Wahala
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Cybersecurity Education Through Storytelling.
            <span className="block text-base mt-2 font-light">Relatable characters. Real scenarios. No boring lectures.</span>
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors shadow-lg flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" /> Watch Episodes
            </button>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm border border-purple-100">
              Book Training
            </button>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Sarah</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Cyber Wahala is a short-form animated series teaching Africans how to stay safe online. 
            Unlike traditional boring training, we use soft, calm, pastel-themed visuals and characters people love.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-purple-600 mb-2">Perfect For:</h3>
            <div className="flex flex-wrap gap-2">
              {['Young Adults', 'New Internet Users', 'Corporate Staff', 'Schools'].map(tag => (
                <span key={tag} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-md text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <img src="https://picsum.photos/seed/cartoon/600/600" alt="Sarah Character" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Episode Gallery */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {episodes.map((ep) => (
              <div key={ep.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative aspect-video">
                  <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{ep.duration}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{ep.title}</h3>
                  <div className="flex items-start gap-2 bg-purple-50 p-3 rounded-lg">
                    <Info className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700 font-medium italic">Lesson: {ep.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
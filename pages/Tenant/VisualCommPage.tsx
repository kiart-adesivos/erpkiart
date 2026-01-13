
import React from 'react';
import { MapPin, Calendar, Ruler, Camera } from 'lucide-react';

export const VisualCommPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Comunicação Visual</h1>
          <p className="text-gray-500">Gestão de projetos, medidas e instalações externa.</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-indigo-200 flex items-center gap-2">
          <Calendar size={18} /> Agendar Instalação
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group hover:border-indigo-400 transition-all">
            <div className="h-48 bg-gray-100 relative overflow-hidden">
               <img src={`https://picsum.photos/400/300?sig=${i}`} alt="Projeto" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase text-indigo-700">Instalação: 22/09</div>
            </div>
            <div className="p-6">
               <h3 className="font-bold text-lg mb-1">Fachada ACM - Loja Tech</h3>
               <p className="text-gray-500 text-sm mb-4">Cliente: Tech World Ltda</p>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="flex items-center gap-2 text-gray-600">
                    <Ruler size={16} className="text-indigo-500" />
                    <span className="text-xs font-medium">8.50 x 2.20m</span>
                 </div>
                 <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} className="text-indigo-500" />
                    <span className="text-xs font-medium">Centro, SP</span>
                 </div>
               </div>

               <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                 <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">M</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">P</div>
                 </div>
                 <button className="text-indigo-600 text-sm font-bold hover:underline flex items-center gap-1">
                   Ficha Técnica <Camera size={14} />
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

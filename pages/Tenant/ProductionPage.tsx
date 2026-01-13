
import React from 'react';
import { Clock, CheckCircle2, AlertCircle, Play } from 'lucide-react';

export const ProductionPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Ordens de Produção</h1>
        <p className="text-gray-500">Gerencie o fluxo produtivo da sua gráfica.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProductionStage title="Aguardando" count={5} color="border-gray-300" />
        <ProductionStage title="Pré-Impressão" count={3} color="border-blue-400" />
        <ProductionStage title="Em Impressão" count={8} color="border-indigo-500" />
        <ProductionStage title="Acabamento" count={4} color="border-amber-400" />
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
        <h3 className="text-lg font-bold">Monitor de Produção</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-300 transition-colors">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 text-blue-600">
                  {i % 2 === 0 ? <Clock size={24} /> : <Play size={24} />}
                </div>
                <div>
                  <p className="font-bold text-gray-800">OP #100{i} - Lona 440g Fosca</p>
                  <p className="text-xs text-gray-500 uppercase tracking-tighter font-medium">Cliente: Restaurante do Porto | Formato: 2000x1000mm</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-bold uppercase">Prazo</p>
                  <p className="text-sm font-semibold text-red-600">Hoje às 17h</p>
                </div>
                <div className="h-10 w-[1px] bg-gray-200"></div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all">
                  Avançar Etapa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductionStage = ({ title, count, color }: any) => (
  <div className={`bg-white p-4 rounded-xl border-t-4 ${color} shadow-sm border border-gray-200`}>
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</p>
    <p className="text-2xl font-black text-gray-900">{count}</p>
  </div>
);


import React from 'react';
import { Package, AlertCircle, ShoppingCart, Repeat } from 'lucide-react';

export const InventoryPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Estoque de Materiais</h1>
          <p className="text-gray-500">Insumos, papéis, lonas e tintas.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">+ Novo Item</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 font-bold">Listagem Geral</div>
          <table className="w-full text-left">
             <thead className="bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Material</th>
                <th className="px-6 py-4">Unidade</th>
                <th className="px-6 py-4">Estoque</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Lona 440g Brilho 1.60m', unit: 'M²', stock: 45, min: 20 },
                { name: 'Vinil Adesivo Branco 1.22m', unit: 'M²', stock: 12, min: 15 },
                { name: 'Chapa PVC 2mm', unit: 'UN', stock: 8, min: 5 },
                { name: 'Tinta Magenta Eco-Solv', unit: 'LT', stock: 1.5, min: 2 },
              ].map((m, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold">{m.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{m.unit}</td>
                  <td className="px-6 py-4 text-sm font-bold">{m.stock}</td>
                  <td className="px-6 py-4">
                    {m.stock <= m.min ? (
                      <span className="flex items-center gap-1 text-red-600 text-[10px] font-black uppercase"><AlertCircle size={14} /> Reposição Necessária</span>
                    ) : (
                      <span className="text-green-600 text-[10px] font-black uppercase">Normal</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2"><ShoppingCart className="text-blue-600" size={18} /> Compras Recomendadas</h3>
            <div className="space-y-3">
               <RecommendItem name="Vinil Adesivo" qty="30 M²" />
               <RecommendItem name="Tinta Magenta" qty="5 LT" />
            </div>
          </div>
          <div className="bg-blue-600 p-6 rounded-xl text-white shadow-lg shadow-blue-200">
            <h3 className="font-bold text-lg mb-2">Giro de Estoque</h3>
            <p className="text-blue-100 text-sm mb-4">Seu estoque está girando 15% mais rápido este mês.</p>
            <div className="flex items-end gap-2">
              <div className="h-12 w-3 bg-white/20 rounded-t"></div>
              <div className="h-16 w-3 bg-white/40 rounded-t"></div>
              <div className="h-20 w-3 bg-white/60 rounded-t"></div>
              <div className="h-24 w-3 bg-white rounded-t"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecommendItem = ({ name, qty }: any) => (
  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
    <span className="text-sm font-medium text-gray-700">{name}</span>
    <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">{qty}</span>
  </div>
);

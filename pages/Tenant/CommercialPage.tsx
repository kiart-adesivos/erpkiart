
import React, { useState } from 'react';
import { Search, Plus, Filter, UserPlus } from 'lucide-react';

export const CommercialPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leads' | 'quotes'>('quotes');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Módulo Comercial</h1>
          <p className="text-gray-500">Gestão de clientes e orçamentos.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">
            <UserPlus size={18} /> Novo Cliente
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-200">
            <Plus size={18} /> Novo Orçamento
          </button>
        </div>
      </div>

      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('quotes')}
          className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'quotes' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Orçamentos
        </button>
        <button 
          onClick={() => setActiveTab('leads')}
          className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'leads' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Clientes / Leads
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por cliente ou código..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
          <Filter size={18} /> Filtros
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4">Descrição</th>
              <th className="px-6 py-4">Valor Total</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { id: 'ORC-001', client: 'Padaria do Zé', date: '12/09/2024', desc: '500x Cartões de Visita', total: 'R$ 85,00', status: 'Aprovado' },
              { id: 'ORC-002', client: 'Auto Peças Express', date: '12/09/2024', desc: 'Fachada Lona Frontlight', total: 'R$ 2.450,00', status: 'Pendente' },
              { id: 'ORC-003', client: 'Clínica Saúde', date: '11/09/2024', desc: 'Adesivagem de Portas', total: 'R$ 1.100,00', status: 'Enviado' },
            ].map((orc) => (
              <tr key={orc.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-gray-500">{orc.id}</td>
                <td className="px-6 py-4 text-sm font-semibold">{orc.client}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{orc.date}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{orc.desc}</td>
                <td className="px-6 py-4 text-sm font-bold">{orc.total}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                    orc.status === 'Aprovado' ? 'bg-green-100 text-green-700' :
                    orc.status === 'Pendente' ? 'bg-amber-100 text-amber-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {orc.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 text-xs font-bold hover:underline">Ver Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
